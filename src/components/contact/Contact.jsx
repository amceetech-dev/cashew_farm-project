import React, { useState } from 'react'
import "./contact.css"
import msgImg from "../../assets/msgIcon.png"

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a3a5da72-5dce-41de-abc7-7a0bd47358b2");

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
        <div className='contact' id='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msgImg} alt='' /></h3>
                <p>Feel free to reach out through contact form or find our contact information below.
                    Your feedback, questions, and suggestions are important to us as we strive to provide exceptional product and services
                    our customers.</p>
                <ul>
                    <li><i className="fa-solid fa-envelope"></i>post@manglorefarms.com</li>
                    <li><i className="fa-solid fa-phone-volume"></i> +234 906 637 5150 </li>
                    <li><i className="fa-solid fa-location-dot"></i> 4a, Hillview Avenue, Independence Layout
                        Enugu, Nigeria</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />

                    <label>Email </label>
                    <input type='email' name='name' placeholder='Enter your email address' required />

                    <label>Write your message here</label>
                    <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='dark-btn'>Submit Now<i className="fa-solid fa-arrow-right"></i></button>

                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact
