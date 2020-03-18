module.exports = (sequelize, DataTypes) => {
  const Revisor = sequelize.define('Revisor', {
    revisor_id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    participante_id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'revisor',
  });

  Revisor.associate = function(models) {
    Revisor.belongsTo(models.Participante, { foreignKey: 'revisor_id' });
    Revisor.belongsToMany(models.Artigo, { through: models.RevisorArtigo, foreignKey: 'revisor_id' });
  };

  return Revisor;
};
