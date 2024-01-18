import React from 'react';
import { Chrono } from 'react-chrono';
import '../CSS/Hero.css';
import { Box } from '@chakra-ui/react';
import { color } from 'framer-motion';

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

const items = [
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle:
      'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west...',
  },
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle:
      'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west...',
  },{
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle:
      'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west...',
  },{
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle:
      'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west...',
  },{
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle:
      'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west...',
  },{
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle:
      'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west...',
  },{
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle:
      'Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west...',
  },
  // Add more items here
];

const Timeline = () => {

  const customTheme = {
    primary: 'gold', // Change this color to your desired timeline color
    secondary: 'white', // Change this color to your desired background color
    cardBgColor: 'whitesmoke', // Change this color to your desired card background color
    cardForeColor: 'red', // Change this color to your desired card text color
    cardBorderColor: 'red', // Change this color to your desired card border color
    cardShadowColor: 'red', // Change this color to your desired card shadow color
    lineColor: 'red', // Change this color to your desired line color
  };

return (
    <Box background={'whitesmoke'}>
    <Box p={[0,0,20,20]} background={'whitesmoke'} w={['95%','95%','80%','80%']} m={'auto'} className="timeline-container">
      <Chrono
        items={items}
        mode="HORIZONTAL" // Change mode to "HORIZONTAL"
        hideControls
        cardHeight={200} // Adjust card height as needed
        cardWidth={900} // Adjust card width as needed
        theme={customTheme}
         // Apply the custom card class
      />
    </Box>
    </Box>
  );
};

export default Timeline;
