import React from 'react'
import "./about.css"
import machine from "../../assets/machine2.png"

const About = ({ setPlayState }) => {
    return (
        <div className='about' id='about'>
            <div className='about-left'>
                <img src={machine} alt='' className='about-img' />

                <i className="fa-solid fa-circle-play" onClick={() => { setPlayState(true) }}></i>
            </div>
            <div className='about-right'>
                <h3>ABOUT MANGLORE FARM</h3>
                <h2>Crunchy Cashews, Mangalore's Gift</h2>

                <p>Manglore Farms Limited (RC1233133)
                    is a limited liability company incorporated in Nigeria
                    in December, 2014, with the objective to develop the Cashew
                    Value Chain in South Eastern Nigeria for export purposes.
                </p>
                <p>
                    The business idea evolved out of the desire to harness the
                    Huge business potentials in commercial agriculture in the
                    Cashew value chain in Nigeria.

                    The company’s key strength is resourceful Management, proximity to sustainable raw material base, and technical capacity.
                </p>
            </div>

        </div>
    )
}

export default About
