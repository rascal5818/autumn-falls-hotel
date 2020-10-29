import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Banner from './Banner';
import Footer from './Footer';
import food from './img/food.jpg';
import massage from './img/massage.jpg';
import meditation from './img/meditation.jpg';

const food_description =
    'Enjoy a wide selection of delicious food, freshly served by our board certified chefs every day. Room service runs 24 hours a day for whenever you feel peckish! Full English breakfast is offered to all guests at the hotel.';
const massage_description =
    'Our Spa services offer you the chance to re-energize for the challenges ahead. From Massage Therapies to Skincare, Body Treatments to Pedicures, we offer treatments that help both body and mind.';
const meditation_description =
    'Sitting on 600 acres of mountains, forests, meadows, and valleys, Shambhala Mountain Center in Red Feather Lakes, Colorado, is a nature lovers delight. The center offers an array of mindfulness and retreat offerings.';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar />
                <Banner />
                <div className="card-container">
                    <Card
                        img={food}
                        title="Gourmet Food"
                        desc={food_description}
                        id="one"
                    />
                    <Card
                        img={massage}
                        title="Relaxing Spa"
                        desc={massage_description}
                        id="two"
                    />
                    <Card
                        img={meditation}
                        title="Meditation Retreat"
                        desc={meditation_description}
                        id="three"
                    />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
