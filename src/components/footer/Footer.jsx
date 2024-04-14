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
                    <p>Manglore Farm Ltd is dedicated to sustainable cashew farming practices, ensuring high-quality products while preserving the environment.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: post@manglorefarm.com</p>
                    <p>Phone: +234 906 637 5150</p>
                    <p>Address: 4a, Hillview Avenue, Independence Layout Enugu, Nigeria</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>Stay connected with us on social media:</p>
                    <ul className="social-media-links">
                        <Link to=''><li><i class="fa-brands fa-square-twitter"></i></li></Link>
                        <Link to=''><li><i class="fa-brands fa-square-instagram"></i></li></Link>
                        <Link to=''><li><i class="fa-brands fa-square-facebook"></i></li></Link>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>© {currentYear} Manglore Farm Ltd. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
