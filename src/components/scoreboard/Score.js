import React from 'react';

const Scoreboard = (props) => {
  const { score, highScore } = props;
  return (
    <div className='score-board'>
      <h2 title='score-title'>Score</h2>
      <div className='scores'>
        <div className='current-score'>Current Score: {score}</div>
        <div className='high-score'>HIghest Score: {highScore}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
