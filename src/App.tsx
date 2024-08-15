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
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
      <p>Hello world</p>
    </>
  )
};

export default App
