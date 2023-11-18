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

  console.log(PokemonArray)
  
  const handleSetDifficulty = (diff) => {
    console.log("difficulty", diff);
    setDifficulty(diff);
  };

  const contextValue = {
    difficulty,
    PokemonArray,
    length,
    score,
    setScore,
    setPokemon,
    setLength,
    setDifficulty,
    handleSetDifficulty,
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