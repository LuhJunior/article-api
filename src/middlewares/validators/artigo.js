const { body, param } = require('express-validator');

module.exports = {
  post: [
    body('resumo')
      .notEmpty()
      .isString()
      .isLength({ max: 255 }),
    body('file')
      .notEmpty()
      .isString(),
  ],
  get: [
    param('id')
      .notEmpty()
      .isInt()
      .toInt()
  ],
};
