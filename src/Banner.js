import React from 'react';
import './App.css';
import bannerImage from './img/banner.jpg';

function Banner() {
    return (
        <div className="banner">
            <img id="banner-image" src={bannerImage} />
            <div id="banner-text">
                <div id="title">Autumn Falls Hotel & Spa</div>
                <p id="sub-title">Céad Míle Fáilte, A Hundred Thousand Welcomes, to Autumn Falls</p>
            </div>

        </div>
    );
}

export default Banner;
