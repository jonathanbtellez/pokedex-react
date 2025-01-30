import React, { useEffect, useState } from 'react'
import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import PokemonItemCard from './PokemonItemCard';

const ListPokemons = ({ pokemons, setPagination }) => {
    const [previous, setPrevious] = useState(null)
    const [next, setNext] = useState(null)

    const handleChangeInPagination = (pagination) => {
        setPagination(pagination)
    }

    useEffect(() => {
        setPrevious(pokemons?.previous?.split('?')[1] ?? null)
        setNext(pokemons?.next?.split('?')[1] ?? null)
    }, [pokemons])
    return (
        <>
            {
                pokemons ?
                    <>
                        <div className='list-container'>
                            {
                                pokemons.results.map((pokemon) => (
                                    <PokemonItemCard pokemon={pokemon} key={pokemon.name} />
                                ))
                            }

                            <div className='list-pagination__container'>
                                {previous &&
                                    <IconButton onClick={() => {
                                        handleChangeInPagination(previous)
                                    }} color='primary'>
                                        <ArrowCircleLeftOutlined sx={{
                                            width: '3rem',
                                            height: '3rem',
                                        }} />
                                    </IconButton>
                                }
                                {next &&
                                    <IconButton onClick={() => {
                                        handleChangeInPagination(next)
                                    }} color='primary'>
                                        <ArrowCircleRightOutlined sx={{
                                            width: '3rem',
                                            height: '3rem',
                                        }} />
                                    </IconButton>
                                }
                            </div>
                        </div>

                    </>
                    :
                    <div>
                        <p>Loading...</p>
                    </div>
            }
        </>
    )
}

export default ListPokemons
