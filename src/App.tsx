import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("hello")

  useEffect(() => {
    const getPokemonList = async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      try{
        const result = await fetch(apiUrl)
        const data = await result.json()
        console.log(data.results)
      }
      catch (error: any) {
        console.error(error.message)
      }
    }
    
    getPokemonList();
  }, []);
  
  return (
    <>
    <p>Hello world</p>
    </>
  )
}

export default App
