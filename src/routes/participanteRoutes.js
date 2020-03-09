const Router = require('express').Router();
const {
  store,
  findAll,
  findById,
  generateParticipanteData,
} = require('../app/participante');

Router.post('/', store);
Router.post('/generate_participante_data', generateParticipanteData);

Router.get('/', findAll);
Router.get('/:id', findById);

module.exports = Router;
