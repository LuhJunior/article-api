const { Artigo } = require('../../database/models');

function create({ resumo, file, created_at }) {
  return Artigo.create({ resumo, file, created_at });
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
