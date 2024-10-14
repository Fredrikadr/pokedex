import { useState, useEffect } from 'react'
import { getAllPokemonDetails, getPokemonList } from './services/apiService';
import './App.css'
import { PokemonList, Pokemon, PokemonDetails } from './models/Pokemon';
import PokemonCard from './components/PokemonCard';

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
          <PokemonCard index={index} pokemon={pokemon}/>
        ))}
      </div>

      </main>

  )
};

export default App
