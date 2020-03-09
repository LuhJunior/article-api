module.exports = (sequelize, DataTypes) => {
  const Participante = sequelize.define('Participante', {
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING(20),
    email:  DataTypes.STRING,
    local_emprego: DataTypes.STRING,
    numero_cartao: DataTypes.STRING(30),
    vencimento_cartao: DataTypes.STRING(10),
    marca_cartao: DataTypes.STRING(10),
  }, {
    tableName: 'participante',
  });

  Participante.associate = function(models) {
    // associations can be defined here
  };

  return Participante;
};