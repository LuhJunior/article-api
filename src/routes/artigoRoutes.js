const Router = require('express').Router();
const {
  store,
  findAll,
  findById,
} = require('../app/artigo');

const { artigoValidator } = require('../middlewares/validators');
const validationCheck = require('../middlewares/validationCheck');

Router.post('/', artigoValidator.post, validationCheck, store);

Router.get('/', findAll);
Router.get('/:id', artigoValidator.get, validationCheck, findById);

module.exports = Router;
