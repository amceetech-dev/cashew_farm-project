import React from 'react'
import "./team.css"
import ceo from "../../assets/ceo.png"
import member from "../../assets/Me.jpg"

const Team = () => {
    return (
        <div className='team' id='team'>
            <div className='cards'>
                <div className='profile'>
                    <img src={ceo} alt='' />
                    <h2>Okey Okorafor</h2>
                    <h3>CHIEF EXECUTIVE OFFICER</h3>
                </div>
                <div className='profile'>
                    <img src={ceo} alt='' />
                    <h2>Elechi Agbi</h2>
                    <h3>EXECUTIVE DIRECTOR</h3>


                </div>
                <div className='profile'>
                    <img src={ceo} alt='' />
                    <h2>Sonie Stevenson Uzoechi</h2>
                    <h3>MANAGER</h3>


                </div>
            </div>

        </div>
    )
}

export default Team
