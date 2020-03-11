const { Artigo } = require('../../database/models');

function create({ resumo, file }) {
  return Artigo.create({ resumo, file });
}

function getAll() {
  return Artigo.findAll();
}

function getById(id) {
  return Artigo.findByPk(id);
}

module.exports = {
  create,
  getAll,
  getById,
};
