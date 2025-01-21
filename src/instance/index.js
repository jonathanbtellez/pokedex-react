import axios from 'axios';

const pokemonApiInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
})

export { pokemonApiInstance }