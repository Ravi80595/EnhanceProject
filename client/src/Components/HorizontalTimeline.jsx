import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Timeline from './Timeline';

const events = [
    {
      date: '1970',
      title: 'The Early Days',
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
    }
  ];

const HorizontalTimeline = () => {


  const eventBoxWidth = `500px`

return (
  <>
  <Box paddingBottom={'20px'} mt={'80px'} pt={'40px'} textAlign={'center'} background={'whitesmoke'}>
  <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Chronicles of Progress </Text>
  <Text fontFamily={'Lora'} mb={'20px'} fontSize={['14px','14px','15px','18px']}>Shaping Futures, Leaving Legacies</Text>
  </Box>
      <Timeline/>
      </>
    );
  };
  
  export default HorizontalTimeline;

  
  
  
  
  
  