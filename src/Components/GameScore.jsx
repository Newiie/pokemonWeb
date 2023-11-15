import './GameScore.css'

export default function GameScore() {
    return (
        <div className="gamescore">
            <p>PokeMemo</p>
            <div className='gs-item'>
                <p>SCORE: 0</p>
                <p>HIGH SCORE: 0</p>
            </div>
            <p>0/15</p>
        </div>
    )
}