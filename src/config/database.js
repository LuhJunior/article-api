const config = require('../config');

const { 
    host,
    user,
    password,
    name,
    port,
    dialect,
    logging,
} = config.database;

module.exports = {
    host,
    port,
    username: user,
    password,
    database: name,
    dialect: dialect || 'mysql',
    define: {
        timestamps: true,
        freezeTableName: true,
        underscored: true,
    },
    logging,
};
