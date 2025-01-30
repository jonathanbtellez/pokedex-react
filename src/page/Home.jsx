import "../App.css";
import { getPokemon, getPokemons } from "../services/pokemonService";
import { useEffect, useState } from "react";
import ListPokemons from "../components/ListPokemons";
import { useFormStatus } from "react-dom";
import { Snackbar } from "@mui/material";

function Home() {
  const [pokemons, setPokemons] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [errors, setErrors] = useState(null);

  const fetchPokemon = async (data) => {
    const pokemonName = data?.get("pokemonName");

    if (pokemonName === "" || !pokemonName) {
      await fetchPokemons()
      return
    }
    console.log(pokemonName);
    try {
      const pokemon = await getPokemon(pokemonName);
      setPokemons({
        count: 1,
        next: null,
        previous: null,
        results: [pokemon],
      });
    } catch (error) {
      setErrors({
        message: error.message,
        isOpen: true,
      })
    }
  };

  const fetchPokemons = async () => {
    const fetch = await getPokemons(pagination);
    setPokemons(fetch);
  };

  useEffect(() => {
    fetchPokemons();
  }, [pagination]);
  return (
    <div>
      <form action={fetchPokemon}>
        <Submit />
      </form>
      <ListPokemons pokemons={pokemons} setPagination={setPagination} />
    </div>
  );
}

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <input
        name="pokemonName"
        type="text"
        placeholder="Write the pokemon name"
      />
      <button type="submit" disabled={pending}>
        Load More
      </button>
      {
        error && (
          <div>
            <p>{error.message}</p>
          </div>
        )
      }
      {errors && (
        <Snackbar
          open={errors.isOpen}
          autoHideDuration={5000}
          message="Note archived"
          action={() => setError(null)}
        />
      )}
    </div>
  );
};

export default Home;
