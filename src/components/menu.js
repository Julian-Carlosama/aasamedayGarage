import React, { useState } from "react";
import '../styles/menu.css';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toogleMenu = () => {
        setMenuOpen(menuOpen);
    };

    return (
        <div className={`menu ${menuOpen ? 'open': ''}`}>
            <button className="hamburger" onClick={toogleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <ul className="nav">
                <li>Home</li>
                <li>Services</li>
                <li>Garage Doors</li>
                <li>Gallery</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Menu;
