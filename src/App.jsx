import './App.css'
import GenreList from './components/GenreList'
import Header from './components/Header'
import Production from './components/Production'
import Slider from './components/Slider'

function App() {

  return (
    <>
      <main className=''>

        <Header />
        <Slider />
        <Production />
        <GenreList />

      </main>
    </>
  )
}

export default App
