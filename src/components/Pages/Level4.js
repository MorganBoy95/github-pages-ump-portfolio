import React from 'react'
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import Footer from '../Footer'
import Cards from '../Cards';
import card_background from '../../images/card_background.png'


export default function Level4() {
    return (
        <>
        <h1 className='level4'>Level 4</h1>
        <div className='cards'>
      <h1>Computing and Information System L4 Modules</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={card_background}
              text='Systems Design and Development'
              label='Level 4'
              path='/Level4'
            />
            <CardItem
              src={card_background}
              text='User Interface Development'
              label='Level 5'
              path='/Level5'
            />
            <CardItem
              src={card_background}
              text='Programming Concepts'
              button='Button'
              label='Level 6'
              path='/Level6'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src={card_background}
              text='Digital Asset Development'
              label='Level 6'
              path='/Level6'
            />
            <CardItem
              src={card_background}
              text='Computer Architecture and Networking'
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