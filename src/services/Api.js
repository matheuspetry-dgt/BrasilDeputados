import axios from "axios";

axios.defaults.baseURL = 'https://dadosabertos.camara.leg.br/api/v2/'

export const buscaDeputados = async () => {
  return await axios.get("deputados/");
};

export const buscaQuantidadeDeputados = async () => {
  return await axios
    .get("deputados?itens=1000")
    .then((response) => response.data.dados.length); 
};

export const buscaQuantidadePartidos = async () => {
  return axios
    .get("partidos?itens=1000")
    .then((response) => response.data.dados.length);
};

export const buscaQuantidadeOrgaos = async () => {
  return axios
    .get("orgaos")
    .then((response) => response.headers["x-total-count"]);
};


export const getDeputiesByParty = async () => {
  const response = await axios.get("deputados/");
  const deputies = response.data.dados;

  const partyCounts = {};
  deputies.forEach(deputy => {
    const party = deputy.siglaPartido;
    if (partyCounts[party]) {
      partyCounts[party]++;
    } else {
      partyCounts[party] = 1;
    }
  });

  const sortedParties = Object.entries(partyCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 7)
    .map(([party, count]) => ({ party, count }));

  return sortedParties;
};

const buscaTodosOrgaosRecursivo = async (url, orgaos = []) => {
  const response = await axios.get(url);
  const novosOrgaos = orgaos.concat(response.data.dados);
  const nextLink = response.data.links.find((link) => link.rel === "next");
  if (nextLink) {
    const proxiedUrl = nextLink.href.replace('https://dadosabertos.camara.leg.br', '/dadosabertos');
    return buscaTodosOrgaosRecursivo(proxiedUrl, novosOrgaos);
  }
  return novosOrgaos;
};

export const buscaTodosOrgaos = () => {
  return buscaTodosOrgaosRecursivo(
    "/dadosabertos/api/v2/orgaos"
  );
};

