import React, { createContext, useState, useContext } from 'react';

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

  console.log(PokemonArray)
  
  const handleSetDifficulty = (diff) => {
    console.log("difficulty", diff);
    setDifficulty(diff);
  };

  const contextValue = {
    difficulty,
    PokemonArray,
    length,
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
