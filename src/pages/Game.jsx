import React, {  useState, useEffect } from 'react'
import {usePokemon} from '../hooks/PokemonProvider'
import Pokemon from '../Components/Pokemon';
import GameScore from '../Components/GameScore';

const Game = () => {
    const {
        difficulty,
        setLength,
        setPokemon,
        PokemonArray,
        length
    } = usePokemon();
    
    
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
        fetchData()
    }, [difficulty])

  return (
    <div className="frontImage">
        <GameScore length={length}  />
        <Pokemon PokemonArray={PokemonArray} />
    </div>
  )
}

export default Game
