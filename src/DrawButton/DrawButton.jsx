import React, { Component } from 'react';
import './DrawButton.css';

const handleClick = event => {
    event.preventDefault();
    this.props.drawCard();
  }

class DrawButton extends Component{
    constructor(props){
        super(props);

        // this.preventDefault = this.preventDefault.bind(this);
        this.drawCard = this.drawCard.bind(this);
    }
      
    drawCard(){
        this.props.drawCard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                {/* <button type="button" className="btn" onClick={this.drawCard}>Carta Nueva</button> */}
                <button type="button" className="btn" onClick={this.drawCard}>Carta Nueva</button>

            </div>
        )
    }
}

export default DrawButton