import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './Timeline.css';
import '../CSS/Hero.css'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
// import React from 'react';

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
      date: '2005',
      title: 'Company Founded',
      description: 'Our journey began in 2005 when a small team of visionaries joined forces to create our company. We shared a common goal and a shared belief that we could make a positive impact ',
    },
    {
      date: '2010',
      title: 'Expanding Operations',
      description: 'In 2010, we embarked on an exciting journey of expansion. We took bold steps to extend our reach and operations beyond borders. As we ventured into new territories, we encou',
    },
    {
      date: '2015',
      title: 'Achievements',
      description: 'The year 2015 marked a significant milestone for us as we achieved recognition and acclaim within our industry. We were honored to receive multiple',
    },
    {
      date: '2020',
      title: 'Recent Milestones',
      description: 'By 2020, we had reached a momentous milestone in our journey. With unwavering commitment and the trust of our valued customers, we proudly celebrated the achievement of serving ',
    },
    {
      date: '2025',
      title: 'New Office Opening',
      description: 'In 2025, we marked another exciting chapter in our story. We opened a new office in a strategic location, further expanding our global footprint. This expansion ',
    },
    {
      date: '2030',
      title: 'Product Launch',
      description: 'In 2030, we unveiled a groundbreaking product that revolutionized our industry. Our teams relentless pursuit of innovation led to the creation of a ',
    },
    {
      date: '2035',
      title: 'Global Expansion',
      description: 'By 2035, our commitment to growth and excellence had taken us to new heights. We expanded into international markets, establishing a presence in regions around the world.',
    },
    {
      date: '2040',
      title: 'Company Merger',
      description: 'In 2040, we entered into an exciting merger with another major company. This strategic move was a testament to our vision and ambition, and it opened up new opportunities for both organizations. '
    },
  ];
  
  
  const Timeline = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
  
    return (
        <Box>
    {/* <Box h={'60px'}  mb={'30px'}>
        </Box> */}
    <Box paddingBottom={'50px'}backgroundColor={'#DAA520'} pt={'30px'} pb={'150px'}>
      <Text color={'#3D2B1F'} fontSize={'38px'} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Storyline</Text>
      <Text fontFamily={'Lora'}> Innovation, Excellence, Global Impact</Text>
      </Box>
      <div className="timeline">
        <Slider {...settings}>
          {events.map((event, index) => (
            <Box  key={index} className="timeline-event">
                {/* <Flex justifyContent={'center'}> */}
                    <Image w={'150px'} src='https://e7.pngegg.com/pngimages/261/952/png-clipart-yellow-logo-computer-icons-mission-statement-mission-miscellaneous-company.png'/>
                {/* </Flex> */}
              <div className="timeline-date">{event.date}</div>
              <div className="timeline-content">
                <Text textAlign={'left'} fontSize={'1.2rem'} fontWeight={'600'} fontFamily={'Great Vibes'}>{event.title}</Text>
                <Box w={'70%'}>
                <Text textAlign={'start'} fontFamily={'Lora'} fontSize={'1.1rem'}>{event.description}</Text>
                </Box>
              </div>
            </Box>
          ))}
        </Slider>
      </div>
      </Box>
    );
  };
  
  export default Timeline;
  