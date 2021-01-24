import React from "react";
import Popup from 'reactjs-popup';
import CardItem from "../pages/CardItem"
import '../Card.css'
import './PopCard.css'



export default class PopCard extends React.Component {

    render() {
        return (
        <div>
            {/* <div className="btn--pop" onClick={this.togglePop}>
                        <CardItem 
                            src= {this.props.src}
                            text= {this.props.text}
                            label= {this.props.label}
                            path= {this.props.path}
                        />
            </div> */}

            <Popup
                trigger={<div>
                            <CardItem 
                                src= {this.props.src}
                                text= {this.props.text}
                                label= {this.props.label}
                                path= {this.props.path}
                            />
                        </div>}
            >
                {close => (
                        <div className="Popmodal">
                            <div className="header"> {this.props.label} </div>
                            <div className="content">
                                {this.props.content}
                            </div>
                            <div className="content2">
                                {this.props.content2}
                            </div>
                            <div className='list_wrap'>
                                {this.props.head}
                                <ul className='list'>
                                    {this.props.list ? this.props.list.map((item) => <li>{item}</li>) : <li></li>}
                                </ul>
                            </div>
                        </div>
                        )}
            </Popup>
            {/* {this.state.seen ? <PopUp toggle={this.togglePop} /> : null} */}
        </div>
        );
    }
}