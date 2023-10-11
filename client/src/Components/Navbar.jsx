import React, { useState, useEffect } from 'react';

function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    // Add an event listener to track scroll position and update the navbar background
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBackground('white');
    } else {
      setNavbarBackground('transparent');
    }
  };

  const navbarStyle = {
    backgroundColor: navbarBackground,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    transition: 'background-color 0.3s ease',
    zIndex: 1000,
  };

  return (
    <nav style={navbarStyle}>
       <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
