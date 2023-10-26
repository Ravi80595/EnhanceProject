import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Timeline from './Timeline';

const events = [
    {
      date: '2005',
      title: 'Company Founded',
      description: 'Our journey began in 2005 when a small team of visionaries joined forces to create our company. We shared a common goal and a shared belief that we could make a positive impact visionaries joined forces to create our company. We shared a common goal and a shared belief that we could make a positive impact',
    },
    {
      date: '2010',
      title: 'Expanding Operations',
      description: 'In 2010, we embarked on an exciting journey of expansion. We took bold steps to extend our reach and operations beyond borders. As we ventured into new territories, we encouvisionaries joined forces to create our company. We shared a common goal and a shared belief that we could make a positive impact',
    },
    {
      date: '2015',
      title: 'Achievements',
      description: 'The year 2015 marked a significant milestone for us as we achieved recognition and acclaim within our industry. We were honored to receive multiplevisionaries joined forces to create our company. We shared a common goal and a shared belief that we could make a positive impactvisionaries joined forces to create our company. We shared a common goal and a shared belief that we could make a positive impact',
    },
    {
      date: '2020',
      title: 'Recent Milestones',
      description: 'By 2020, we had reached a momentous milestone in our journey. With unwavering commitment and the trust of our valued customers, we proudly celebrated the achievement of serving visionaries joined forces to create our company. We shared a common goal and a shared belief that we could make a positive impact',
    },
    {
      date: '2025',
      title: 'New Office Opening',
      description: 'In 2025, we marked another exciting chapter in our story. We opened a new office in a strategic location, further expanding our global footprint. This expansion visionaries joined forces to create our company. We shared a common goal and a shared belief that we could make a positive impact',
    },
    {
      date: '2030',
      title: 'Product Launch',
      description: 'In 2030, we unveiled a groundbreaking product that revolutionized our industry. Our teams relentless pursuit of innovation led to the creation of a visionaries joined forces to create our company. We shared a common goal and a shared belief that we could make a positive impact',
    },
    {
      date: '2035',
      title: 'Global Expansion',
      description: 'By 2035, our commitment to growth and excellence had taken us to new heights. We expanded into international markets, establishing a presence in regions around the world.visionaries joined forces to create our company. We shared a common goal and a shared belief that we could make a positive impact',
    },
    {
      date: '2040',
      title: 'Company Merger',
      description: 'In 2040, we entered into an exciting merger with another major company. This strategic move was a testament to our vision and ambition, and it opened up new opportunities for both organizations.visionaries joined forces to create our company. We shared a common goal and a shared belief that we could make a positive impact '
    },
  ];

const HorizontalTimeline = () => {


  const eventBoxWidth = `500px`

return (
  <>
  <Box paddingBottom={'20px'} mt={'80px'} pt={'40px'} textAlign={'center'} background={'whitesmoke'}>
  <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Storyline</Text>
  <Text fontFamily={'Lora'} fontSize={['14px','14px','15px','18px']}> Innovation, Excellence, Global Impact</Text>
  </Box>
      {/* <Box overflowX={'scroll'} w={'80%'} m={'auto'}>
        <Flex>
          {events.map((event, index) => (
            <Box key={index} className="event" minW="300px" h={'auto'} padding={'10px'} border={'2px solid grey'} margin={'20px'}>
              <Box className="event-date">{event.date}</Box>
              <Box className="event-description">{event.title}</Box>
              <Text>{event.description}</Text>
            </Box>
          ))}
        </Flex>
      </Box> */}
      <Timeline/>
      </>
    );
  };
  
  export default HorizontalTimeline;

  
  
  
  
  
  