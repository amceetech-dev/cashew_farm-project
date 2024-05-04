import React from 'react'
import "./services.css"
import prodIcon from "../../assets/software.png"
import procIcon from "../../assets/hardware.png"
import consIcon from "../../assets/consultationicon.png"

const Services = () => {
    return (
        <div className='service' id='services'>
            <div className='cards'>
                <div className='card'>
                    <img src={prodIcon} alt='' />
                    <h2>Software Development</h2>
                    <p>We excel in custom software development and consulting,
                        simplifying project birth and execution with cost-efficient
                        approaches. With expertise in various sectors such as - web
                        development and UI/UX design, we assure unparalleled success with
                        seamless technology solutions. Our team ensures successful outcomes
                        and risk mitigation tailored to your project’s unique requirements.
                        Partner with us to empower your venture’s growth and competitiveness.
                    </p>
                </div>
                <div className='card'>
                    <img src={procIcon} alt='' />
                    <h2>Hardware designs</h2>
                    <p>We specialise in innovative hardware conceptualisation,
                        design and final product realisation. Our experienced team
                        ensures meticulous attention to detail, resulting in high-quality,
                        cost-effective designs. We focus on designs for performance,
                        efficiency, usability, and scalability, certifying seamless
                        integration with the tech ecosystem. From IoT software and hardware
                        development to cutting-edge technologies, our solutions empower your
                        vision of not “just concepts” but the realisation and workability of
                        precision engineering.


                    </p>
                </div>
                <div className='card'>
                    <img src={consIcon} alt='' />
                    <h2>Consultation</h2>
                    <p>We provide tailored advice, strategic objectives,
                        and recommendations to maximise the potential of your investments.
                        We prioritise understanding your ideas, goals and vision, crafting solutions
                        towards strategic partnerships and technology adoption. We also offer training services
                        for prospective individuals interested in diverse fields in the tech ecosystem.
                        <br />


                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
