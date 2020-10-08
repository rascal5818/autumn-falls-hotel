import React from 'react';
import './App.css';

function Card(props) {
    return (
        <div className="card">
            <div>
                <img className="card-image" src={props.img} />
            </div>
            <div>
                <div className="title">{props.title}</div>
            </div>
            <div className="description">{props.desc}</div>
        </div>
    );
}

export default Card;
