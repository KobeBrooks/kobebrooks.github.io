import React from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-scroll';
import './Hero.css';
import '../App.css';
import profile from './images/profile.jpeg'


export default class Hero extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popup: false
        };

        this.OpenModal = this.OpenModal.bind(this);
    }
    
    OpenModal() {
        this.setState({ popup: true })
    }

    render () {
        return (
            <div className='hero-container' id={this.props.id}>
                <h1>Kobe Brooks</h1>
                <h2>THE UNIQUE PROGRAMMER</h2>
                <div className='hero-btns'>
                    <Popup
                        trigger={<button className="btn btn--outline btn--large"> About Me </button>}
                        modal
                        nested
                    >
                        {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                            &times;
                            </button>
                            <div className="header"> About Me </div>
                            <div className="wrapper">
                                <div className="picture"><img src={profile} alt="Kobe Profile" className="picture_p"></img></div>
                                <div className="content">
                                    <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp; Hey! My name is Kobe Brooks and I am currently a third-year student at Oberlin College. While pursuing a major in Computer Science
                                        I also participate on the varsity football team and am an active board member of the Black Student Athlete Group on campus. I have broad
                                        developmental experience ranging from front-end work with HTML, CSS, JavaScript, and React to back-end work with SQL, SSRS, Python, 
                                        and Java.
                                    </p>
                                    
                                    <br />
                                    <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp; Want to know about me? I love sports and spend my free time as an avid fan of the Atlanta Falcons and Hawks.
                                    On top of that I love gaming and have spent many hours of my life on games like Minecraft, Call of Duty, and Madden/2K. If I am not gaming
                                    or watching sports you can catch me working out and listening to music!
                                    </p>

                                    <br />
                                    <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp; I plan to continue expanding my knowledge in the Computer Science and Software Development fields to one day 
                                    create products to put my own stamp on this beautiful earth. Look at my Resume to see the skills I am building to one day achieve my goals!
                                    </p>
                                </div>
                            </div>
                        </div>
                        )}
                    </Popup>
                    {/* <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>Contact <i className='fas fa-id-card' /></Button> */}
                    
                {/* <button className="btn btn--primary btn--large"> Contact <i className='fas fa-id-card' /></button> */}
                <Link 
                        activeClass=""
                        to="Resume"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className='' >
                            <button className='btn btn--primary btn--large'>CONTACT<i className='fas fa-id-card' /></button>
                        </Link>
                    
                </div>
                <p><i className='fas fa-angle-double-down' /> Scroll For More <i className='fas fa-angle-double-down' /></p>
             </div>
            );
    }
}
