const { query } = require('express-validator');

module.exports = [
  query('offset')
    .notEmpty()
    .isInt()
    .toInt(),
  query('limit')
    .notEmpty()
    .isInt()
    .toInt(),
];
