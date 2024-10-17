import React from 'react';
import { Row, Col } from 'antd';
import PokemonCard from './PokemonCard'; 

const PokemonList = ({ pokemonNames }) => {
  return (
    <Row gutter={[16, 16]}>
      {pokemonNames.map((name) => (
        <Col key={name} xs={24} sm={12} md={8} lg={6}>
          <PokemonCard name={name} />
        </Col>
      ))}
    </Row>
  );
};

export default PokemonList;
