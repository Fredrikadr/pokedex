import { PokemonDetails } from "../models/Pokemon";


export default function DetailsCard({pokemon}: {pokemon: PokemonDetails}) {
    return (
        <div className="border rounded-lg p-10 shadow-md ">
            <h1 className="text-center">{pokemon.name}</h1>
            <div className="flex flex-col md:flex-row ">
                <div className="flex flex-col items-center">
                    <img className="" src={pokemon.sprites.other.home.front_default} />
                    <h2>Types:</h2>
                    {pokemon.types.map((typeInfo, index) => (
                        <p key={index}>{typeInfo.type.name}</p>
                    ))}
                </div>
                <div className="border rounded-md shadow-md bg-light-blue md:my-auto p-10">
                    <p>Pokemon Id: {pokemon.id}</p>
                    <p>Height: {pokemon.height / 10} m</p>
                    <p>Weight: {pokemon.weight / 10} kg</p>
                </div>
            </div>



        </div>
    )
}