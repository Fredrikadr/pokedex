import { useState, useEffect } from 'react'
import { getAllPokemonDetails, getPokemonList, getPokemonSpeciesList } from './services/apiService';
import './App.css'
import { PokemonList, Pokemon, PokemonDetails } from './models/Pokemon';
import PokemonCard from './components/PokemonCard';

function App() {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [detailsList, setDetailsList] = useState<PokemonDetails[]>([]);
  const [searchList, setSearchList] = useState<PokemonList[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Set initial list of pokemon to populate the page and get list of all pokemon for search
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      // Fetch list of pokemon and set pokemon list in state
      try {
        const data = await getPokemonList(10);
        setPokemonList(data.results);

        const speciesList = await getPokemonSpeciesList();
        setSearchList(speciesList);

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
    <>
      <header className="px-5 drop-shadow-2xl bg-gradient-to-t from-light-red to-dark-red text-white h-32 flex items-center justify-center">
        <h1 className="text-7xl">Pokédex</h1>
      </header>

      <div className="flex items-center justify-center sticky top-0">
      <input className="p-2" placeholder="Search for pokemon"></input>
      <div className="bg-dark-blue text-white">Search</div>
      </div>
      
      <main className="p-10" >
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="container mx-auto flex grid sm:grid-cols-1 md:grid-cols-4 gap-12">
          {detailsList.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon}/>
          ))}
        </div>
      </main>
      <footer className="h-20 bg-dark-red"></footer>

    </>

  )
};

export default App
