module.exports = (sequelize, DataTypes) => {
  const ParticipanteArtigo = sequelize.define('ParticipanteArtigo', {
    participante_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    artigo_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'participante_artigo',
  });

  /* ParticipanteArtigo.associate = function(models) {

  }; */

  return ParticipanteArtigo;
};