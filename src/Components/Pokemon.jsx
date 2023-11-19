import { useEffect, useState } from "react"
import './Pokemon.css'
import PropTypes from 'prop-types'
import { usePokemon } from "../hooks/PokemonProvider"


function PokemonList({PokemonArray}) {
    const { setScore, setPokemon } = usePokemon();

    const [pokePic, setPokePic] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [clickedPokemon, setClickedPokemon] = useState([])
    const [isFlipped, setIsFlipped] = useState(false);

    const pointPokemon = {}

    // INITIAL
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, []);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const tmpPicDict = {}   
                for (let i = 0; i < PokemonArray.length; i++) {
                    if (PokemonArray[i]) {
                        const data = await fetch(PokemonArray[i].url)
                        const result = await data.json()
                        tmpPicDict[PokemonArray[i].name] = result.sprites.other["official-artwork"]["front_default"]
                        console.log(`INDES ${i}  ${PokemonArray[i].name}`, result.sprites.other["official-artwork"]["front_default"])
                        pointPokemon[PokemonArray[i].name] = 0
                    } else {
                        console.log("UNIDENTIFIED I", i);
                    }
                }
                console.log("TMP", tmpPicDict)
                setPokePic(tmpPicDict)
            } catch (error) {
                console.log("Error: ", error)
            }
        }
        fetchImage()
    }, [PokemonArray])

 

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    

    const handleCardClick = (e) => {
        if (clickedPokemon.includes(e)) {
            console.log("Already Clicked")
            return;
        }
        setScore((score) => score + 1)
        setClickedPokemon(prevClickedPokemon => [...prevClickedPokemon, e]);
        const tmpShuffled = shuffleCard();
        setIsFlipped(true)
        
        setTimeout(() => {
            setPokemon(tmpShuffled)
        }, 1000)

        setTimeout(() => {
            setIsFlipped(false)
        }, 2000);
        
    }

    const shuffleCard = () => {
        const shuffledArray = [...PokemonArray];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        console.log("SHUFFLED", shuffledArray)
        return shuffledArray;
    }

    return (
        <>
            {!isLoading && pokePic.length != 0 &&<ul className={`pokemon-container ${isFlipped ? ' flip' : ''}`}>
                {
                    PokemonArray.map(poke => {
                        if (!poke) {
                            console.log("Empty Poke")
                            return;
                        }
                        return <li className="pokemon-card" key={poke.name} onClick={() => handleCardClick(poke.name)}>
                            <img className="front" src={pokePic[poke.name]}/>
                            <img className="back" src="../../newaset/pokemonCardBack.jpg" alt="" />
                            <p>{poke.name}</p>
                        </li>
                    })
                }
            </ul>
            }
        </>
    )
}

export default function Pokemon({PokemonArray}) {
    return (
        <div>
             <PokemonList  PokemonArray={PokemonArray} />
        </div>
    )
}

Pokemon.propTypes = {
    PokemonArray: PropTypes.array
}

PokemonList.propTypes = {
    PokemonArray: PropTypes.array
}