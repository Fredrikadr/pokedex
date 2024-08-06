import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const apiUrl = import.meta.env.VITE_API_URL;

// Fetch list of Pokemon
const getPokemonList = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error: any) {
    console.error(`Error fetching pokemon list`, error)
    throw error;
  }
};

// Fetch details for 1 Pokemon
const getPokemonDetails = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(`Error fetching pokemon details`, error);
    throw error;
  }
};

// Fetch details for all Pokemon
const getAllPokemonDetails = async () => {
  try {
    const pokemonList = await getPokemonList();
    const detailsPromises = pokemonList.map(async (pokemon: any) => {
      return await getPokemonDetails(pokemon.url);
    });
    const allDetails = await Promise.all(detailsPromises);
    console.log(allDetails)
    return allDetails

  }
  catch (error: any) {
    console.error(`Error fetching all details`, error);
    throw error;
  }
};

function App() {
  console.log("hello")

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
