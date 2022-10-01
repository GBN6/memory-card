import React, { useState } from 'react';
import Scoreboard from './scoreboard/Score';
import CardContainer from './cards/CardContainer';

const Main = () => {
  const [score, setScore] = useState(5);
  const [highScore, setHighScore] = useState(10);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = () => {
    setHighScore(score)
  };


  return (
    <div>
      <Scoreboard score={score} highScore={highScore} />
      <CardContainer />
    </div>
  );
};

export default Main;
