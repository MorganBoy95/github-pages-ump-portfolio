import React from 'react'
import '../../App.css';
import '../Cards.css';
import CardItem from '../CardItem';
import Footer from '../Footer'
import card_background from '../../images/card_background.png'

export default function Level6() {
    return (
        <>
        <h1 className='level6'>Level 6</h1>
        <div className='cards'>
      <h1>Computing and Information System L6 Modules</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={card_background}
              text='Mobile Application Development'
              label='Level 4'
              path='/Level4'
            />
            <CardItem
              src={card_background}
              text='Computer Based Learning Environments'
              label='Level 5'
              path='/Level5'
            />
            <CardItem
              src={card_background}
              text='Business Innovation and Development'
              label='Level 6'
              path='/Level6'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src={card_background}
              text='Computer Mediated Marketing'
              label='Level 6'
              path='/Level6'
            />
            <CardItem
              src={card_background}
              text='Developing Ethical and Professional Skills'
              label='Level 6'
              path='/Level6'
            />
            <CardItem
              src={card_background}
              text='Team Based Development'
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