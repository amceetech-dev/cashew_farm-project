import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import "./navbar.css"
import logo from '../../assets/logo.png'



function Navbar() {
    const [clicked, setClicked] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
        })
    }, [])
    return (
        <nav className={scrolled ? "container dark-nav" : "container"}>
            <Link
                className='link'
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
            ><img src={logo} alt='' className='logo' /></Link>

            <ul className={clicked ? "navbar active" : "navbar"}>

                <li className='underline'>
                    <Link to="home"
                        className='link'
                        activeClass="active-link"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={500}
                    >Home</Link>
                </li>
                <li className='underline'>
                    <Link to="services"
                        className='link'
                        activeClass="active-link"
                        spy={true}
                        smooth={true}
                        offset={-180}
                        duration={500}
                    >Services</Link>
                </li>

                <li className='underline'>
                    <Link
                        to="about"
                        className='link'
                        spy={true}
                        smooth={true}
                        activeClass="active-link"
                        offset={-120}
                        duration={500}
                    >About Us</Link>
                </li>

                <li className='underline'>
                    <Link
                        to="team"
                        className='link'
                        spy={true}
                        activeClass="active-link"
                        smooth={true}
                        offset={-250}
                        duration={500}
                    >Team Members</Link>
                </li>
                <li className='underline'>
                    <Link to="gallery"
                        className='link'
                        spy={true}
                        activeClass="active-link"
                        smooth={true}
                        offset={-200}
                        duration={500}
                    >Gallery</Link>
                </li>

                <li>
                    <Link
                        to="contact"
                        className='link'
                        spy={true}
                        smooth={true}
                        offset={-300}
                        duration={500}
                    ><button className='btn'>Contact</button></Link>
                </li>

            </ul>
            <div className='mobile'>

                <i id='bar' onClick={handleClick} className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>

            </div>

        </nav >
    )
}

export default Navbar
