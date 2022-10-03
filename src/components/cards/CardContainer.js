import React from 'react';
import Card from './Card';

const CardContainer = (props) => {
  const { cards, handleCardClick } = props;

  const card = cards.map((item) => (
    <Card
      src={item.src}
      key={item.name}
      name={item.name}
      handleCardClick={handleCardClick}
    />
  ));

  return <div className='card-container'>{card}</div>;
};

export default CardContainer;
