import React from 'react'
import '../../App.css'
import AboutMeHero from '../AboutMeHero'
import Footer from '../Footer';


export default function AboutMe() {
    return (
        <>
            <AboutMeHero />

            <div className='cv-container'>
                <div className='cv-wrapper'>
                    <h1>About Me</h1>
                    <p>Hello, my name is Joshua Morgan. I am in my final year with Anglia Ruskin University having selected my optional modules towards Web Development. I have experience in React JS, ReactStrap, HTML5, CSS, PHP and Blazor.</p>
                    <br></br>
                    <p>I am a personable, hard-working, and enthusiastic individual looking to further my education within website development by undertaking an MSc in the fall. Enhancing my current knowledge will allow me to perform better at your company; deliver exceptional customer satisfaction, adapt and embrace to an ever evolving workplace, and deliver projects.</p>
                    <br></br>
                    <p>One of my strongest attributes is my determination. I enjoy diving in at the deep end taking challenges head-on and going out of my way to get the job done. I am always willing to learn to overcome new challenges or hurdles as i get satisfaction improving myself. I enjoy stepping up to lead a team whether that be at university during team events, representing my cohort at Student Council or at my previous job leading a retail team to meet business targets.</p>
                    <br></br>
                    <p>I can bring dedication, a willingness to learn and drive to succeed within your company to meet your targets and deadlines. I would be appreciative of being allowed to better myself and hone my skills and in return providing loyalty and dedication to to do my best for the company who is willing to take me on.</p>
                </div>
            </div>

            <Footer />
        </>
    );
}

