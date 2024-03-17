/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { usePokemon } from '../hooks/PokemonProvider'

const GameModal = ({ name }) => {
  const {handleReset} =  usePokemon()
  return (
    <div className="frontImage">
        <div className="modal">
            {name}
            {name == "You Lost!"? 
                <img src="https://media1.tenor.com/m/XQzVKN1Fv6wAAAAC/detective-pikachu-sad.gif" alt="SAD GIF" />
              :
              <img src="https://media.tenor.com/3IACtMvxwdsAAAAi/pikachu-happy.gif" alt="GIF" />}
            <Link to="/" onClick={() => handleReset()} className='btn'>New Game</Link>
        </div>
    </div>
  )
}

export default GameModal
