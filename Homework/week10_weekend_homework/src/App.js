import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import PokemonDisplay from './components/PokemonDisplay'
import Header from './components/Header'

function App() {

  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async (searchTerm) => {

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      const data = await response.json()
      
      setPokemon(data)
    } catch(e) {
      console.error(e)
    }
  };

  useEffect(() => {
    getPokemon(`${Math.floor(Math.random() * 900 )}`) 
  }, []);


  return (
    <div className="main">
      <div className="fun">
        <h2>.</h2>
      </div>
      <div className="mainDisplay">
      <Header />
      Search the Pokemon Database
      <Form pokemonSearch={getPokemon} />

      <PokemonDisplay pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
