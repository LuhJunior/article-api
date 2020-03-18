const { generateArtigoLote, generateParticipanteLote } = require('./bi_extraction');

const TAMANHO_LOTE = 10000;

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
