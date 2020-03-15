const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const errorMiddlewares = require('./middlewares/errors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/participante', routes.participante);
app.use('/api/artigo', routes.artigo);
app.use('/api/exportacao', routes.exportacao);

app.use(errorMiddlewares.errorHandler);
app.use(errorMiddlewares.notFoundHandler);

module.exports = app;
