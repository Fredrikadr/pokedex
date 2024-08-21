import { http } from 'msw';
import { API_URL } from '../../constants';
import { mockPokemonList, mockPokemonDetails } from './mockData';





// Handler for fetching list of pokemon
export const handlers = [
    http.get(API_URL, ({ request }) => {
        console.log('Captured a request: Pokemon list')

        const url = new URL(request.url);
        const limitParam = url.searchParams.get('limit');
        const limit = limitParam ? parseInt(limitParam) : 10; // Default to 10 if no limit

        const limitedResults = mockPokemonList.results.slice(0, limit);
        if (limitedResults) {
            return new Response(JSON.stringify({
                ...mockPokemonList,
                results: limitedResults
            }))
        }
        else {
            return new Response(JSON.stringify({ error: 'Pokemon list not found.' }), { status: 404 })
        }



    }),

    http.get(`${API_URL}/:id`, ({ params }) => {
        console.log('Captured a request: pokemon id')
        const { id } = params;
        const pokemonId = parseInt(Array.isArray(id) ? id[0] : id); // Check if id is an array or not
        const pokemon = mockPokemonDetails.find(p => p.id === pokemonId);

        if (pokemon) {
            return new Response(JSON.stringify({
                ...pokemon

            }
            ))
        }
        else {
            return new Response(JSON.stringify({ error: 'Pokemon not found.' }), { status: 404 })
        }
    })
]
