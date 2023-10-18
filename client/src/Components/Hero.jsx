import React from 'react'
import '../CSS/Hero.css'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Featured from './Featured'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const events = [
  {
    image:'https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public/styles/large/public/2023-09/orl-Transforming-Spaces-Into-Extraordinary-Destinations-562x382px-010923.jpg?itok=QUh-cb2r'
  },
  {
    image:'https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public/styles/large/public/2023-09/orl-Transforming-Spaces-Into-Extraordinary-Destinations-562x382px-010923.jpg?itok=QUh-cb2r'
  },
]

const Hero = () => {


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    // nextArrow: <NextArrow />,
    //   prevArrow: <PrevArrow />,
};


return (
    <div className="background-video">
    <video autoPlay loop muted>
      <source src="https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public/2023-07/Orl%20Homepage%20Banner%20250723-1.m4v.mp4" type="video/mp4" />
      {/* Add additional video sources for cross-browser compatibility */}
    </video>
    <Box paddingBottom={'50px'}>
            <Flex w={'80%'} m={'auto'} mt={'90px'} justifyContent={'space-between'}>
              <Box w={'40%'} m={'auto'} textAlign={'justify'}>
              <Text mb={'15px'} fontSize={'38px'} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> About Us</Text>
            {/* <Text paddingTop={'10px'} fontFamily={'Lora'}>A journey of creating more than 4 million sq.ft. and 1500+ happy customers</Text> */}
                <Text>Enhance projects is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
              <Text fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields. Maurya Homes is driven by the next generation of Real Estate. We leave no stone unturned to deliver the best at the customers’ place.</Text>
              </Box>
              <Slider {...settings} style={{width:"45%"}}>
                {events.map((event, index) => (
                  <>
                  <Flex mt={'50px'}>
                    <Image borderRadius={'20px'} src={event.image}/>
                    </Flex>
                  </>
                ))}
              </Slider>
             
            </Flex>
          </Box>
      {/* <Box background={'#FAEBD7'}>
    <div className='about-section'>
    <Text fontSize={'38px'} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> About Enhance Project.com</Text>
        <Text paddingTop={'10px'} fontFamily={'Lora'}>A journey of creating more than 4 million sq.ft. and 1500+ happy customers</Text>
        <Text fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'3rem'} mb={'1rem'}>Maurya Homes is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
        <Text fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields. Maurya Homes is driven by the next generation of Real Estate. We leave no stone unturned to deliver the best at the customers’ place.</Text>
  </div>
      </Box> */}
  <div className='featured-section'>
  <Featured/>
  </div>
  </div>
  )
}

export default Hero