import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPokemon } from '../services/pokemonService'
import { capitalizeFirstWord } from '../misc/utils'
import { Chip } from '@mui/material'
const Pokemon = () => {
    const { pokemon } = useParams()
    const [pokemonResponse, setPokemonResponse] = useState(null)
    const fetchPokemon = async () => {
        const fetch = await getPokemon(pokemon)
        setPokemonResponse(fetch)
    }

    useEffect(() => {
        fetchPokemon()
    }, [pokemon])

    return (
        <>
            {pokemonResponse ?
                <div className='list-container'>
                    <div className='item-card'>
                        <div className='item-container-image'>
                            <img
                                src={pokemonResponse.sprites.other[`official-artwork`]
                                    .front_default}
                                alt={pokemonResponse.name}
                                className='item-image'
                            />
                        </div>

                        <h3>{capitalizeFirstWord(pokemonResponse.name)}</h3>
                        <p className='item-card__subtitle'><b>Height:</b> {pokemonResponse.height}</p>
                        <p className='item-card__subtitle'><b>Weight:</b> {pokemonResponse.weight}</p>
                        <h4>Abilities:</h4>
                        <div className='item-card__chip__container'>
                            {
                                pokemonResponse.abilities.map(ability => (
                                    <Chip
                                        color="primary"
                                        label={ability.ability.name}
                                    />
                                ))
                            }
                        </div>
                        <h4>Moves:</h4>
                        <div className='item-card__chip__container'>
                            {
                                pokemonResponse.moves.slice(0, 10).map(move => (
                                    <Chip
                                        color="primary"
                                        label={move.move.name}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                :
                <div><p>Loading...</p></div>}
        </>

    )
}

export default Pokemon
