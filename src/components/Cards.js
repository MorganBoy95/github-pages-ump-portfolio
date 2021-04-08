import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import card_background from '../images/card_background.png'

function Cards() {
  return (
    <div className='cards'>
      <h1>Computing and Information System Modules</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={card_background}
              text='Take a look at my Level 4 modules'
              label='Level 4'
              path='/Level4'
            />
            <CardItem
              src={card_background}
              text='Take a look at my Level 5 modules'
              label='Level 5'
              path='/Level5'
            />
            <CardItem
              src={card_background}
              text='Take a look at my Level 6 modules'
              label='Level 6'
              path='/Level6'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
