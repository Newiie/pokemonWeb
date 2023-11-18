import { useEffect, useState } from "react"
import './Pokemon.css'
import PropTypes from 'prop-types'
import { usePokemon } from "../hooks/PokemonProvider"


function PokemonList({PokemonArray}) {
    const { score, setScore } = usePokemon();

    const [pokePic, setPokePic] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [clickedPokemon, setClickedPokemon] = useState([])

    const pointPokemon = {}

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const tmpPicDict = {}
                for (let i = 0; i < PokemonArray.length; i++) {
                    const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + PokemonArray[i].name)
                    const result = await data.json()
                    tmpPicDict[PokemonArray[i].name] = result.sprites.other["official-artwork"]["front_default"]
                    pointPokemon[PokemonArray[i].name] = 0
                }
                setPokePic(tmpPicDict)
            } catch (error) {
                console.log("Error: ", error)
            }
        }
        fetchImage()
    }, [PokemonArray])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, []);

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
        console.log(score);
        setClickedPokemon(prevClickedPokemon => [...prevClickedPokemon, e]);
        console.log("Clicked Pokemon:", e);
    }

    return (
        <>
            {!isLoading && <ul className="pokemon-container">
                {
                    PokemonArray.map(poke => {
                        return <li className="pokemon-card" key={poke.name} onClick={() => handleCardClick(poke.name)}>
                            <img className="front" src={pokePic[poke.name]}/>
                            <img className="back" src="../../public/newaset/pokemonCardBack.jpg" alt="" />
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