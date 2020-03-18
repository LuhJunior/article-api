const config = require('../config');

const { 
  host,
  user,
  password,
  name,
  port,
  dialect,
  logging,
} = config.database_bi;

module.exports = {
  host,
  port,
  username: user,
  password,
  database: name,
  dialect: dialect || 'mysql',
  define: {
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  },
  pool: {
    min: 0,
    max: 4,
  },
  logging,
};
