import { useEffect, useState } from 'react'
import './App.css'
import Modal from './Components/Modal'
import Pokemon from './Components/Pokemon';
import GameScore from './Components/GameScore';

function App() {
  const [show, setShow] = useState(true);
  const [difficulty, setDifficulty] = useState("");
  const [PokemonArray, setPokemon] = useState([]);

  const handleSetDifficulty = (diff) => {
    console.log("difficulty", diff);
    setDifficulty(diff);
    setShow((show) => !show)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon")
        const result = await data.json()
        let length = 0

        if (difficulty == "easy") {
          length = 7
        } else if (difficulty == "medium") {
          length = 12
        } else {
          length = 18
        }

        setPokemon(result.results.slice(0, length))
      } catch (error) {
        console.log("Error fetching data due: ", error)
      }
    }
    

    if (!show) fetchData(); 
  }, [difficulty, show])

  return (
    <div className="frontImage">
      {
        !show && <GameScore/>
      }
      {
        show && <Modal  handleSetDifficulty={handleSetDifficulty}/>
      }
      {
        !show  && <Pokemon PokemonArray={PokemonArray} /> 
      }
    </div>
  )
}

export default App
