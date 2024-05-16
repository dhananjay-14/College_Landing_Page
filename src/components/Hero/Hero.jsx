import React from 'react'
import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png"
import { Link } from "react-scroll"

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                <Link to="program" smooth={true} offset={-260} duration={500}><button className="btn">Explore more <img src={darkArrow} alt="" /></button></Link>
            </div>
        </div>
    )
}

export default Hero;