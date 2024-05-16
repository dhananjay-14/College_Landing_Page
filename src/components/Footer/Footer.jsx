import React from 'react'
import './Footer.css'

const Footer = () => {
    let year = 2024
    return (
        <div className='footer'>
            <p> &copy; {year} Edusity. All rights reserved.</p>
            <div>
                <span>Terms of Services</span>
                <span style={{ marginLeft: "10px" }}>Privacy Policy</span>
            </div>
        </div>
    )
}

export default Footer