import { useState } from 'react'
import './css/App.css'
import Header from './components/header'
import NavBarItems from './components/navbar'
import SearchBar from './components/searchBar'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <hr />
      <nav>
        <NavBarItems />
        <SearchBar />
      </nav>
    </>
  )
}

export default App
