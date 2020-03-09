const faker = require('faker');
const generator = require('creditcard-generator');
const { Participante } = require('../../database/models');

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
        const endereco = faker.address.streetAddress(true);
        const telefone = faker.phone.phoneNumber();
        const email = faker.internet.email(nome.split(' ')[0]);
        const local_emprego = faker.company.companyName();
        const numero_cartao = generator.GenCC()[0];
        const vencimento_cartao = vencimentoCartao();
        const marca_cartao = faker.company.companyName();

        await create({
            nome, endereco, telefone, email, local_emprego, numero_cartao,
            vencimento_cartao, marca_cartao,
        });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    generateData,
};
