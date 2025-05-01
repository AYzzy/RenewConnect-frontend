import React from 'react';
import './Logo.css';
import { PiSolarPanelFill } from 'react-icons/pi';
import { Link } from 'react-router-dom'; 

const Logo = () => {
    return (
        <div className='logo'>
            <Link to="/">
                <PiSolarPanelFill className='icon' />
                <h1 className='name'>Renew<span className="color_primary">Connect</span></h1>
            </Link>
        </div>
    );
};

export default Logo;