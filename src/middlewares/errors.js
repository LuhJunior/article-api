function errorHandler(err, req, res, next) {
  if (err.isOperational) {
    res.status(err.code).send({ data: err });
  } else {
    console.log(err);
    res.status(500).send({ error: 'Ocorreu um erro' });
  }
}

function notFoundHandler(req, res) {
  res.status(404).send({ message: 'Chora' });
}

module.exports = {
  errorHandler,
  notFoundHandler,
};