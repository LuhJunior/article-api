module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('artigo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resumo: {
        type: Sequelize.STRING,
      },
      file: {
        type: Sequelize.BLOB,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('artigo');
  },
};
