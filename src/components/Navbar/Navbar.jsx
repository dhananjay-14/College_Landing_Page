import React, { useEffect, useReducer, useRef, useState } from 'react'
import './Navbar.css';
import logo from "../../assets/collegelogo.png"
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const toggleNav = useRef();

    const handleToggle = () => {
        console.log("hi ", toggleNav.current.style.right)
        if (toggleNav.current.style.right === '0px')
            toggleNav.current.style.right = '-200px';
        else
            toggleNav.current.style.right = '0';

    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, [])
    return (
        <nav className={`container ${sticky && 'dark-nav'}`}>
            <img src={logo} alt="" className='logo' />
            <ul ref={toggleNav}>
                <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
                <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to="contact" smooth={true} offset={-260} duration={500}><button className='btn'>Contact Us</button></Link></li>
            </ul>
            <img src={menu_icon} className='menu-icon' onClick={handleToggle}></img>
        </nav>
    )
}

export default Navbar