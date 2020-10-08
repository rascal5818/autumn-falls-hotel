import React from 'react';
import './App.css';
import bannerImage from './img/banner.jpg'

function Banner() {
    return (
        <div className="banner">
            <img className="banner" src={bannerImage} />
            <div className="centered">Autumn Falls Hotel & Spa</div>
        </div>
    )
}

export default Banner;