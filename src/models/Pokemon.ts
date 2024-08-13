export interface PaginationInfo {
    count: number;
    next: string | null;
    previous: string | null;
  }

export interface Pokemon {
  name: string;
  url: string;

}

export interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    type: {
      name: string;
      url: string;
    }
  }[];
}

export interface PokemonList extends PaginationInfo {
  results: Pokemon[]
}
