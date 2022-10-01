import React from 'react';
import title from '../assets/title.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={title} alt='DragonBall Memory Game' />
      <div className='description'>
        Get points by clicking on an image but don't click on any more than
        once!
      </div>
    </header>
  );
};

export default Header;
