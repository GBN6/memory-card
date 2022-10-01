import React from 'react';
import Card from './Card';

const CardContainer = (props) => {
  const { cards, handleCardClick } = props;

  const card = cards.map((item) => (
    <Card key={item.name} name={item.name} handleCardClick={handleCardClick} />
  ));

  return <div className='card-container'>{card}</div>;
};

export default CardContainer;
