import React from 'react';

const Header = (props) => {
  const { score, highScore } = props;

  return (
    <header className='header'>
        <h1 className='title'>Memory Game</h1>
        <div className='description'>Get points by clicking on an image but don't click on any more than once!</div>
        <div className='score-board'>
            <p className='score'>Score: {score}</p>
            <p className='high-score'>High Score: {highScore}</p>
        </div>
    </header>
  )
};

export default Header
