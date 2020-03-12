module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('participante', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      telefone: {
        type: Sequelize.STRING(20),
      },
      email: {
        type: Sequelize.STRING,
      },
      local_emprego: {
        type: Sequelize.STRING,
      },
      numero_cartao: {
        type: Sequelize.STRING(30),
      },
      vencimento_cartao: {
        type: Sequelize.STRING(10),
      },
      marca_cartao: {
        type: Sequelize.STRING(10),
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
    return queryInterface.dropTable('participante');
  },
};
