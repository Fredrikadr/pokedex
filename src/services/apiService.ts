import { API_URL } from "../constants";
import { Pokemon, PokemonList } from "../models/Pokemon";

// Fetch list of Pokemon
export const getPokemonList = async (limit: number): Promise<PokemonList> => {
    try {
      const response = await fetch(`${API_URL}/?limit=${limit}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
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
  export const getAllPokemonDetails = async (list: Pokemon[]) => {
    try {
      /* const pokemonList = await getPokemonList(); */
      const detailsPromises = list.map(async (pokemon: Pokemon) => {
        return await getPokemonDetails(pokemon.url);
      });
      const allDetails = await Promise.all(detailsPromises);
      return allDetails
  
    }
    catch (error: any) {
      console.error(`Error fetching all details`, error);
      throw error;
    }
  };