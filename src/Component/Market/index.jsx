import React from "react"
import "./Market.css"
import Form from '../Form';
import Register from "../Register";
import Provider from "../Provider";
import Investor from "../Investor";
import {  useNavigate } from "react-router-dom";

const Market = () =>{
    const navigate = useNavigate();
   
    return(
        <>
            <div className="section-title">
                    <h1> Sign up to RenewConnect</h1>
                    <p>Join waste-to-energy marketplace and take part in green projects!</p>
             </div>
            <div className="section-container">
                
                 <div className="section">
                    <h2 className="section-header">GREEN<br/>FARMER</h2>
                    <h3>Sell various types<br/> of waste materials <br/>such as agricultural<br/> waste, food waste,<br/> plastic waste, wood <br/>chips, animal waste,<br/> textile waste,<br/> used tires</h3>
                    <p>Utilize proceeds to <br/>start green projects, <br/>like solar-powered <br/>irrigation</p>

                    <button  type = "button" className="btn btn-success" id="sign-btn" onClick={() => navigate('/Greenfarmer')}>Signup</button>
                </div>
                    
                <div className="section">
                     <h2 className="section-header">WASTE<br/>BUYER</h2>
                    <h3>Purchase waste<br/> materials from <br/>green farmers <br/>  Create green <br/>projects and <br/>collaborate<br/> with energy providers</h3>
                    <p>Provide<br/> renewable energy<br/> solutions</p>
                    <button type="button" className="btn btn-success" id="sign-btn" onClick={() =>navigate('/Wastebuyer')}>Signup</button>
                </div>
                <div className="section">
                    <h2 className="section-header">ENERGY<br/>PROVIDER</h2>
                    <h3>Provide renewable<br/> energy solutions<br/> for green projects<br/> Partner with <br/>waste buyers and <br/>contribute to <br/>sustainability efforts </h3>
                    <p>Partner with <br/>waste buyers<br/> and contribute to<br/> sustainability effort</p>
                    <button type="button" className="btn btn-success" id="sign-btn" onClick={() =>navigate('/Energyprovider')}>Signup</button>
                </div>
                <div className="section">
                    <h2 className="section-header">INVESTOR</h2>
                    <h3>Participate in<br/> crowdfunding<br/> for green projects<br/> Invest in initiatives <br/>that promote<br/> renewable energy <br/>and sustainability</h3>
                    <p>Invest in <br/>initiatives<br/> that promote</p>
                    <button type="button" className="btn btn-success" id="sign-btn" onClick={() =>navigate('/Investor')}>Signup</button>
                </div>
            </div>
        
        
        
        </>
    )
}
export default Market