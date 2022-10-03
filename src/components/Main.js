import React, { useState, useEffect } from 'react';
import Scoreboard from './scoreboard/Score';
import CardContainer from './cards/CardContainer';
import charactersCards from './cards/CharacterCards';

const Main = () => {
  const cardsAmount = 12;
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState(charactersCards);
  const [clickedCards, setClickedCards] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = () => {
    setHighScore(score);
  };

  const reset = () => {
    setClickedCards([]);
    setScore(0);
  };

  const handleRound = (e) => {
    const cardName = e.target.parentNode.lastChild.textContent;
    if (!clickedCards.includes(cardName)) {
      setClickedCards((prevState) => [...prevState, cardName]);
      handleScore();
    } else {
      if (score > highScore) {
        handleHighScore();
      }
      reset();
    }
  };

  return (
    <div className='main'>
      <Scoreboard score={score} highScore={highScore} />
      <CardContainer cards={cards} handleCardClick={handleRound} />
    </div>
  );
};

export default Main;
