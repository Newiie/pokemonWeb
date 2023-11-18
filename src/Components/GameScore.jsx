import './GameScore.css'
import PropTypes from 'prop-types';
import { usePokemon } from '../hooks/PokemonProvider';

export default function GameScore({ length }) {
    const { score } = usePokemon();

    return (
        <div className="gamescore">
            <p>PokeMemo</p>
            <div className='gs-item'>
                <p>SCORE: {score}</p>
                <p>HIGH SCORE: 0</p>
            </div>
            <p>{score}/{length}</p>
        </div>
    )
}

GameScore.propTypes = {
    length: PropTypes.number
};

GameScore.defaultProps = {
    length: 7
}