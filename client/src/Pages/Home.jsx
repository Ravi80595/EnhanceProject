import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Featured from '../Components/Featured'

const Home = () => {



return (
   <Box>
    <Navbar/>
    <Hero/>
    <About/>
    {/* <Featured/> */}
   </Box>
  )
}

export default Home