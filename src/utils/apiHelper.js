import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/';

export let axiosObject = axios.create({
    baseURL: baseUrl,
    timeout: 10000
});

const apiHelper = {
    getPokemonData: () => {
        return axiosObject.get('pokemon?limit=151');
    },
    getPokemonDetail: (index)=> {
        return axiosObject.get(`pokemon/${index}`);
    },
    getPokemonImage: (pokeID) => {
        return axios.get(`https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`);
    }
}
 export default apiHelper;