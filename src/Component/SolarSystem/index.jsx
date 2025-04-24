import React from 'react'
import {sun} from "../../assets"
import "./SolarSystem.css"

const SolarSystem = () => {
  return (
    <div className=' solar_system'> 
        <div className='sun'>
            <img src={sun} alt="" />
        </div>
        <div className ="mercury"></div>
        <div className ='venus'></div>
        <div className='earth'>
          <div className='moon'></div>
        </div>
        <div className='mars'></div>
        <div className='jupiter'></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="nepturn"></div>
        <div className="pluto"></div>
    </div>
  )
}

export default SolarSystem