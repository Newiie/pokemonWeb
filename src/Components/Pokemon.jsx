import { useEffect, useState } from "react"
import './Pokemon.css'

function PokemonList({PokemonArray}) {
    const [pokePic, setPokePic] = useState({})
    const [isLoading, setIsLoading] = useState(true)
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
    }, [PokemonArray, pokePic])



    console.log(pokePic)

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
    
    return (
        <>
            {!isLoading && <ul className="pokemon-container">
                {
                    PokemonArray.map(poke => {
                        return <li className="pokemon-card" key={poke.name}>
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