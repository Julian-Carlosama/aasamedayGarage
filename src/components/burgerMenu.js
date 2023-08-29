import React, { useState } from "react";
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import '../styles/burgerMenu.css';
import logoType from'../assets/LOGOTIPO.png';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    /*const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };*/
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <Menu isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)}>
            <Link to='/' onClick={closeMenu}><img src={logoType} alt='Logo' /></Link>
            <Link to='/' onClick={closeMenu}>Home</Link>
            <Link to="/Services" onClick={closeMenu} >Services</Link>
            <Link to="/Services" onClick={closeMenu} >Garage Doors</Link>
            <Link to="/Services" onClick={closeMenu} >Gallery</Link>
            <Link to="/Services" onClick={closeMenu} >About us</Link>
            <Link to="/ContactUs" onClick={closeMenu} >Contact us</Link>
            
            {/*
            <button className="menu-toogle-button" onClick={handleMenuToggle}>Toogle menu</button>*/}
        </Menu>
    )
}

export default BurgerMenu;
