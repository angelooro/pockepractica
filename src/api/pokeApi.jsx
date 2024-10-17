// src/api/pokeApi.js
import axios from 'axios';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/';

export const fetchPokemon = async (name) => {
  try {
    const response = await axios.get(`${POKEAPI_URL}pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};
