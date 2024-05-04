import React from 'react'
import "./footer.css"
import { Link } from 'react-scroll';



const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Our expertise includes seamless integration of web platforms and Smart appliances
                        for customer accessibility, convenience, control and energy conservation.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: info.omnitechsolutionz@gmail.com</p>
                    <p>Phone: +234 814 748 1230</p>
                    <p>Address: 5 Chukwuemeka Street, Lomalinda Extension, Maryland, Enugu State, Nigeria</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>Stay connected with us on social media:</p>
                    <ul className="social-media-links">
                        <a href='https://twitter.com/Omnitechsolz' target="_blank"><li><i className="fa-brands fa-square-twitter"></i></li></a>
                        <a href='/'><li><i className="fa-brands fa-linkedin"></i></li></a>
                        <a href='https://github.com/Omnitechsolz' target="_blank"><li><i className="fa-brands fa-square-github"></i></li></a>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>© {currentYear} OmniTech Solutions. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
