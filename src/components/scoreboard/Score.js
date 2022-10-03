import React from 'react';

const Scoreboard = (props) => {
  const { score, highScore } = props;
  return (
    <div className='score-board'>
      <div className='scores'>
        <div className='current-score'>Current Score: {score}</div>
        <div className='high-score'>Highest Score: {highScore}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
