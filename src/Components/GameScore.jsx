import './GameScore.css'
import PropTypes from 'prop-types';

export default function GameScore({ length }) {
    return (
        <div className="gamescore">
            <p>PokeMemo</p>
            <div className='gs-item'>
                <p>SCORE: 0</p>
                <p>HIGH SCORE: 0</p>
            </div>
            <p>0/{length}</p>
        </div>
    )
}

GameScore.propTypes = {
    length: PropTypes.number
};