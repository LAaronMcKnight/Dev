// import { useState } from 'react'
import React from 'react'

export default function PokemonDisplay({ pokemon }) {

  const loaded = () => {
    return (
    <div className="pokemonDisplay">
      <h1>{pokemon.name}</h1>
      <img id='pokemonImage' src={pokemon.sprites.front_default} alt={pokemon.name}/>
    </div>)
  }


  const loading = () => {
    return <h1>Loading . . . </h1>
  }

  return pokemon ? loaded() : loading();
}