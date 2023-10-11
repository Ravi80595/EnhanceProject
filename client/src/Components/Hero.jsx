import React from 'react'
import '../CSS/Hero.css'
import { Box, Text } from '@chakra-ui/react'
import Featured from './Featured'

const Hero = () => {


return (
    <div className="background-video">
    <video autoPlay loop muted>
      <source src="https://mauryahomes.in/wp-content/uploads/2022/02/1.mp4" type="video/mp4" />
      {/* Add additional video sources for cross-browser compatibility */}
    </video>
      <Box background={'#FAEBD7'}>
    <div className='about-section'>
    <Text fontSize={'38px'} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> About Enhance Project.com</Text>
        <Text paddingTop={'10px'} fontFamily={'Lora'}>A journey of creating more than 4 million sq.ft. and 1500+ happy customers</Text>
        <Text fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'3rem'} mb={'1rem'}>Maurya Homes is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
        <Text fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields. Maurya Homes is driven by the next generation of Real Estate. We leave no stone unturned to deliver the best at the customers’ place.</Text>
  </div>
      </Box>
  <div className='featured-section'>
  <Featured/>
  </div>
  </div>
  )
}

export default Hero