/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import './Pokemon.css'

function PokemonList({PokemonArray}) {
    const [pokePic, setPokePic] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [loadedImageCount, setLoadedImageCount] = useState(0); // Track loaded images
    const totalImages = PokemonArray.length;

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
    console.log(pokePic)

    useEffect(() => {
        // Check if all images have been loaded
        if (loadedImageCount === totalImages) {
            setIsLoading(false); // Set isLoading to false when all images are loaded
        }
    }, [loadedImageCount, totalImages]);

    const handleImageLoad = () => {
        setLoadedImageCount(prevCount => prevCount + 1);
    };

    
    return (
        <>
            {isLoading && <div>Loading...</div> }
            {!isLoading && <ul className="pokemon-container">
                {
                    PokemonArray.map(poke => {
                        return <li className="pokemon-card" key={poke.name}>
                            <img className="front" src={pokePic[poke.name]} onLoad={handleImageLoad}/>
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