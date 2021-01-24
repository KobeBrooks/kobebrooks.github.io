import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {Button} from './Button';
import { Link } from 'react-scroll';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect( () => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
           <nav className="navbar">
               <div className="navbar-container">
                    <Link 
                        activeClass="active"
                        to="Hero" 
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="navbar-logo" 
                        onClick={closeMobileMenu}>
                        KOBE <i className="fas fa-crown"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times": "fas fa-bars"} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link 
                                activeClass="active"
                                to="Hero" 
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="nav-links" 
                                onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                activeClass="active"
                                to="Cards" 
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="nav-links"
                                onClick={closeMobileMenu}>
                                Experience
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                activeClass="active"
                                to="Projects"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className='nav-links' 
                                onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                activeClass="active"
                                to="Resume"
                                spy={true}
                                smooth={true}
                                offset={-80} 
                                duration={500}
                                className='nav-links' 
                                onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                activeClass="active"
                                to="Resume"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className='nav-links-mobile' 
                                onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    
                            {button && <Link 
                        activeClass=""
                        to="Resume"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className='' 
                        onClick={closeMobileMenu}>
                            <Button buttonStyle='btn--outline'>CONTACT</Button>
                        </Link>}
                    
               </div>
           </nav>
        </>
    )
}

export default Navbar
