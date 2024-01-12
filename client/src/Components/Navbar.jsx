import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'
import MobNav from './MobNav';

function Navbar() {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const [navbarTextColor, setNavbarTextColor] = useState('white');

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
      setNavbarTextColor('#D4AF37');
    } else {
      setNavbarBackground('transparent');
      setNavbarTextColor('white');
    }
  };

  const navbarStyle = {
    backgroundColor: navbarBackground,
    color: navbarTextColor,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    transition: 'background-color 0.3s ease',
    zIndex: 1000,
  };

  return (
    <Box style={navbarStyle} className='Laptop-view' box-shadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' p={5} w='100vw' position='fixed' zIndex={9999} background='transparent'>
      <Box className='Laptop-view'>
      <Flex justifyContent='space-between' w={'90%'} m={'auto'} pt={'5px'} pb={'10px'}>
        <Box w={'50%'}>
          {/* <Image w={'170px'} h={'45px'} src={'https://mauryahomes.in/wp-content/themes/maurya/images/logo.png'} /> */}
          <Text fontSize={'26px'} fontFamily={'cursive'}>Enhance Projects</Text>
        </Box>
        <Flex fontSize={['15px', 20, 20, 20]} justifyContent='space-around' w={['70%', '30%', '30%', '60%']} pt={'5px'}>
          <Link to='/'>
          <Text fontFamily={'"Poppins", sans-serif'} color={navbarTextColor} className='Link_btns'>Home</Text>
          </Link>
          <Link to='/builder'>
          <Text color={navbarTextColor} className='Link_btns'>Builder</Text>
          </Link>
          <Link to='/contractors'>
          <Text color={navbarTextColor} className='Link_btns'>Contractors</Text>
          </Link>
          <Link to='/groups'>
          <Text color={navbarTextColor} className='Link_btns'>Groups</Text>
          </Link>
          <Link to='/about'>
          <Text color={navbarTextColor} className='Link_btns'>About Us</Text>
          </Link>
          {/* <Link to='/projects'>
            <Text color={navbarTextColor} className='Link_btns'>Projects</Text>
          </Link> */}
          {/* <Link to='/awards'>
            <Text color={navbarTextColor} className='Link_btns'>Awards</Text>
          </Link> */}
          <Link to='/contact'>
          <Text color={navbarTextColor} className='Link_btns'>Contact Us</Text>
          </Link>
        </Flex>
      </Flex>


      </Box>
      <div className='mobileDiv'>
            <MobNav/>
        </div>
    </Box>
  );
}

export default Navbar;
