module.exports = (sequelize, DataTypes) => {
  const Artigo = sequelize.define('Artigo', {
    resumo: DataTypes.STRING,
    file: DataTypes.BLOB,
  }, {
    tableName: 'artigo',
  });

  Artigo.associate = function(models) {
    Artigo.belongsToMany(models.Participante, { through: ParticipanteArtigo, foreignKey: 'id' });
  };

  return Artigo;
};