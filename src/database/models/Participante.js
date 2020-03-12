module.exports = (sequelize, DataTypes) => {
  const Participante = sequelize.define('Participante', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING(20),
    email:  DataTypes.STRING,
    local_emprego: DataTypes.STRING,
    numero_cartao: DataTypes.STRING(30),
    vencimento_cartao: DataTypes.STRING(10),
    marca_cartao: DataTypes.STRING(10),
    revisor: DataTypes.BOOLEAN,
  }, {
    tableName: 'participante',
  });

  Participante.associate = function(models) {
    Participante.belongsToMany(models.Artigo, { through: models.ParticipanteArtigo, foreignKey: 'participante_id' });
  };

  return Participante;
};