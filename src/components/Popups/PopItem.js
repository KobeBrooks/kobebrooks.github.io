import React, { Component } from "react";




export default class PopUp extends Component {

    handleClick = () => {
    this.props.toggle();
    };

    render() {
    return (
        <div className="modal">
                            <button className="close" onClick={this.handleClick}>
                            &times;
                            </button>
                            <div className="header"> About Me </div>
                            <div className="content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                            commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                            explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                            </div>
                        </div>
    );
    }
}