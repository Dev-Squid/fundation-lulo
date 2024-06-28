import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/lulo-logo.jpg";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <img src={logoImage} alt="Lulo" className="logo logo-image" />
                <ul className="nav-items">
                    <li>Mission</li>
                    <li>Team</li>
                    <li>Contact</li>
                    <li>Log In</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
