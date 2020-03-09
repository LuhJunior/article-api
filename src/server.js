const app = require('./app');

const { env, port } =  require('./config');

app.listen(port, (e) => {
  if (e) throw e;
  if (env === 'development') console.log(`Servidor rodando na porta ${port}`);
});
