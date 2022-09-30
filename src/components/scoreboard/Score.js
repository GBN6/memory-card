import React from 'react'

const Scoreboard = () => {
    return (
        <div className='score-board'>
            <h2 title='score-title'>Score</h2>
            <div className='scores'>
                <div className='current-score'>Current Score: 10</div>
                <div className='high-score'>HIghest Score: 20</div>
            </div>
        </div>
    )
}

export default Scoreboard