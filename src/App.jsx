import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import TopNav from './components/TopNav'
import AllRecipes from './components/AllRecipes'
import RandomRecipes from './components/RandomRecipe'
import './App.css'

function App() {

  
  return (
    <>
      <TopNav/>
      <Routes>
        <Route path="/all" element={ <AllRecipes/> }></Route>
        <Route path="/random" element={ <RandomRecipes/> } ></Route>
      </Routes>
    </>
  )
}

export default App
