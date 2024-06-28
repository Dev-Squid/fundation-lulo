import React from "react";
import "./Welcome.css";

const Welcome = () => {
    return (
        <div className="welcome">
            <h1 className="welcome-text">Welcome to <br></br> Lulo Animal Shelter</h1>
            <h1 className="welcome-text">All chances and all <br></br> oportunities</h1>
            <a href="https://donate.lulo-shelter.com/" className="button-link">SPONSOR A STRAY</a>
        </div>
    );
};

export default Welcome;