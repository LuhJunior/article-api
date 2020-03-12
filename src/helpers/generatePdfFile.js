const faker = require('faker');
const createPdfBinary = require('../utils/createPdfBinary');

const title = faker.lorem.sentence();
const body = faker.lorem.paragraphs(2);

module.exports = async () => createPdfBinary({
  content: [
		{
			text: title,
			style: 'header',
    },
    '\n',
    body,
	],
	styles: {
		header: {
			fontSize: 18,
      bold: true,
      
		},
	}
});
