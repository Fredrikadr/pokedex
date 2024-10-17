import { useParams } from "react-router-dom";
import { PokemonDetails } from "../models/Pokemon";
import { useEffect, useState } from "react";
import DetailsCard from "../components/DetailsCard";

type DetailsPageProps = {
    isLoading: boolean;
    findAndAddDetails: (name: string | undefined) => Promise<PokemonDetails | null>;
};

export default function DetailsPage({ findAndAddDetails, isLoading }: DetailsPageProps) {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);


    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const pokemon = await findAndAddDetails(name);
                setPokemon(pokemon);

            } catch (error) {
                throw new Error("Failed to find pokemon details.")
            }
        }
        if (!isLoading) {
            fetchDetails();
        }
    }, [name, isLoading])


    return (
        <>
            <main className="flex-grow p-4 w-fit mx-auto">
                {(isLoading || !pokemon) ? (
                    <p>Loading</p>
                ) : (
                    <DetailsCard pokemon={pokemon}/>
                )}
            </main>
        </>
    )
}