import { useEffect } from 'react'
import {usePokemon} from '../hooks/PokemonProvider'
import Pokemon from '../Components/Pokemon';
import GameScore from '../Components/GameScore';
import GameModal from '../Components/GameModal';

const Game = () => {
    const {
        difficulty,
        setLength,
        setPokemon,
        PokemonArray,
        length,
        score,
        lose
    } = usePokemon();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
                const result = await data.json()
                let len = 0;

                if (difficulty == "easy") {
                    len = 7;    
                } else if (difficulty == "medium") {
                    len = 12;   
                } else {
                    len = 18;   
                }
                console.log("random num: ", getRandomUniqueNumbers(len, 1, 49))
                console.log(result.results)
                let tempPoke = []
                const randomNum = getRandomUniqueNumbers(len, 1, 49);
                for (let i = 0; i < len; i++) {
                    tempPoke[i] = result.results[randomNum[i]]
                }
                setLength(len);
                setPokemon(tempPoke)
            } catch (error) {
                console.log("Error fetching data due: ", error)
            }
        }
        fetchData()
    }, [difficulty])

   
    
  

    const getRandomUniqueNumbers = (count, min, max) => {
        if (count > (max - min + 1) || max < min) {
            throw new Error("Invalid range or count");
        }
        
        const uniqueNumbers = new Set();
        
        while (uniqueNumbers.size < count) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            uniqueNumbers.add(randomNumber);
        }
        
        return Array.from(uniqueNumbers);
    }

    if (score == length) {
        return (
            <GameModal name={"You Won!"} />
        )
    }

    if (lose) {
        return (
            <GameModal name={"You Lost!"} />
        )
    }

    return (
        <div className="frontImage">
            <GameScore length={length}  />
            <Pokemon PokemonArray={PokemonArray} />
        </div>
    )
}

export default Game
