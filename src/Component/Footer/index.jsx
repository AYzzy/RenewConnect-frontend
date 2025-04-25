import React from "react";
import './Footer.css';
import { FaApple,FaGooglePlay } from "react-icons/fa";
import Logo from "../Logo";
import { PiSolarPanelFill } from 'react-icons/pi'

const Footer=() =>{
    return (
        <footer className="renew-footer">
            <div className="footer-container">
               
                <div className="footer-grid">
                    <h2 className="section-title">Solar Energy</h2>
                    <h2 className="section-title">Stable Energy</h2>
                    <h2 className="section-title">FAQ</h2>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">GreenProject</a></li>
                        <li><a href="#">WasteMarketPlace</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                
                <div className="app-buttons">
                    <a href="#" className="app-button">
                    <FaGooglePlay className="app-icon" />
                    <span>Get on Google store</span>
                    </a>
                    <a href="#" className="app-button">
                        <FaApple className="app-icon" />
                        <span>Get on App Store</span>
                    </a>
                </div>
                <div className="footer-main">
                    <div className="footer-brand">
                         <PiSolarPanelFill className='icon'/>
                         <h1 className='name'>Renew<span className="color_primary">Connect</span></h1>
                       
                    </div>
                    {/* <div className="footer-socials">
                        <a href="#"><i className="fab fa-x-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                    </div> */}
                </div>
                <div className="footer-bottom">
                    <p>@copyright2025 RenewConnect. All rights reserved</p>
                </div>
            </div>
            

            
        </footer>
    )
}
export default Footer