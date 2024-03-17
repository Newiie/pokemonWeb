import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'

const PokemonContext = createContext();

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("Parent must be wrapped inside PokemonProvider");
  }
  return context;
};


const PokemonProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState("");
  const [PokemonArray, setPokemon] = useState([]);
  const [length, setLength] = useState(0);
  const [score, setScore] = useState(0);
  const [gameCard, setGameCard] = useState(false);
  const [lose, setLose] = useState(false)

  console.log("PokemonArray: ", PokemonArray)
  
  const handleSetDifficulty = (diff) => {
    console.log("difficulty", diff);
    setDifficulty(diff);
  };

  const handleReset = () => {
    setLose(false)
    setScore(0)
    setDifficulty("")
    setPokemon([])
  }

  const contextValue = {
    difficulty,
    PokemonArray,
    length,
    score,
    gameCard,
    setGameCard,
    setScore,
    setPokemon,
    setLength,
    setDifficulty,
    handleSetDifficulty,
    lose,
    setLose,
    handleReset
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;  


PokemonProvider.propTypes = {
  children: PropTypes.element
}