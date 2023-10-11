import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import '../CSS/About.css'

const Contact = () => {



return (
    <Box>
    <Navbar/>
    <div className="image-box">
        <div className="gradient-overlay"></div>
        <img src="https://mauryahomes.in/wp-content/themes/maurya/images/our-journy-banner.jpg" alt="Background Image" className="background-image" />
     </div>
</Box>
  )
}

export default Contact