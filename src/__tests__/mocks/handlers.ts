import { http } from 'msw';
import { PokemonList } from '../../models/Pokemon';

const mockPokemonList: PokemonList = {
    count: 2,
    next: null,
    previous: null,
    results: [
        { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
        { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
    ]
}

// Handler for fetching list of pokemon
export const handlers = [
    http.get('https://pokeapi.co/api/v2/pokemon', ({ request }) => {
        console.log('Captured a request')

        const url = new URL(request.url);
        const limitParam = url.searchParams.get('limit');
        const limit = limitParam ? parseInt(limitParam) : 10; // Default to 10 if no limit
        console.log(limitParam)

        const limitedResults = mockPokemonList.results.slice(0, limit);

        return new Response(JSON.stringify({
            ...mockPokemonList,
            results: limitedResults
        }))


    })]