import React, { useEffect, useState } from 'react'
import './slider.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import slide1 from '../../assets/light.jpg'
import slide2 from '../../assets/code.jpg'
import slide3 from '../../assets/hardware.jpg'
import slide4 from '../../assets/pi.jpg'
import { Link } from 'react-scroll'

const data = [slide1, slide2, slide3, slide4];

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0); // Changed to 0 for consistency with useEffect
    const slideLength = data.length;
    const autoScroll = true;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    }

    useEffect(() => {
        let slideInterval;
        if (autoScroll) {
            slideInterval = setInterval(nextSlide, 7000);
        }
        return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }, [currentSlide, autoScroll]); // Adjusted effect dependencies

    return (
        <div className='slider' id='home'>
            <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
            <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />
            {data.map((slide, index) => (
                <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                    {index === currentSlide && (
                        <div
                            className="image"
                            style={{
                                backgroundImage: `linear-gradient(rgba(8, 0, 58, 0.5), rgba(8, 0, 58, 0.6)), url(${slide})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'

                            }}
                        ></div>
                    )}
                </div>
            ))}
            <div className="content">
                <h1>Welcome to OmniTech Solutions</h1>
                <p>We are committed to revolutionising the Technology industry.
                    We specialise in comprehensive tech solutions, from custom
                    software development and innovative hardware designs to strategic
                    consultations tailored to your needs.
                    Count on us to support you at every turn.</p>
                <Link to="contact"
                    className='link'
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration={500}>
                    <button className="btn inside">Get in Touch<i className="fa-solid fa-arrow-right"></i></button>
                </Link>
            </div>
            <div className="slide-indicators">
                {data.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentSlide ? "dot active" : "dot"}
                        onClick={() => setCurrentSlide(index)} // This allows clicking the dot to go directly to a slide
                    ></span>
                ))}
            </div>

        </div>
    );
}

export default Slider;
