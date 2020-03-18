const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '../../.env'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    port: process.envDB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
  },
  database_bi: {
    host: process.env.DB_BI_HOST,
    user: process.env.DB_BI_USER,
    password: process.env.DB_BI_PASS,
    name: process.env.DB_BI_NAME,
    port: process.envDB_BI_PORT,
    dialect: process.env.DB_BI_DIALECT,
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
  }
};
