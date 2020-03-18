const path = require('path');
const { Artigo, Participante } = require('../database/models');
const { FatoArtigo, FatoParticipante } = require('../database/models/etl');

const logger = require('../utils/logger');

const getSomaNotas = (soma, { RevisorArtigo: { dataValues: { nota } } }) => (soma + nota);


function artigoTransform(data) {
  return data.reduce((fatos, artigo) => {
    const fato = fatos.find(({ ano }) => ano === artigo.dataValues.created_at.getFullYear());
    if (fato) {
      const media = fato.media_nota * fato.quantidade_autores;
      fato.quantidade_autores++;
      fato.media_nota = (media + artigo.Revisores.reduce(getSomaNotas, 0) / 5) / fato.quantidade_autores;
    } else {
      fatos.push({
        ano: artigo.dataValues.created_at.getFullYear(),
        quantidade_autores: 1,
        media_nota: artigo.Revisores.reduce(getSomaNotas, 0) / 5,
      });
    }
    return fatos;
  }, []);
}

function participanteTransform(data) {
  return data.reduce((fatos, participante) => {
    const fato = fatos.find(({ ano }) => ano === participante.created_at.getFullYear());
    if (fato) {
      fato.quantidade_participantes++;
    } else {
      fatos.push({
        ano: participante.created_at.getFullYear(),
        quantidade_participantes: 1,
      });
    }
    return fatos;
  }, []);
}

async function generateArtigoLote(lote, numeroRegistros) {
  try {
    const artigos = await Artigo.findAll({
      attributes: ['id', 'created_at'],
      include: [
        {
          association: 'Revisores',
          through: {
            attributes: ['nota'],
          },
          required: true,
        }
      ],
      offset: lote * numeroRegistros,
      limit: numeroRegistros,
    });

    await FatoArtigo.bulkCreate(artigoTransform(artigos));

    logger(path.join(__dirname, './log/bi_log.txt'), [
      `Data: ${(new Date()).toDateString()} ${(new Date()).toTimeString()}`,
      `Carga do lote: ${lote + 1}`,
      'Tabela: artigo',
      'Status: Realizada com sucesso',
    ].join('\n'));

    return artigos.length;
  } catch (e) {
    logger(path.join(__dirname, './log/bi_log.txt'), [
      `Data: ${(new Date()).toDateString()} ${(new Date()).toTimeString()}`
      `Carga do lote: ${lote + 1}`,
      'Tabela: artigo',
      'Status: Falha ao salvar lote',
      `Detalhes: ${JSON.stringify(e)}`,
    ].join('\n'));
    return 0;
  }
};

async function generateParticipanteLote(lote, numeroRegistros) {
  try {
    const participantes = await Participante.findAll({
      raw: true,
      attributes: ['created_at'],
      offset: lote * numeroRegistros,
      limit: numeroRegistros,
    });
    
    await FatoParticipante.bulkCreate(participanteTransform(participantes));

    logger(path.join(__dirname, './log/bi_log.txt'), [
      `Data: ${(new Date()).toDateString()} ${(new Date()).toTimeString()}`,
      `Carga do lote: ${lote + 1}`,
      'Tabela: participante',
      'Status: Realizada com sucesso',
    ].join('\n'));

    return participantes.length;
  } catch (e) {
    logger(path.join(__dirname, './log/bi_log.txt'), [
      `Data: ${(new Date()).toDateString()} ${(new Date()).toTimeString()}`,
      `Carga do lote: ${lote + 1} de artigos`,
      'Tabela: de artigo',
      'Status: Falha ao salvar lote',
      `Detalhes: ${JSON.stringify(e)}`,
    ].join('\n'));
    return 0;
  }
};

module.exports = {
  generateArtigoLote,
  generateParticipanteLote,
};
