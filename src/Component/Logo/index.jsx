import React from 'react'
import "./Logo.css"
import { PiSolarPanelFill } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='logo'>
            <PiSolarPanelFill className='icon'/>
            <h1 className='name'  onClick={() => navigate('/Header')}>Renew<span className="color_primary">Connect</span></h1>
        </div>

    )
}


export default Logo