import React, { useState, useEffect } from 'react';
import Scoreboard from './scoreboard/Score';
import CardContainer from './cards/CardContainer';
import charactersCards from './cards/CharacterCards';

const Main = () => {
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

  const shuffle = (card) => {
    return [...card].sort(() => Math.random() - 0.5)
  };

  const handleCardClick = (e) => {
    const cardName = e.target.parentNode.lastChild.textContent;
    handlePlayRound(cardName)
    setCards(shuffle(cards))
  }

  const handlePlayRound = (cardName) => {
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
      <CardContainer cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
};

export default Main;
