const path = require('path');
const { Artigo, Participante } = require('../database/models');

const logger = require('../utils/logger');

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

async function generateParticipanteLote(lote, numeroRegistros) {
  try {
    const participantes = participanteTransform(await Participante.findAll({
      attributes: ['created_at'],
      include: [
        {
          association: 'Artigos',
          required: true,
        },
      ],
      offset: lote,
      limit: numeroRegistros,
    }));
    
    await FatoParticipante.bulkCreate(participantes);

    logger(path.join(__dirname, './log/mongo_log.txt'), [
      `Data: ${new Date().toDateString()} ${new Date().toTimeString()}`,
      `Carga do lote: ${lote + 1} de participantes`,
      `Status: Realizada com sucesso`,
    ].join('\n'));

    return participantes.length;
  } catch (e) {
    logger(path.join(__dirname, './log/mongo_log.txt'), [
      `Data: ${new Date().toDateString()} ${new Date().toTimeString()}`,
      `Carga do lote: ${lote + 1} de artigos`,
      `Status: Falha ao salvar lote`,
      `Detalhes: ${JSON.stringify(e)}`,
    ].join('\n'));
  }
};

module.exports = {
  generateArtigoLote,
  generateParticipanteLote,
};
