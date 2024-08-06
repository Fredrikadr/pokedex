import { API_URL } from "../constants";

// Fetch list of Pokemon
export const getPokemonList = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      return data.results;
    } catch (error: any) {
      console.error(`Error fetching pokemon list`, error)
      throw error;
    }
  };
  
  // Fetch details for 1 Pokemon
  export const getPokemonDetails = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error(`Error fetching pokemon details`, error);
      throw error;
    }
  };
  
  // Fetch details for all Pokemon
  export const getAllPokemonDetails = async () => {
    try {
      const pokemonList = await getPokemonList();
      const detailsPromises = pokemonList.map(async (pokemon: any) => {
        return await getPokemonDetails(pokemon.url);
      });
      const allDetails = await Promise.all(detailsPromises);
      console.log(allDetails)
      return allDetails
  
    }
    catch (error: any) {
      console.error(`Error fetching all details`, error);
      throw error;
    }
  };