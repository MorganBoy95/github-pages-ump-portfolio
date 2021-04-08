import React from 'react'
import '../App.css'
import '../components/HeroSection.css'
import {Button} from './Button';
import heroimage from '../images/heroimage.png'

console.log(heroimage);

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='hero-wrapper'>
                <div className='column-left'>
                    <h2>Student</h2>
                    <h1>Aspiring Web Developer</h1>
                    <p>I have chosen my modules at University to specialise in Web Development.
                         I am looking to do my masters in Mobile Web and looking for career opportunities. </p>
                </div>
                <div className='column-right'>
                    <img className='portfolio' src={heroimage}/>
                </div>
            </div>
        </div>
    )
}



export default HeroSection
