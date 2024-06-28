import React from "react";
import "./WhoWeAreSmall.css";

const WhoWeAreSmall = () => {
    return (
        <div className="who-we-are-small">
            <h1 className="who-we-are-small-text">Who We Are</h1>
            <p className="who-we-are-small-description">
                At <strong>Lulo Animal Shelter</strong>, nestled in the vibrant landscapes of Colombia, we are a sanctuary dedicated to the rescue, rehabilitation, and rehoming of stray animals. 
                Founded on the belief that every creature deserves a second chance, our team is driven by compassion and the unwavering commitment to heal and protect the most vulnerable. 
                Through our efforts, we aim to transform despair into hope, offering a haven where injured and abandoned animals can recover and find their forever homes.
            </p>
            <p className="who-we-are-small-description">
                Our mission extends beyond shelter walls; we strive to foster a community of care and awareness, advocating for the welfare of all animals. 
                By embracing every stray with open arms, we work towards a future where every animal is cherished. Join us at <strong>Lulo Animal Shelter</strong>, where every rescue is a step closer to 
                a world filled with kindness and love for our four-legged friends.
            </p>
            <a href="https://donate.lulo-shelter.com/" className="who-we-are-small-link">Know More</a>
        </div>
    );
}

export default WhoWeAreSmall;