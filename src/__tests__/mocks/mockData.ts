import { PokemonDetails, PokemonList } from "../../models/Pokemon";


export const mockPokemonList: PokemonList = {
    count: 1302,
    next: null,
    previous: null,
    results: [
        { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
    ]
}

export const mockPokemonSpeciesList: PokemonList = {
  count: 1025,
  next: null,
  previous: null,
  results: [
      { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon-species/25/' },
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' }
  ]
}

export const mockPokemonDetails: PokemonDetails[] = [{
    name: 'pikachu',
    id: 25,
    height: 4, 
    weight: 60, 
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    stats: [
      {
        base_stat: 35,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/', 
        },
      },
      {
        base_stat: 55, 
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/', 
        },
      },
      {
        base_stat: 40, 
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/', 
        },
      },
      {
        base_stat: 50, 
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/', 
        },
      },
      {
        base_stat: 50, 
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/', 
        },
      },
      {
        base_stat: 90, 
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/', 
        },
      },
    ],
    types: [
      {
        type: {
          name: 'electric', 
          url: 'https://pokeapi.co/api/v2/type/13/', 
        },
      },
    ],
},
{
    name: 'bulbasaur',
    id: 1,
    height: 7,
    weight: 69,
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    stats: [
        {
            base_stat: 45,
            stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/',
            },
        },
        {
            base_stat: 49,
            stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/',
            },
        },
        {
            base_stat: 49,
            stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/',
            },
        },
        {
            base_stat: 65,
            stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/',
            },
        },
        {
            base_stat: 65,
            stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/',
            },
        },
        {
            base_stat: 45,
            stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/',
            },
        },
    ],
    types: [
        {
            type: {
                name: 'grass',
                url: 'https://pokeapi.co/api/v2/type/12/',
            },
        },
        {
            type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/',
            },
        },
    ],
}

]