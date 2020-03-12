const path = require('path');
const pdfmaker = require('pdfmake');

const fonts = {
  Roboto: {
    normal: path.join(__dirname, '..', 'assets', '/fonts/Roboto-Regular.ttf'),
    bold: path.join(__dirname, '..', 'assets', '/fonts/Roboto-Medium.ttf'),
    italics: path.join(__dirname, '..', 'assets', '/fonts/Roboto-Italic.ttf'),
    bolditalics: path.join(__dirname, '..', 'assets', '/fonts/Roboto-MediumItalic.ttf'),
  }
};

module.exports = (pdfDoc) => new Promise((resolve, reject) => {
  const printer = new pdfmaker(fonts);
  const doc = printer.createPdfKitDocument(pdfDoc);
  const chunks = [];
    
  doc.on('data', function (chunk) {
    chunks.push(chunk);
  });
    
  doc.on('end', function () {
    return resolve(Buffer.concat(chunks));
    // return resolve(`data:application/pdf;base64,${Buffer.concat(chunks).toString('base64')}`);
  });
  
  doc.end();
});
