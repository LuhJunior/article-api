const Router = require('express').Router();
const {
  store,
  findAll,
  findById,
  generateParticipanteData,
} = require('../app/participante');


const { participanteValidator } = require('../middlewares/validators');
const validationCheck = require('../middlewares/validationCheck');

Router.post('/', participanteValidator.post, validationCheck, store);
Router.post('/generate_participante_data', generateParticipanteData);

Router.get('/', findAll);
Router.get('/:id', participanteValidator.get, validationCheck, findById);

module.exports = Router;
