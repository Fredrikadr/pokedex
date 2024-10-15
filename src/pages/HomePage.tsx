import { Navigate, useNavigate } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import { PokemonDetails } from "../models/Pokemon"

type HomePageProps = {
    detailsList: PokemonDetails[];
}



export default function HomePage({ detailsList }: HomePageProps) {
    return (
        <>
            <main className="p-10 flex-grow p-4" >
                <div className="container mx-auto flex grid sm:grid-cols-1 md:grid-cols-4 gap-12">
                    {detailsList.map((pokemon, index) => (
                        <PokemonCard key={index} pokemon={pokemon} />
                    ))}
                </div>
            </main>
        </>
    )
}