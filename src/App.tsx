import { useState, useEffect } from 'react'
import { getAllPokemonDetails, getPokemonDetails, getPokemonList, getPokemonSpeciesList } from './services/apiService';
import './App.css'
import { PokemonList, Pokemon, PokemonDetails } from './models/Pokemon';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [detailsList, setDetailsList] = useState<PokemonDetails[]>([]);
  const [searchList, setSearchList] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null);

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

  const searchAndAddDetails = async (name: string) => {
    const existingPokemon = detailsList.find(pokemon => pokemon.name === name);

    if (!existingPokemon) {
      const pokemonIndex = searchList.findIndex(pokemon => pokemon.name == name).toString()
      const newDetailsData = await getPokemonDetails(pokemonIndex)

      setDetailsList(prevDetailsList => [...prevDetailsList, newDetailsData])

      return newDetailsData;
    } else return existingPokemon;

  }

  const handleSelectPokemon = async (name: string) => {
    setSelectedPokemon(await searchAndAddDetails(name))
  }

  return (
    <>
      <Header />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {selectedPokemon &&

          <p>Selected pokemon: {selectedPokemon.name}</p>
        }

      {!selectedPokemon &&
        
          <main className="p-10" >
            <div className="container mx-auto flex grid sm:grid-cols-1 md:grid-cols-4 gap-12">
              {detailsList.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} selectPokemon={handleSelectPokemon} />
              ))}
            </div>
          </main>
      }
    <Footer />
    </>
)}
      export default App
