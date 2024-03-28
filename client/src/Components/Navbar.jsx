import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'
import MobNav from './MobNav';
import Logo from '../Images/Logo.jpg'

function Navbar() {



  return (
    <>
    <Box className='Laptop-view' box-shadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' p={3} w='100vw' position='fixed' zIndex={9999} background='white'>
      {/* <Box className='Laptop-view'> */}
      <Flex justifyContent='space-between' w={'90%'} m={'auto'} pt={'5px'} pb={'5px'}>
        <Box w={'50%'}>
          <Image w={'170px'} h={'95px'} src={Logo} borderRadius={'10px'}/>
          {/* <Text fontSize={'26px'}>Enhance Projects</Text> */}
        </Box>
        <Flex fontSize={['15px', 20, 20, 20]} justifyContent='space-around' w={['70%', '30%', '30%', '60%']} pt={'5px'}>
          <Link to='/'>
          <Text fontFamily={'"Poppins", sans-serif'} color='#D4AF37' className='Link_btns'>Home</Text>
          </Link>
          <Link to='/about'>
          <Text color='#D4AF37' className='Link_btns'>About Us</Text>
          </Link>
          <Link to='/builder'>
          <Text color='#D4AF37' className='Link_btns'>Builder</Text>
          </Link>
          <Link to='/contractors'>
          <Text color='#D4AF37' className='Link_btns'>Contractors</Text>
          </Link>
          <Link to='/groups'>
          <Text color='#D4AF37' className='Link_btns'>Groups</Text>
          </Link>
          <Link to='/contact'>
          <Text color='#D4AF37' className='Link_btns'>Contact Us</Text>
          </Link>
        </Flex>
      </Flex>


      {/* </Box> */}
    </Box>
      <div className='mobileDiv'>
            <MobNav/>
        </div>
    </>
  );
}

export default Navbar;
