const Router = require('express').Router();
const {
  findPagArtigo,
  findPagParticipante,
  findPagRevisor,
  findPagParticipanteArtigo,
  findPagRevisorArtigo,
} = require('../app/exportacao');

const { exportacaoValidator } = require('../middlewares/validators');
const validationCheck = require('../middlewares/validationCheck');

Router.get('/artigo', exportacaoValidator, validationCheck, findPagArtigo);
Router.get('/participante', exportacaoValidator, validationCheck, findPagParticipante);
Router.get('/revisor', exportacaoValidator, validationCheck, findPagRevisor);
Router.get('/participante_artigo', exportacaoValidator, validationCheck, findPagParticipanteArtigo);
Router.get('/revisor_artigo', exportacaoValidator, validationCheck, findPagRevisorArtigo);

module.exports = Router;
