import { useState, useEffect } from 'react'
import { getAllPokemonDetails } from './services/apiService';
import './App.css'

function App() {

  useEffect(() => {
    getAllPokemonDetails();
  }, []);

  return (
    <>
      <p>Hello world</p>
    </>
  )
};

export default App
