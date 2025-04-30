import React from 'react'
import './Renewable.css';
import { turbine } from '../../assets';


const Renewable = () =>{
    return (
        <>
            <div  className="renewable_wrapper">
                <div className='col'>
                    <img src={turbine} alt="RenewConnect" className='img_wrap'/>
                </div>
                <div className='col'>
                    <h1 className='title' id='Renewable_title'> START YOUR RENEWABLE ENERGY FINANCING</h1>
                    <p className='' id='Renewable_sub'>By selling recycled waste materials in high demand by recyclers and green businesses

                    </p>
                    <button className='btn btn-success text-white' id='renew-btn'>Start a GreenProject Today</button>
                </div>
                
            </div>
        </>
    )
}
export default Renewable