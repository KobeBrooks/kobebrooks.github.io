import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-sub">
                <p className="footer-sub-head">
                    Contact me at kbrooks2@oberlin.edu <i class="fas fa-envelope-open-text"></i>
                </p>
                {/*<p className="footer-sub-head">
                    kbrooks2@oberlin.edu <i class="fas fa-envelope-open-text"></i>
                </p>*/}
                {/* <div className="input-areas">
                    <form>
                        <input type='email' name="email" className='footer-input' placeholder='Your Email' />
                        <Button buttonStyle='btn--outline'>Submit</Button>
                    </form>
                </div> */}
            </section>
            <div className="footer-links">
                <div className='footer-links-wrapper'>
                    <div className='footer-link-items'>
                        <h2>GitHub</h2>
                        <Link to='' target='_blank'>Kobe Brooks <i class="fab fa-github-square"></i></Link>
                        <h2>Social Media</h2>
                        <Link to="/" className='social-logo' target="_blank" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </div>
            {/*<section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <h2>Social Media</h2>
                        <Link to="/" className='social-logo' target="_blank" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </section>*/}
        </div>
    )
}

export default Footer
