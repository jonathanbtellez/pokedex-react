import React from 'react'
import { NavLink } from 'react-router'
import { capitalizeFirstWord } from '../misc/utils'

const PokemonItemCard = ({pokemon}) => {
    const {name} = pokemon
    return (
        <div className='list-item-card'>
            <NavLink to={name} className='list-item-card__title'>
                <h3 to={name}>{capitalizeFirstWord(name)}</h3>
            </NavLink>
        </div>
    )
}

export default PokemonItemCard
