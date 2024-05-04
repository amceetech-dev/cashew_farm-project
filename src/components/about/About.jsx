import React from 'react'
import "./about.css"
import machine from "../../assets/aboutus.jpg"

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about-left'>
                <img src={machine} alt='' className='about-img' />

            </div>
            <div className='about-right'>
                <h3>ABOUT OmniTech Solutions</h3>
                <h2>Where technologies meets possibilities</h2>

                <p>Omnitech Solutions is a limited liability company aiming to optimise and integrate the software, hardware and Information technology (IT) as a whole in meeting customer needs in the diverse and ever-growing world of tech.

                    <br />

                    <b> Mission statement:</b>
                    <br />
                    To simplify and enhance the accessibility and convenience of ICTs to our consumers.
                    <br />
                    <b>Vision Statement:</b>
                    <br />
                    To excel in every product offered to meet customer satisfaction.

                </p>

            </div>

        </div>
    )
}

export default About
