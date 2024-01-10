import { Box,Flex,Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Timeline from './Timeline'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const PrevArrow = (props) => (
  <div className="custom-arrow custom-arrow-prev" onClick={props.onClick}>
    &lt;
  </div>
);

export const NextArrow = (props) => (
  <div className="custom-arrow custom-arrow-next" onClick={props.onClick}>
    &gt;
  </div>
);

const events = [
  {
    title: 'URVASHI HEIGHTS',
    description: 'Welcome to our tranquil residential enclave, offering a pollution-free environment for a serene lifestyle. Our earthquake-resistant structure ensures safety, while wide roads and ample visitor parking enhance convenience. Embrace the Vastu-compliant design and enjoy the benefits of available loan/EMI facilities.  ',
    image:'https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg'
  },
  {
    date: '2010',
    title: 'Expanding Operations',
    description: 'In 2010, we embarked on an exciting journey of expansion. We took bold steps to extend our reach and operations beyond borders. As we ventured into new territories, we encou',
    image:'https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg'
  },
  {
    date: '2015',
    title: 'Achievements',
    description: 'The year 2015 marked a significant milestone for us as we achieved recognition and acclaim within our industry. We were honored to receive multiple',
    image:'https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg'
  },
];

const Featured = () => {
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
  <>
    <Box pb={'40px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Featrued Projects</Text>
      <Text fontFamily={'Lora'} fontSize={['15px','15px','15px','18px']}>Pioneering lifestyles of tomorrow</Text>
      </Box>
      <Slider {...settings}>
          {events.map((event, index) => (
            <>
            <Box paddingBottom={'50px'}>
            <Flex direction={['column','column','row','row']}>
              <Flex>
                <Image src={event.image}/>
              </Flex>
              <Box w={['95%','95%','40%','40%']} m={'auto'} justifyContent={'justify'} textAlign={'justify'}>
                <Text textAlign='center' fontSize='26px'>{event.title}</Text>
                <Text mt={['10px','10px','0px','0px']}> {event.description}</Text>
              </Box>
            </Flex>
          </Box>
            </>
          ))}
        </Slider>
    
      </>
  )
}

export default Featured




      {/* <Box>
        <Image src='https://mauryahomes.in/wp-content/uploads/2022/03/journypic2.jpg'/>
      </Box>
        <Flex background={'white'} position={'absolute'} marginTop={'-260px'} w={'600px'} right={'0'} p={'20px'}>
          <Text>With a focus on excellence and a commitment to enhancing our clients' success, we leverage our expertise in various domains to provide high-impact services and products. About Us: At Enhance Pvt Ltd., we are driven by a passion for innovation and a customer-centric approach. Our mission is to bridge the gap between business challenges and technology solutions, offering tailor-made strategies that drive growth, efficiency, and sustainability. </Text>
        </Flex> */}