const Router = require('express').Router();
const {
  store,
  findAll,
  findById,
} = require('../app/artigo');

Router.post('/', store);

Router.get('/', findAll);
Router.get('/:id', findById);

module.exports = Router;
