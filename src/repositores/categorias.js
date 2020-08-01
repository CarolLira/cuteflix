import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}/categorias?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não encontrei os dados');
    });
}

export default {
  getAllWithVideos,
};
