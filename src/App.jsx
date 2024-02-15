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

      <footer>
      <div className="left-footer">
        <img src="./src/assets/JewelryLogo.png" alt="Logo" className="logo" />
        <div className="logo-name">Divine Desires</div>
      </div>
      <div className="credit-right">
        <div className="credit-contributors">Contributors:</div>
        <div className="link-section">
          <div className="link-name">
            <span>Ahmad</span>
            <span>Hugo</span>
            <span>Alvin</span>
          </div>
          <div className="link-container">
            <a target="_blank" href="https://www.instagram.com/ahmad.nocap/">
              <img src="./src/assets/black-instagram-transparent-logo-10671.svg" alt="" className="ig" />
            </a>
            <a target="_blank" href="https://www.instagram.com/hugowilinski/">
              <img src="./src/assets/black-instagram-transparent-logo-10671.svg" alt="" className="ig" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            >
              <img src="./src/assets/black-instagram-transparent-logo-10671.svg" alt="" className="ig" />
            </a>
          </div>
        </div>
      </div>
      </footer>
    </>
  )
}

export default App
