import { useState, useEffect } from 'react'
import { getAllPokemonDetails, getPokemonList } from './services/apiService';
import './App.css'
import { PokemonList, Pokemon } from './models/Pokemon';

function App() {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      // Fetch list of pokemon and set pokemon list in state
      try {
        const list = await getPokemonList();
        setPokemonList(list.results)
      } catch (error) {
        setError("Error fetching Pokemon data");
        console.error("Error fetching Pokemon data:", error)
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    getAllPokemonDetails();


  }, []);

  useEffect(() => {
    console.log(pokemonList)
  }, [pokemonList]);

  return (
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
      <p>Hello world</p>
    </>
  )
};

export default App
