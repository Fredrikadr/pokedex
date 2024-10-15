import { PokemonDetails } from "../models/Pokemon";

type PokemonCardProps = {
  pokemon: PokemonDetails;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className=" bg-white  rounded-lg flex flex-col shadow-md group">
      <div className="shadow-sm border rounded-b-lg w-8/12 text-center mx-auto p-2 mt-0">
        <h3 className="">{pokemon.name}</h3>
      </div>
      <img className=" w-56 m-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110" src={pokemon.sprites.front_default}></img>
    </div>
  )
}