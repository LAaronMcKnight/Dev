// import { useState } from 'react'
import React from 'react'
import { useState } from 'react'

export default function PokemonDisplay({ pokemon }) {
  const [pokemonTeam, setPokemonTeam] = useState([])

  const loaded = () => {

    function addToTeam() {
      const newTeamPoke = {
        name: pokemon.name,
        id: pokemon.id,
        img: pokemon.sprites.front_default
      }
      setPokemonTeam([...pokemonTeam, newTeamPoke])
    }



    return (
      <div className="pokemonDisplay">
        <h1>{pokemon.name} #{pokemon.id}</h1>
        <div className='sprites'>
          <img id='pokemonImage' src={pokemon.sprites.front_default} alt={pokemon.name}/>
          <img id='pokemonImage' src={pokemon.sprites.back_default} alt={pokemon.name}/>
          <img id='pokemonImage' src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          <img id='pokemonImage' src={pokemon.sprites.back_shiny} alt={pokemon.name} />
        </div>
        <h3>{pokemon.types[0].type.name}</h3>
        <h3>Height: {pokemon.height}</h3>
        <h3>Weight: {pokemon.weight}</h3>
        <h3>HP: {pokemon.stats[0].base_stat}</h3>
        <h3>Attack: {pokemon.stats[1].base_stat}</h3>
        <h3>Defense: {pokemon.stats[2].base_stat}</h3>
        <h3>Sp. Attack: {pokemon.stats[3].base_stat}</h3>
        <h3>Sp. Defense: {pokemon.stats[4].base_stat}</h3>
        <h3>Speed: {pokemon.stats[5].base_stat}</h3>
        <h3>Total: {parseInt(pokemon.stats[0].base_stat) + parseInt(pokemon.stats[1].base_stat) + parseInt(pokemon.stats[2].base_stat) + parseInt(pokemon.stats[3].base_stat) + parseInt(pokemon.stats[4].base_stat) + parseInt(pokemon.stats[5].base_stat)}</h3>
        <br />
        <button id='addToTeam' onClick={addToTeam}>Add To Team</button>
        <br />
        <div className="pokemonTeam">
          {pokemonTeam.map((poke, i) => {
            return(
              <div className="teamMember" key={i}>
                <h4>{poke.name}</h4>
                <img id='pokemonTeamImage' src={poke.img} alt={poke.id}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }


  const loading = () => {
    return <h1>Loading . . . </h1>
  }

  return pokemon ? loaded() : loading();
}


// pokemon.types[0].type.name