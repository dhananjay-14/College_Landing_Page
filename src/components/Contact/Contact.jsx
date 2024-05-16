import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phonee_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "865655bc-e93b-4c32-a485-9be0bebcdb92");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out  through contact from or find our contact informationo below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon}></img>bhavardhananjay3@gmail.com</li>
                    <li><img src={phonee_icon}></img>+91 9022447627</li>
                    <li><img src={location_icon}></img>Kerala, India</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type='text' name='name' placeholder='Enter your name'></input>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your mobile number' required></input>
                    <label>Write your message here</label>
                    <textarea name='message' placeholder='Enter your message' rows='6' required></textarea>
                    <button type='submit' className='btn'>Submit</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact