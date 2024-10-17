
import React from 'react';
import PokemonList from './components/PokemonList'; 
import { Typography } from 'antd';

const { Title } = Typography;

const App = () => {
    const pokemonNames = ['psyduck', 'pikachu', 'charmander', 'bulbasaur', 'squirtle', 'metapod','spearow', 'nidoqueen', 'jigglypuff','ninetales','onix','ditto','electrode' ];
  return (
    <div style={{ padding: '20px' }}>
      <Title level={1} style={{ textAlign: 'center' }}>Pokémon Info</Title>
      <PokemonList pokemonNames={pokemonNames} /> 
    </div>
  );
};

export default App;
