import { useEffect, useState } from "react";
import { Pokemon } from "../models/Pokemon";
import { Link, useNavigate } from "react-router-dom";

type SearchBarProps = {
    pokemonList: Pokemon[];
}

export default function SearchBar({ pokemonList }: SearchBarProps) {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults])

    useEffect(() => {
        handleSearch();
    },[searchTerm])


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = () => {
        const searchResults = pokemonList.filter((pokemon) => pokemon.name.toLowerCase()
            .includes(searchTerm.
                toLowerCase()));

        setSearchResults(searchResults)
        console.log("search result list :", searchResults)
    }

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        setTimeout(() => {
              setIsFocused(false);
          }, 100);
    }
    
    const clearSearchTerm = () => {
        setSearchTerm("");
    }



    return (
        <>
            <div className="sticky top-0 z-50 mx-auto">
                <div className="flex items-center justify-center sticky top-0 bg-white">
                    <input className="p-2" placeholder="Search for pokemon" value={searchTerm}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}></input>
                </div>
                {isFocused && searchTerm && (
                    <div className="bg-white overflow-auto  mx-auto text-center w-full absolute border max-h-96 ">
                        {searchResults.map((pokemon, index) => (
                            <Link
                                className=""
                                to={`/pokemon/${pokemon.name}`}
                                onClick={clearSearchTerm}
                                key={index}
                            >
                                <div key={index} className="capitalize hover:bg-light-blue text-black py-1 ">{pokemon.name}</div>

                            </Link>

                        ))}
                    </div>
                )}

            </div>


        </>
    )

}