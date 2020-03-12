module.exports = (sequelize, DataTypes) => {
  const RevisorArtigo = sequelize.define('RevisorArtigo', {
    revisor_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    artigo_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nota: DataTypes.FLOAT,
    comentario: DataTypes.STRING,
  }, {
    tableName: 'revisor_artigo',
  });

  /* RevisorArtigo.associate = function(models) {

  }; */

  return RevisorArtigo;
};
