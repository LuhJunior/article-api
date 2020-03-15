const {
  Artigo,
  Participante,
  Revisor,
  ParticipanteArtigo,
  RevisorArtigo,
} = require('../../database/models');

function getPagArtigo(offset, limit) {
  return Artigo.findAll({ offset, limit });
}

function getPagParticipante(offset, limit) {
  return Participante.findAll({ offset, limit });
}

function getPagRevisor(offset, limit) {
  return Revisor.findAll({ offset, limit });
}

function getPagParticipanteArtigo(offset, limit) {
  return ParticipanteArtigo.findAll({ offset, limit });
}

function getPagRevisorArtigo(offset, limit) {
  return RevisorArtigo.findAll({ offset, limit });
}

module.exports = {
  getPagArtigo,
  getPagParticipante,
  getPagRevisor,
  getPagParticipanteArtigo,
  getPagRevisorArtigo,
};
