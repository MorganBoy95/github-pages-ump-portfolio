import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import Dropdown from './Dropdown'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(false);
        }
    };

    window.addEventListener('resize', showButton);
  
    return (
        <>
            <nav className="navbar">
                
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        Joshua Morgan
                        
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        >
                            <Link to='/studies' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            >
                              Studies <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                CV/Contact
                            </Link>
                        </li>
                        
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign In</Button> }
                
            </nav>
        </>
    )
}

export default Navbar
