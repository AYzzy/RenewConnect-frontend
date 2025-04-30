import React from 'react'
import { company__photo } from '../../assets'
import { Link } from 'react-scroll'
import {FaCheck} from 'react-icons/fa'
import './About.css'
const About = () => {
  return (
    <section id='about'>
        <div className='container'>
            <div className='column company_photo'>
                <img src={company__photo} alt="" />
            </div>
            <div className='column'>
                <h3 className='sub_title'>With 7+ years Experience</h3>
                <h1 className='text_muted'>
                    Welcome to our solar company, where we are dedicated to providing sustainable energy solutions for a brighter future. 
                    Our mission is to harness the power of the sun and make clean energy accessible to everyone. 
                    With a team of experts and cutting-edge technology, we design and install solar systems that meet your unique needs. 
                    Join us in our commitment to a greener planet and let us help you save on energy costs while reducing your carbon footprint.
                </h1>
                <p className='text_muted description'>
                    Our team of experts is here to guide you through every step of the process, from initial consultation to installation and beyond. 
                    We take pride in our commitment to quality, reliability, and customer satisfaction. 
                    Together, we can create a sustainable future powered by clean energy. 
                    Thank you for considering us as your solar partner!
                </p>
                <div className="group">
                    {/* Start row */}
                    <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className='text_muted'>Consultation</p>
                            <h3>Free</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className='text_muted'>Expert</p>
                            <h3>Engineers</h3>
                        </div>
                    </div>
                    {/* End row */}
                    {/* Start row */}
                    <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className='text_muted'>Customer</p>
                            <h3>Support</h3>
                        </div>
                    </div> 
                    {/* End row */}
                     {/* Start row */}
                     <div className="row">
                        <div className="icon_container">
                            <FaCheck/>
                        </div>
                        <div className="details">
                            <p className='text_muted'>Quality</p>
                            <h3>Service</h3>
                        </div>
                    </div> 
                    {/* End row */}  
                </div>
                <div className="buttons_container">
                    <Link to='project' smooth={true} className='btn'>Explore</Link>
                    <Link to='contact' smooth={true} className='btn btn_primary'>Get a quote</Link>
                </div>       
            </div>
        </div>
    </section>
  )
}

export default About