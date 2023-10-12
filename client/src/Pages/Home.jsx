import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Featured from '../Components/Featured'
import SubBrands from '../Components/SubBrands'

const Home = () => {



return (
   <Box>
    <Navbar/>
    <Hero/>
    <About/>
    <SubBrands/>
    {/* <Featured/> */}
   </Box>
  )
}

export default Home