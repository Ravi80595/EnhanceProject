import { Box,Button,Flex,Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Timeline from './Timeline'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';



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
    Features:['Peaceful Residential Surrounding',
      'Pollution-Free Environment' ,
      'Earthquake Resistant Structure' ,
      'Wide Roads & Ample Visitor’s Car Parking' ,
      'Vastu Compliant Building' ,
      'Loan/EMI Facility Available' ],
    image:'https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg'
  },
  {
    date: '2010',
    title: 'Arovar Niketan',
    description: 'Welcome to Arovar Niketan, where modern living meets safety and sophistication. Our residences are built with an earthquake-resistant RCC structure, ensuring compliance with seismic zone III standards.  ',
    Features:[
      'Vitrified tiles in Drawing/Dining/Bedrooms. ' ,
      'Marble flooring in common areas of the building' ,
      'Wide Roads & Ample Visitor’s Car Parking' ,
      'Peaceful Residential Surrounding',
      'Vastu Compliant Building' ,
      'Loan/EMI Facility Available' ],
    image:'https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg'
  },
  {
    date: '2015',
    title: 'Enhance Sharma Heights',
    description: 'Welcome to Enhance Sharma Heights, where blissful living meets exceptional convenience. Our residential cum commercial project offers 3 BHK flats with shops in Upper Bazar, North Market Road, Ranchi, Jharkhand. Discover the best of both worlds – exquisite aesthetics and an exemplary lifestyle.  ',
    Features:[
      'Centrally located in the Upper Bazar area of Ranchi. ' ,
      'Vastu Compliant Building' ,
      '24/7 water supply, multiple shops, Wi-Fi connectivity, and more. ' ,
      'True value for money – affordable 3 BHK flats available.  ' ,
      'Peaceful Residential Surrounding',
      'Loan/EMI Facility Available' ],
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

// const handleNavigate=(event)=>{

// }



return (
  <>
      <Box pb={'40px'}>
        <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Featured Projects</Text>
        <Text fontFamily={'Lora'} fontSize={['15px','15px','15px','18px']} pb={'40px'}>Pioneering lifestyles of tomorrow</Text>
      </Box>
      <Slider {...settings}>
        {events.map((event, index) => (
          <Box key={index} paddingBottom={'50px'}>
            <Flex direction={['column','column','row','row']}>
              <Flex>
                <Image w={'550px'} src={event.image}/>
              </Flex>
              <Box w={['95%','95%','40%','40%']} m={'auto'} justifyContent={'justify'} textAlign={'justify'}>
                <Text fontSize='26px' pb={'10px'} mt={'-20px'}>{event.title}</Text>
                <Text mt={['10px','10px','0px','0px']}>{event.description}</Text>
                {event.Features?.length > 0 && ( // Check if Features is defined and not an empty array
                  <>
                    <Text fontWeight="bold" mt={['10px','10px','0px','0px']} pt={'10px'} pb={'10px'}>Features:</Text>
                    <ul style={{marginLeft:'30px'}}>
                      {event.Features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
                {/* <Link to={`/projectDetails/${encodeURIComponent(event.title)}`} state={{ eventData: event }}> */}
                <Button mt={'25px'}>Know More</Button>
               {/* </Link> */}
            {/* <Button mt={'25px'} onClick={handleNavigate(event)}>Know More</Button> */}
              </Box>
            </Flex>
          </Box>
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