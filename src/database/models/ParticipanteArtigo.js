module.exports = (sequelize, DataTypes) => {
  const ParticipanteArtigo = sequelize.define('ParticipanteArtigo', {
    participante_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    artigo_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'participante_artigo',
  });

  ParticipanteArtigo.associate = function(models) {
    // associations can be defined here
  };

  return ParticipanteArtigo;
};