import React from 'react'
import '../CSS/Hero.css'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Featured from './Featured'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const events = [
  {
    image:'https://www.arabianbusiness.com/cloud/2021/09/15/CrJ37SgT-real-estate.jpg'
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
    autoPlay:true
    // nextArrow: <NextArrow />,
    //   prevArrow: <PrevArrow />,
};


return (
    <div className="background-video">
    <video autoPlay loop muted>
      <source src="https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public/2023-07/Orl%20Homepage%20Banner%20250723-1.m4v.mp4" type="video/mp4" />
    </video>
    <Box paddingBottom={'50px'}>
            <Flex w={'80%'} m={'auto'} mt={['30px','30px','90px','90px']} justifyContent={'space-between'} direction={['column','column','column','row']}>
              <Box w={['99%','99%','40%','40%']} m={'auto'} textAlign={'justify'}>
              <Text mb={'15px'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> About Us</Text>
                <Text fontSize={['15px','15px','20px','18px']}>Enhance Projects is a market leader in integrated infrastructures and construction, continually offering effective solutions to construction challenges. Our dedication goes from project initiation to full operation, providing dependability at all times.    </Text>
              <Text fontWeight={'400'}  fontSize={['15px','15px','20px','18px']} lineHeight={'26px'} mt={'10px'}>We offer the twin benefit of local presence and vast geographical reach through strategically positioned offices. A team of highly qualified individuals from several industries oversees each project.     <br/> Enhance Projects, the forerunner of the new generation of real estate, pays close attention to every detail in order to provide exceptional service to our consumers.  </Text>
              </Box>
              <Slider {...settings} style={{width:"45%"}}>
                {events.map((event, index) => (
                  <>
                  <Flex mt={'50px'}>
                    <Image borderRadius={'10px'} src={event.image}/>
                    </Flex>
                  </>
                ))}
              </Slider>
             
            </Flex>
          </Box>
  <div className='featured-section'>
  <Featured/>
  </div>
  </div>
  )
}

export default Hero