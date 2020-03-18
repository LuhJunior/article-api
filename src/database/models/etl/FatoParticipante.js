module.exports = (sequelize, DataTypes) => {
  const FatoParticipante = sequelize.define('FatoParticipante', {
    ano: DataTypes.INTEGER,
    quantidade_participantes: DataTypes.INTEGER,
  }, {
    tableName: 'fato_participante',
  });

  FatoParticipante.removeAttribute('id');

  return FatoParticipante;
};