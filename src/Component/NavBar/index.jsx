 import React, { useState, useEffect } from 'react'
 import './Navbar.css'
 import {navTabs} from '../../data'
 import { Link } from 'react-router-dom'
 import { RiMenu3Fill } from 'react-icons/ri'
 import Logo from '../Logo'
import { FaTimes } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import AuthForm from '../Auth'

 const  Navbar = () => {
    const [hovered, setHovered] = useState(null)

    const [open,setOpen] = React.useState(false)
    const [activeNavbar, setActiveNavbar] = React.useState(false)
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
        if(currentScrollPos > 50){
            setActiveNavbar(true)
        }else{
            setActiveNavbar(false)
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () =>
        window.removeEventListener('scroll', handleScroll)
      },[]
    )
   return (
    <nav className={`navbar ${activeNavbar ? 'active' : ''}`}>
      {
        open ?
        (<div 
          className='sidebar_overlay' 
          onClick={() => setOpen(!open)}></div>)
        :""
      }
      <Logo/>
      <div className={`box nav_tabs ${open ? 'visible' : ''}`}>
        <div className='icon_container cancel_btn' onClick={() => setOpen(!open)}>
          <FaTimes/>
        </div>
        {
        navTabs.map((tab, index) => (
          <Link
            to={tab.id}
            className='tab'
            className='nav-Item'
            onMouseEnter={() => setHovered(tab.name)}
            onMouseLeave={() => setHovered(null)}
            activeClass='g-text'
            smooth={true}
            spy={true}
            offset={-70}
            onClick={() => setOpen(!open)}
            key={index}
            
            >
            {tab.name}
            {tab.dropdown && hovered === tab.name && (
              <div className='dropdown-cards'>
                  {tab.dropdown.map((item, idx) =>(
                    <div className='card' key={idx}>
                        <img src={item.image} alt={item.title}/>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div> 
                  ))}
              </div>
            )}
          </Link>
        ))
        }
      </div>
      <div className='box'>
        <Link to='/Login' className='btn contact_btn' id='box-btn'>Login</Link>
        <Link to ='/Getstarted' className='btn contact_btn' id='box-btn'>Get Started</Link>
        <div 
          className='icon_container menu_btn'
          onClick={() => setOpen(!open)}
        ><RiMenu3Fill/></div>
      </div>
    </nav>
   )
 }
 
 export default Navbar