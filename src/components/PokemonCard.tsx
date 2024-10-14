import { PokemonDetails } from "../models/Pokemon";

type PokemonCardProps = {
    pokemon: PokemonDetails;
    index: number;
  };

export default function PokemonCard({pokemon, index}: PokemonCardProps) {
    return (
        <div className=" bg-white  rounded-lg flex flex-col shadow-md">
            <div className="shadow-sm border rounded-b-lg w-8/12 text-center mx-auto p-2 mt-0">
            <h3 className="" key={index}>{pokemon.name}</h3>
            </div>
            <img className="w-56 m-auto" src={pokemon.sprites.front_default}></img>
          </div>
    )
}