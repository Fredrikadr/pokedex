import { http } from 'msw';

export const handlers = [
    http.get('https://pokeapi.co/api/v2/pokemon', () =>{
        console.log('Captured a request')
    })]