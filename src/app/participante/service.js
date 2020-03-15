const faker = require('faker');
const generator = require('creditcard-generator');
const { Participante, Revisor, Sequelize: { Op } } = require('../../database/models');
const { create: createArtigo } = require('../artigo');
const generatePdfFile = require('../../helpers/generatePdfFile');

const vencimentoCartao = require('../../helpers/vencimentoCartao');

function create(participante) {
  return Participante.create(participante);
}

function getAll() {
  return Participante.findAll();
}

function getById(id) {
  return Participante.findByPk(id);
}

async function generateData(qtd) {
  for (let i = 0; i < qtd; i++) {
    const nome = faker.name.findName();
    console.log(faker.date.past());
    const participante = await create({
      nome,
      endereco: faker.address.streetAddress(true),
      telefone: faker.phone.phoneNumber(),
      email: faker.internet.email(nome.split(' ')[0]),
      local_emprego: faker.company.companyName(),
      numero_cartao: generator.GenCC()[0],
      vencimento_cartao: vencimentoCartao(),
      marca_cartao: faker.company.companyName(),
      // created_at: faker.date.past(),
    });

    if (faker.random.boolean()) {
      Revisor.create({ participante_id: participante.id });
    }

    const resumo = faker.lorem.sentences();
    const file = await generatePdfFile();

    const artigo = await createArtigo({ resumo, file/* , created_at: faker.date.past() */ });

    await participante.addArtigo(artigo);

    const revisores = await Revisor.findAll({
      where: {
        participante_id: {
          [Op.ne]: participante.id,
        },
      },
    });

    const offset = faker.random.number(revisores.length);
    revisores.slice(offset, offset + 5).forEach(async (revisor) => {
      await revisor.addArtigo(artigo, {
        through: {
          nota: faker.random.number(10),
          comentario: faker.lorem.sentence(10),
        },
      });
    });
  }
}

module.exports = {
  create,
  getAll,
  getById,
  generateData,
};
