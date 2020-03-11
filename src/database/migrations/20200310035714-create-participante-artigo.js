module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('participante_artigo', {
      participante_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'participante',
          key: 'id',
        },
      },
      artigo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'artigo',
          key: 'id',
        },
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
    return queryInterface.dropTable('participante_artigo');
  }
};