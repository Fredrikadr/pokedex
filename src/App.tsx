import { useState, useEffect } from 'react'
import { getAllPokemonDetails, getPokemonDetails, getPokemonList, getPokemonSpeciesList } from './services/apiService';
import './App.css'
import { PokemonList, Pokemon, PokemonDetails } from './models/Pokemon';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';


function App() {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [detailsList, setDetailsList] = useState<PokemonDetails[]>([]);
  const [searchList, setSearchList] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
        const data = await getPokemonList(1025);
        setPokemonList(data.results);
        console.log(pokemonList)

        const slicedList = data.results.slice(0, 10)

        const detailsData = await getAllPokemonDetails(slicedList);
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

  const findAndAddDetails = async (name: string | undefined): Promise<PokemonDetails | null> => {
    const existingPokemon = detailsList.find(pokemon => pokemon.name == name);
    if(!name) {
      return null;
    }

    if (existingPokemon) {
      return existingPokemon;
    }

    const pokemon = pokemonList.find(pokemon => pokemon.name == name);
    if (!pokemon) {
      throw new Error("Couldn't find the selected pokemon")
    }
    const newDetailsData = await getPokemonDetails(pokemon.url)
    setDetailsList(prevDetailsList => [...prevDetailsList, newDetailsData])
    return newDetailsData;

  }

  const handleSelectPokemon = async (name: string) => {
    setSelectedPokemon(await findAndAddDetails(name))
  }

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pokemon/:name' element={<DetailsPage findAndAddDetails={findAndAddDetails} isLoading={isLoading} />} />
        </Routes>
      </Router>
    </>

    /*  <>
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
     </> */
  )
}
export default App
