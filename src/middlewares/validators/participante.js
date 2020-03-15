const { body, param } = require('express-validator');

module.exports = {
  post: [
    body('nome')
      .notEmpty()
      .isString()
      .isLength({ max: 255 }),
    body('endereco')
      .notEmpty()
      .isString()
      .isLength({ max: 255 }),
    body('telefone')
      .notEmpty()
      .isString()
      .isLength({ max: 20 }),
    body('email')
      .notEmpty()
      .isString()
      .isLength({ max: 20 }),
    body('local_emprego')
      .notEmpty()
      .isString()
      .isLength({ max: 20 }),
    body('numero_cartao')
      .notEmpty()
      .isString()
      .isLength({ max: 30 }),
    body('vencimento_cartao')
      .notEmpty()
      .isString()
      .isLength({ max: 10 }),
    body('marca_cartao')
      .notEmpty()
      .isString()
      .isLength({ max: 10 }),
  ],
  get: [
    param('id')
      .notEmpty()
      .isInt()
      .toInt(),
  ],
};
