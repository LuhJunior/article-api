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
    created_at: DataTypes.DATE,
  }, {
    tableName: 'artigo',
    timestamps: false,
  });

  Artigo.associate = function(models) {
    Artigo.belongsToMany(models.Participante, { through: models.ParticipanteArtigo, foreignKey: 'artigo_id', as: 'Participantes' });
    Artigo.belongsToMany(models.Revisor, { through: models.RevisorArtigo, foreignKey: 'artigo_id', as: 'Revisores' });
  };

  return Artigo;
};