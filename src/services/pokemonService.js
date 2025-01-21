import { pokemonApiInstance } from "../instance";


const getPokemons = async (pagination) => {
    let url = "/pokemon"
    if(pagination){
        url += `?${pagination}`
    }
    const pokemons = await pokemonApiInstance(url)
    console.log(pokemons.data)
    return pokemons.data
}

const getPokemon = async (pokemon) => {
    const pokemonData = await pokemonApiInstance(`/pokemon/${pokemon}`)
    return pokemonData.data
}


export { getPokemons, getPokemon }