import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="img"><img src={props.img} alt="Card" /></div>
                <div className="eng">{props.eng}</div>
                <div className="han">{props.han}</div>
            </div>
            <div className="front back">
                <div className="imgb"><img src={props.imgb} alt="Card" /></div>
                <div className="pin">{props.pin}</div>
            </div>
        </div>
    </div>
)

export default Card