module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('revisor_artigo', {
      revisor_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'revisor',
          key: 'revisor_id',
        },
      },
      artigo_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'artigo',
          key: 'id',
        },
      },
      nota: {
        type: Sequelize.FLOAT,
      },
      comentario: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('revisor_artigo');
  },
};
