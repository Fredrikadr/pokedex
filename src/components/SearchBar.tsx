import { useEffect, useState } from "react";
import { Pokemon } from "../models/Pokemon";
import { Link, useNavigate } from "react-router-dom";

type SearchBarProps = {
    pokemonList: Pokemon[];
}

export default function SearchBar({ pokemonList }: SearchBarProps) {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<Pokemon[]>([]);

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults])


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        handleSearch();
    }

    const handleSearch = () => {
        const searchResults = pokemonList.filter((pokemon) => pokemon.name.toLowerCase()
            .includes(searchTerm.
                toLowerCase()));

        setSearchResults(searchResults)
        console.log("search result list :", searchResults)
    }

    const clearSearchTerm = () => {
        setSearchTerm("");
    }

    

    return (
        <>
            <div className="sticky top-0 z-50 mx-auto">
                <div className="flex items-center justify-center sticky top-0 bg-white">
                    <input className="p-2" placeholder="Search for pokemon" value={searchTerm} onChange={handleInputChange}></input>
                </div>
                {searchTerm && (
                    <div className="bg-white overflow-auto  mx-auto text-center w-full absolute border h-96 ">
                        {searchResults.map((pokemon, index) => (
                            <Link 
                            to={`/pokemon/${pokemon.name}`}
                            onClick={clearSearchTerm}>
                            <div className="capitalize odd:bg-slate-100 py-1">{pokemon.name}</div>
                            
                            </Link>

                        ))}
                    </div>
                )}

            </div>


        </>
    )

}