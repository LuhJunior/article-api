module.exports = (sequelize, DataTypes) => {
  const FatoArtigo = sequelize.define('FatoArtigo', {
    ano: DataTypes.INTEGER,
    quantidade_autores: DataTypes.INTEGER,
    media_nota: DataTypes.DECIMAL(3, 1),
  }, {
    tableName: 'fato_artigo',
  });

  FatoArtigo.removeAttribute('id');

  return FatoArtigo;
};