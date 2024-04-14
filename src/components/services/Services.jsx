import React from 'react'
import "./services.css"
import prodIcon from "../../assets/productionicon.png"
import procIcon from "../../assets/processingicon.png"
import consIcon from "../../assets/consultationicon.png"

const Services = () => {
    return (
        <div className='service' id='services'>
            <div className='cards'>
                <div className='card'>
                    <img src={prodIcon} alt='' />
                    <h2>Cashew Production</h2>
                    <p>Beyond raw cashew nuts, We offer value-added products
                        such as roasted cashews, cashew butter, cashew milk, or other
                        innovative products. Currently 300ha Cashew Plantations in the
                        two neighbouring States of Enugu and Abia, Nigeria. We are looking
                        to quickly scale up to 5,000ha in the next five years. While at this,
                        we are in the meantime sourcing raw materials from abundant local sources
                        that offer organically grown albeit wild nuts.</p>
                </div>
                <div className='card'>
                    <img src={procIcon} alt='' />
                    <h2>Cashew Processing</h2>
                    <p>we have processing facilities to shell, dry, roast, and package cashew nuts.
                        Recently commissioned a modern RCN processing factory in Enugu in 2023
                        equipped with imported machineries for the production of
                        export-grade cashew kernels for various purposes such as:
                        Table ready and on-the-go snacks,
                        Cashew cream and cashew spread production,
                        Raw Cashew kernels for roasting, flavouring to suit different test buds,
                        and rebranding for various markets.
                    </p>
                </div>
                <div className='card'>
                    <img src={consIcon} alt='' />
                    <h2>Consultation</h2>
                    <p>We offer consultation and training services to other farmers
                        or individuals interested in starting their own cashew farms.
                        This include advice on land preparation,
                        planting techniques, crop management, and harvesting methods.
                        Our experienced team is
                        dedicated to fostering sustainable agricultural practices and empowering individuals
                        with the knowledge and skills needed to thrive in the cashew farming industry.
                        <br />


                    </p>
                </div>
            </div>
        </div>
    )
}

export default Services
