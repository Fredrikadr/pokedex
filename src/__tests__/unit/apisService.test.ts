import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { getPokemonList } from '../../services/apiService';


describe('getPokemonList', () => {
    it('should fetch and return pokemon list', async () => {
        const result = await getPokemonList(2);
        expect(result.count).toBe(1302);
        expect(result.results).toHaveLength(2);
        expect(result.results[0].name).toBe('pikachu');
        expect(result.results[1].name).toBe('bulbasaur');

    })
})