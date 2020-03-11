const {
  create,
  getAll,
  getById
} = require('./service');

function store(req, res, next) {
  try {
    const data = await create(req.body);
    res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

function findAll(req, res, next) {
  try {
    const data = await getAll();
    res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

function findById(req, res, next) {
  try {
    const data = await getById(req.params.id);
    res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  store,
  findAll,
  findById,
};
