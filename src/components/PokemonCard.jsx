// src/components/PokemonCard.jsx
import React, { useEffect, useState } from 'react';
import { Card, List, Spin, Typography, Image } from 'antd';
import { fetchPokemon } from '../api/pokeApi';

const { Title } = Typography;

const PokemonCard = ({ name }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const data = await fetchPokemon(name);
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      } finally {
        setLoading(false);
      }
    };

    getPokemonData();
  }, [name]);

  if (loading) return <Spin tip={`Cargando ${name}...`} />;
  if (!pokemonData) return <div>Pokémon {name} no encontrado</div>;

  return (
    <Card
      title={pokemonData.name.toUpperCase()}
      bordered={true}
      hoverable
      style={{ width: 300, textAlign: 'center' }}
      cover={
        <Image.PreviewGroup
          items={[
            pokemonData.sprites.front_default,
            pokemonData.sprites.back_default,
            pokemonData.sprites.front_shiny,
          ]}
        >
          <Image
            width={300}
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
        </Image.PreviewGroup>
      }
    >
      <p>Altura: {pokemonData.height} dm</p>
      <p>Peso: {pokemonData.weight} hg</p>

      <h3>Tipos:</h3>
      <List
        bordered
        dataSource={pokemonData.types}
        renderItem={(typeInfo) => <List.Item>{typeInfo.type.name}</List.Item>}
      />

      <h3>Habilidades:</h3>
      <List
        header={<Title level={5}>Habilidades</Title>}
        footer={<div>Fin de habilidades</div>}
        bordered
        dataSource={pokemonData.abilities}
        renderItem={(abilityInfo) => <List.Item>{abilityInfo.ability.name}</List.Item>}
      />
    </Card>
  );
};

export default PokemonCard;
