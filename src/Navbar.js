import React from 'react';
import treeIcon from './img/tree.png';

function Navbar() {
    return (
        <div className="navbar">
            <img className="tree-icon" src={treeIcon} />
            <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Book Now</li>
            </ul>
        </div>
    );
}

export default Navbar;
