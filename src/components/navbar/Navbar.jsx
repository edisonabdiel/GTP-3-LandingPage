import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.svg';

import './navbar.css';

const MenuLinks = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT3?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <MenuLinks />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine size={27} color="rgb(255, 255, 255, 0.8)" onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line size={27} color="rgb(255, 255, 255, 0.8)" onClick={() => setToggleMenu(true)} />
                }{toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                    <div className="gpt3__navbar-menu_container-links">
                        <MenuLinks />
                    </div>
                    <div className="gpt3__navbar-menu_container-links-sign">
                        <p>Sign In</p>
                        <button type="button">Sign Up</button>
                    </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
