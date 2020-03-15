const {
  getPagArtigo,
  getPagParticipante,
  getPagRevisor,
  getPagParticipanteArtigo,
  getPagRevisorArtigo,
} = require('./service');

async function findPagArtigo(req, res, next) {
  try {
    const data = await getPagArtigo(req.query.offset, req.query.limit);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  } 
}

async function findPagParticipante(req, res, next) {
  try {
    const data = await getPagParticipante(req.query.offset, req.query.limit);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  } 
}

async function findPagRevisor(req, res, next) {
  try {
    const data = await getPagRevisor(req.query.offset, req.query.limit);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  } 
}

async function findPagParticipanteArtigo(req, res, next) {
  try {
    const data = await getPagParticipanteArtigo(req.query.offset, req.query.limit);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  } 
}

async function findPagRevisorArtigo(req, res, next) {
  try {
    const data = await getPagRevisorArtigo(req.query.offset, req.query.limit);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  } 
}

module.exports = {
  findPagArtigo,
  findPagParticipante,
  findPagRevisor,
  findPagParticipanteArtigo,
  findPagRevisorArtigo,
};
