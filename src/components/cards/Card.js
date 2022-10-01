import React from 'react';

const Card = (props) => {
  const { name, handleCardClick } = props;
  return (
    <div className='card' onClick={handleCardClick}>
      <div className='card-img' />
      <p className='card-title'>{name}</p>
    </div>
  );
};

export default Card;
