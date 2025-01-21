import '../App.css'
import { getPokemons } from '../services/pokemonService';
import { useEffect, useState } from 'react';
import ListPokemons from '../components/ListPokemons';

function Home() {
  const [pokemons, setPokemons] = useState(null)
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    const fetchPokemon = async () => {
      console.log(pagination)
      const fetch = await getPokemons(pagination)
      setPokemons(fetch)
    }
    fetchPokemon()
  }, [pagination])
  console.log({pagination})
  return (
    <div>
      <ListPokemons pokemons={pokemons} setPagination={setPagination}/>
    </div>
  )
}

export default Home;
