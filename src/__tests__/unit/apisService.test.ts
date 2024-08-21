import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { getAllPokemonDetails, getPokemonDetails, getPokemonList } from '../../services/apiService';
import { API_URL } from '../../constants';
import { mockPokemonList } from '../mocks/mockData';
import { Pokemon } from '../../models/Pokemon';


describe('getPokemonList', () => {
    it('should fetch and return pokemon list', async () => {
        const result = await getPokemonList(2);

        expect(result.count).toBe(1302);
        expect(result.results).toHaveLength(2);
        expect(result.results[0].name).toBe('pikachu');
        expect(result.results[1].name).toBe('bulbasaur');

    })
})


describe('getPokemonDetails', () => {
    it('should fetch and return pokemon details', async () => {
        const result = await getPokemonDetails(`${API_URL}/25/`);

        expect(result.name).toBe('pikachu');
        expect(result.id).toBe(25);
        expect(result.height).toBe(4);
        expect(result.weight).toBe(60);

    })
})

describe('getAllPokemonDetails', () => {
    it('should fetch and return details for each pokemon passed to the function', async () => {
        const pokemonList: Pokemon[] = mockPokemonList.results;
        const result = await getAllPokemonDetails(pokemonList);

        expect(result).toHaveLength(2);
        expect(result[0].name).toBe('pikachu');
        expect(result[0].height).toBe(4);
        expect(result[0].weight).toBe(60);
        expect(result[0].id).toBe(25)
        expect(result[1].name).toBe('bulbasaur');
        expect(result[1].height).toBe(7);
        expect(result[1].weight).toBe(69);
        expect(result[1].id).toBe(1)
    })

    it('should handle an empty list', async () => {
        const pokemonList: Pokemon[] = [];
        const result = await getAllPokemonDetails(pokemonList);
    
        expect(result).toHaveLength(0);
      });

      it('should handle fetch errors', async () => {
        const pokemonList = [
          { name: 'InvalidPokemon', url: `${API_URL}/invalid/` }
        ];
    
        await expect(getAllPokemonDetails(pokemonList)).rejects.toThrow('Failed to fetch data');
      });
    
    
})
