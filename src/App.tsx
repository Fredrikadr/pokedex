import { useState, useEffect } from 'react'
import { getAllPokemonDetails, getPokemonDetails, getPokemonList } from './services/apiService';
import './App.css'
import { Pokemon, PokemonDetails } from './models/Pokemon';

import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import SearchBar from './components/SearchBar';
import PageNotFound from './pages/PageNotFound';


function App() {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [detailsList, setDetailsList] = useState<PokemonDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
 

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
    if (!name) {
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


  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
        <Header />
        <SearchBar pokemonList={pokemonList}/>
          <Routes>
            <Route path='/' element={<HomePage detailsList={detailsList} />} />
            <Route path='/pokemon/:name' element={<DetailsPage findAndAddDetails={findAndAddDetails} isLoading={isLoading} />} />
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        <Footer />
        </Router>
      </div>
    </>
  )
}
export default App
