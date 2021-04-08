import React from 'react'
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import Footer from '../Footer'
import card_background from '../../images/card_background.png'

export default function Level5() {
    return (
        <>
        <h1 className='level5'>Level 5</h1>
        <div className='cards'>
      <h1>Computing and Information System L5 Modules</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={card_background}
              text='Developing Interactive Web Solutions'
              label='Level 4'
              path='/Level4'
            />
            <CardItem
              src={card_background}
              text='Advanced Database Design'
              label='Level 5'
              path='/Level5'
            />
            <CardItem
              src={card_background}
              text='Object-Oriented Programming'
              label='Level 6'
              path='/Level6'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src={card_background}
              text='Digital Security'
              label='Level 6'
              path='/Level6'
            />
            <CardItem
              src={card_background}
              text='Group Design Project'
              label='Level 6'
              path='/Level6'
            />
            <CardItem
              src={card_background}
              text='The Mobile Web'
              label='Level 6'
              path='/Level6'
            />
            <CardItem
              src={card_background}
              text='Database-Driven Web'
              label='Level 6'
              path='/Level6'
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
        </>
    );
}