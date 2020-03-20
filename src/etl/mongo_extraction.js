const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const { Participante } = require('../database/models');
const { mongo: { user, pass, cluster } } = require('../config');

const logger = require('../utils/logger');

const uri = `mongodb+srv://${user}:${pass}@${cluster}/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useUnifiedTopology: true });

function connect() {
  return new Promise((resolve, reject) => {
    client.connect(e => {
      if (e) return reject(e);
      return resolve(client);
    });
  });
}

function insertMany(collection, data) {
  return new Promise((resolve, reject) => {
    collection.insertMany(data, e => {
      if (e) return reject(e);
      return resolve(data);
    });
  });
}

const saveErr = (e, lote) => logger(path.join(__dirname, './log/mongo_log.txt'), [
  //`Data: ${new Date().toDateString()} ${new Date().toTimeString()}`,
  `Carga do lote: ${lote + 1}`,
  'Tabela: artigo',
  'Status: Falha ao salvar lote',
  `Detalhes: ${JSON.stringify(e)}`,
].join('\n'));

function participanteTransform(data) {
  return data.reduce(([participantes, artigos], participante) => {
    participantes.push({
      _id: participante.dataValues.id,
      nome: participante.dataValues.nome,
      endereco: participante.dataValues.endereco,
      telefone: participante.dataValues.telefone,
      email: participante.dataValues.email,
      local_emprego: participante.dataValues.local_emprego,
      numero_cartao: participante.dataValues.numero_cartao,
      vencimento_cartao: participante.dataValues.vencimento_cartao,
      marca_cartao: participante.dataValues.marca_cartao,
    });

    artigos.push({
      participante_id: participante.dataValues.id,
      resumo: participante.Artigos[0].dataValues.resumo,
      file: participante.Artigos[0].dataValues.file,
    });

    return [participantes, artigos];
  }, [[], []]);
}

module.exports = async function generateParticipanteLote(lote, numeroRegistros) {
  try {
    const participantes = await Participante.findAll({
      include: [
        {
          association: 'Artigos',
          required: true,
        },
      ],
      offset: lote * numeroRegistros,
      limit: numeroRegistros,
    });

    const [participantesTr, artigosTr]  = participanteTransform(participantes);

    await connect();
  
    const participanteCollection = client.db('article').collection('participante');
    const artigoCollection = client.db('article').collection('artigo');
    await insertMany(participanteCollection, participantesTr);
    await insertMany(artigoCollection, artigosTr);

    client.close();

    logger(path.join(__dirname, './log/mongo_log.txt'), [
      // `Data: ${new Date().toDateString()} ${new Date().toTimeString()}`,
      `Carga do lote: ${lote + 1}`,
      `Tabela: participante`,
      `Status: Realizada com sucesso`,
    ].join('\n'));

    return participantes.length;
  } catch (e) {
    saveErr(e, lote);
    return 0;
  }
};
