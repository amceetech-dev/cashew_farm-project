import React from 'react'
import "./team.css"
import prince from "../../assets/prince.jpg"
import bryan from "../../assets/bryan.jpg"
import israel from "../../assets/israel.jpg"


const Team = () => {
    return (
        <div className='team' id='team'>
            <div className='cards'>
                <div className='profile'>
                    <img src={israel} alt='' />
                    <h2>Emmanuel Okpara Israel</h2>
                    <h3>CO-FOUNDER</h3>
                </div>

                <div className='profile'>
                    <img src={prince} alt='' />
                    <h2>Nwofor Amuche Prince</h2>
                    <h3>CO-FOUNDER</h3>

                </div>
                <div className='profile'>
                    <img src={bryan} alt='' />
                    <h2>Waya Bryan</h2>
                    <h3>CO-FOUNDER</h3>

                </div>
            </div>

        </div>
    )
}

export default Team
