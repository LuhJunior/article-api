module.exports = (sequelize, DataTypes) => {
  const Artigo = sequelize.define('Artigo', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    resumo: DataTypes.STRING,
    file: DataTypes.BLOB,
  }, {
    tableName: 'artigo',
  });

  Artigo.associate = function(models) {
    Artigo.belongsToMany(models.Participante, { through: models.ParticipanteArtigo, foreignKey: 'artigo_id' });
    Artigo.belongsToMany(models.Revisor, { through: models.RevisorArtigo, foreignKey: 'artigo_id' });
  };

  return Artigo;
};