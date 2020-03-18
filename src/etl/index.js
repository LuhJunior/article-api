const { generateArtigoLote, generateParticipanteLote } = require('./bi_extraction');
const generateMongoLote = require('./mongo_extraction');

const TAMANHO_LOTE = 1000;

(async () => {
  try {
    for (let i = 0; ; i++) {
      const numRegistros = await generateArtigoLote(i, TAMANHO_LOTE);
      if (numRegistros < TAMANHO_LOTE) break;
    }
  } catch (e) {
    console.log(e);
  }
})();

(async () => {
  try {
    for (let i = 0; ; i++) {
      const numRegistros = await generateParticipanteLote(i, TAMANHO_LOTE);
      if (numRegistros < TAMANHO_LOTE) break;
    }
  } catch (e) {
    console.log(e);
  }
})();

(async () => {
  try {
    for (let i = 0; ; i++) {
      const numRegistros = await generateMongoLote(i, TAMANHO_LOTE);
      if (numRegistros < TAMANHO_LOTE) break;
    }
  } catch (e) {
    console.log(e);
  }
})();
