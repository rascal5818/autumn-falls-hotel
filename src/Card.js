import React from 'react';
import './App.css';

function Card(props) {
    return (
        <div className="card" id={props.id}>
            <div id="image-1280">
                <img className="card-image" src={props.img} />
            </div>
            <div id="title-1280">
                <div className="title">{props.title}</div>
            </div>
            <div className="description">{props.desc}</div>
        </div>
    );
}

export default Card;
