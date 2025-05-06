import React from 'react'
import "./Header.css"
import{Link} from 'react-scroll'
import { solar__skyscraper } from '../../assets';
import SolarSystem from '../SolarSystem';

const Header = () => {
  return (
    <header  id='header'>
        <div className='system_wrapper'>
            <SolarSystem />
        </div>
       <div className='container full_height blur-effect'>
        <div className='column'>
            <h1 className='title'>
                Revolutionary Home 
                <span className='g-text'> Solar System</span>
            </h1>
            <p className='text_muted'>
                Harness the power of the sun with our cutting-edge solar technology. 
                Experience energy independence and sustainability like never before.
            </p>
            <div className='buttons_container'>
                <Link to='services' className='btn' id='serv-btn'>Our Services</Link>
                <Link to ='contacts' className='btn btn__primary' id='serv-btn'>Contact Us</Link>
            </div>
        </div>
        <div className='column'>
            <div className='image_container primary- effect'></div>
            <img src={solar__skyscraper} alt="RenewConnect" />
        </div>
       </div> 
    </header>
  )
}

export default Header