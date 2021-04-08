import React from 'react'
import '../App.css'
import '../components/AboutMe.css'
import aboutmeprofile from '../images/AboutMeProfile.jpg'

console.log(aboutmeprofile);

function AboutMeHero() {
    return(
        <div className='aboutme-container'>
            <div className='aboutme-wrapper'>
                <div className='about-left'>
                    <img className='profile' src={aboutmeprofile} />
                </div>
                <div className='about-right'>
                    <h1>Joshua Morgan</h1>
                    <h3>Mobile: 07910084524</h3>
                    <h3>Email: joshuatmorgan95@gmail.com</h3>
                </div>
            </div>
        </div>
    )
}

export default AboutMeHero