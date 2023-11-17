import { useEffect, useState } from 'react'
import './App.css'
import Modal from './Components/Modal'
import Pokemon from './Components/Pokemon';
import GameScore from './Components/GameScore';

function App() {
  const [show, setShow] = useState(true);
  const [difficulty, setDifficulty] = useState("");
  const [PokemonArray, setPokemon] = useState([]);
  const [length, setLength] = useState(0);
  
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
        let len = 0;

        if (difficulty == "easy") {
          setLength(7);
          len = 7;
        } else if (difficulty == "medium") {
          setLength(12);
          len = 12;
        } else {
          setLength(18);
          len = 18;
        }

        setPokemon(result.results.slice(0, len))
      } catch (error) {
        console.log("Error fetching data due: ", error)
      }
    }
    

    if (!show) fetchData(); 
  }, [difficulty, show])

  return (
    <div className="frontImage">
      {
        !show && <GameScore length={length}  />
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
