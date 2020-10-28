import React from 'react';
import treeIcon from './img/tree.png';

function Navbar() {
    return (
        <div className="navbar">
            <img className="tree-icon" src={treeIcon} />
            <ul>
                <li>Book Now</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
        </div>
    );
}

export default Navbar;
