import axios from "axios"

export const buscaDeputados = () => {
    return axios.get('https://dadosabertos.camara.leg.br/api/v2/deputados/')
}