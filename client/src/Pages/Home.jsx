import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Featured from '../Components/Featured'
import SubBrands from '../Components/SubBrands'
import Footer from '../Components/Footer'
import Timeline from '../Components/Timeline'
import HorizontalTimeline from '../Components/HorizontalTimeline'

const Home = () => {



return (
   <Box>
    <Navbar/>
    <Hero/>
    <About/>
    <HorizontalTimeline/>
    <SubBrands/>
    {/* <Featured/> */}
    
    {/* <Timeline/> */}
    <Footer/>
   </Box>
  )
}

export default Home