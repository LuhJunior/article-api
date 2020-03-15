const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const e = new Error('Validation Error');
    e.code = 422;
    e.message = `Campo(s) inválido(s): ${[... Array.from(new Set(errors.array().map(({ param }) => param)))].join(', ')}`;
    e.isOperational = true;
    return next(e);
  }
  return next();
};
