import React from 'react'
import './Partners.css';

const Partners=() =>{
    return (
        <>
            
            <header className="partners-header">
                 <h1 >Meet Our Partners</h1>
                 <p className='partners-description'>
                    We are proud to say we have worked with the most amazing Partners. Together we make the diffrence
                </p>
            </header>
           
           
            <div className='divider'></div>

            <section className='partner-section'> 
                <h2 className='section-title'></h2>
                <div className='partner-grid'>
                {/* <PartnerItem name="" />
                <PartnerItem name="" />
                <PartnerItem name="" /> */}
                </div>
            </section>
            
        </>
        
    )
}
export default Partners