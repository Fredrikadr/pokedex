import { useParams } from "react-router-dom";
import { PokemonDetails } from "../models/Pokemon";
import { useEffect, useState } from "react";

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
                setPokemon(pokemon)

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
            {pokemon && <p>Details page for {pokemon.name}</p>}
        </>
    )
}