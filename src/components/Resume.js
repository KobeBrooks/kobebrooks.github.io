import React from 'react';
import './Resume.css'
import ResumePDF from './images/ResP1.pdf'

export default class Resume extends React.Component {

    render () {
        return (
            <div className="RC_Wrapper" id={this.props.id}>
                <div className="R_container" >
                    <h1> Resume </h1>
                    <embed src={ResumePDF + "#page=1"} type="application/pdf" width="100%" height="1000px" className="viewer"/>
                </div>
                <div className="C_container"> 
                    <h1> Contact Me </h1>
                    <h2><a href="https://github.com/KobeBrooks" target="_blank"> <i className="fab fa-github"></i> Kobe Brooks </a></h2>
                    <h2> <i className="fas fa-envelope-open-text"> kbrooks2@oberlin.edu</i> </h2>
                    <h2> <i className="fas fa-phone-alt"> (678)-200-6831</i> </h2>
                </div>
            </div>);
    }
}