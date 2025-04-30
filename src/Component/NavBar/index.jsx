import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { navTabs } from '../../data';
import { Link, useLocation } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import Logo from '../Logo';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [activeNavbar, setActiveNavbar] = React.useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 50) {
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  };

  useEffect(() => {
      if(location.pathname.startsWith('/auth')) {
        setShowNavbar(false);
      }else{
        setShowNavbar(true)
      }
  }, [location])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${activeNavbar ? 'active' : ''}`}>
      {open && (
        <div
          className='sidebar_overlay'
          onClick={() => setOpen(!open)}
        ></div>
      )}
      <Logo />
      <div className={`box nav_tabs ${open ? 'visible' : ''}`}>
        <div className='icon_container cancel_btn' onClick={() => setOpen(!open)}>
          <FaTimes />
        </div>
        {
          showNavbar && (
            <div className='nav_tabs'>
              {navTabs.map((tab, index) => (
                <Link
                  to={tab.id} 
                  className='tab'
                  onClick={() => setOpen(!open)}
                  key={index}
                >
                {tab.name}
              </Link>
              ))}
            </div>
          )
        }
      </div>
      <div className='box'>
        <Link to='/auth' className='btn contact_btn'>Get Started</Link>
        <div
          className='icon_container menu_btn'
          onClick={() => setOpen(!open)}
        >
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;