module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('participante', 'revisor');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('participante', 'revisor',  {
      type: Sequelize.BOOLEAN,
    });
  },
};
