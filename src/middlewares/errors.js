function errorHandler(err, req, res, next) {
  if (err.isOperational) {
    return res.status(err.code).send({ data: err });
  } else {
    console.log(err);
    if (err.statusCode) res.status(err.statusCode).send({ error: err.type });
  }
}

function notFoundHandler(req, res) {
  res.status(404).send({ message: 'Rota não encontrada' });
}

module.exports = {
  errorHandler,
  notFoundHandler,
};
