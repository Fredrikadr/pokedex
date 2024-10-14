import { useState, useEffect } from 'react'
import { getAllPokemonDetails, getPokemonList } from './services/apiService';
import './App.css'
import { PokemonList, Pokemon, PokemonDetails } from './models/Pokemon';

function App() {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [detailsList, setDetailsList] = useState<PokemonDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      // Fetch list of pokemon and set pokemon list in state
      try {
        const data = await getPokemonList(10);
        setPokemonList(data.results);

        const detailsData = await getAllPokemonDetails(data.results);

        setDetailsList(detailsData);

      } catch (error) {
        setError("Error fetching Pokemon data");
        console.error("Error fetching Pokemon data:", error)
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

  }, []);

  useEffect(() => {
    console.log(detailsList, "details")

  }, [detailsList]);

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="container mx-auto flex grid sm:grid-cols-1 md:grid-cols-4 gap-10">
                {detailsList.map((pokemon, index) => (
          <div className=" bg-white  rounded-lg flex flex-col shadow-md">
            <div className="shadow-sm border rounded-b-lg w-8/12 text-center mx-auto p-2 mt-0">
            <h3 className="" key={index}>{pokemon.name}</h3>
            </div>
            <img className="w-56 m-auto" src={pokemon.sprites.front_default}></img>
          </div>
        ))}
      </div>

      </main>

  )
};

export default App
