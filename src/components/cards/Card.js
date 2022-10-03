import React from 'react';

const Card = (props) => {
  const { src, name, handleCardClick } = props;
  return (
    <div className='card' onClick={handleCardClick}>
      <img className='card-img' src={src} alt={name} />
      <p className='card-title'>{name}</p>
    </div>
  );
};

export default Card;
