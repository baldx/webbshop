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
      <main>
        <div className="top">
          <img src="./src/assets/fontImage.jpg" alt="" className='front-image'/>
          <div className="info">
            <h1>Utility Accessories</h1>
            <button>Shop now</button>
          </div>
        </div>
        <div className="top">
          <img src="./src/assets/bottomImage.jpg" alt="" className='front-image'/>
          <div className="info">
            <h1>New in</h1>
            <button>Shop now</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
