import React from 'react';
import {Button} from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Keep up to date with my CV!
                </p>
                <p className="footer-subscription-text">
                    You can unsubscibe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Me</h2>
                        <Link>CV</Link>
                        <Link>Recommendations</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>L4 Modules</h2>
                        <Link>Systems Design and Development</Link>
                        <Link>User Interface Development</Link>
                        <Link>Programming Concepts</Link>
                        <Link>Digital Asset Development</Link>
                        <Link>Computer Architecture and Networking</Link>
                    </div>
                    </div>
                    <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>L5 Modules</h2>
                        <Link>Developing Interactive Web Solutions</Link>
                        <Link>Advanced Database Design</Link>
                        <Link>Object-Oriented Programming</Link>
                        <Link>Digital Security</Link>
                        <Link>Group Design Project</Link>
                        <Link>The Mobile Web</Link>
                        <Link>Database-Driven Web</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>L6 Modules</h2>
                        <Link>Mobile Application Development</Link>
                        <Link>Computer Based Learning Environments</Link>
                        <Link>Business Innovation and Development</Link>
                        <Link>Computer Mediated Marketing</Link>
                        <Link>Developing Ethical and Professional Skills</Link>
                        <Link>Team Based Development</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Joshua Morgan
            </Link>
          </div>
          <small class='website-rights'>Joshua Morgan © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link linkedin'
              to={'pathanme: www.linkedin.com/in/joshua-morgan-022173198'
              }
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Footer
