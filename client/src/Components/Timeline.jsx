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
    title: '1970',
    cardTitle: 'The Early Days',
    cardDetailedText:
      'Started as a hardware shop: Founded by grandfather, primarily serving local vendors, builders, and contractors      Weekly labor payment issue: Customer Jogi suggested shifting from credit to weekly payments to incentivize work.      Establishment of BSNL, CCL, and Kul India: Early involvement in major government projects laid the foundation for future growth.',
  },
  {
    title: '1970-2000',
    cardTitle: 'Expansion and Diversification',
    cardDetailedText:
      'Registered in various departments: Obtained necessary licenses and registrations to operate across multiple states. Completed numerous projects: Built telephone exchange towers, residential quarters, hospitals, schools, and other government projects.Branching out into private sector: As government construction slowed down, the company began taking on private contracts and self-development projects.',
  },{
    title: '2000-Present',
    cardTitle: 'Specialization and Growth',
    cardDetailedText:
      'Three distinct companies formed: Methods Incision (government contracts), Contract K Com (private contracts), and ESK Projects (self-development and private contracts). Purchased land and manufactured own materials: Increased control over quality and costs by acquiring land and managing the entire construction process. Current structure: The company now operates in three main areas: government contracts, private contracts, and self-development projects.',
  }
  ,
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
    cardWidth: 900, // Same as the cardWidth in Chrono
   cardHeight: 200, // Same as the cardHeight in Chrono
  };

return (
    <Box background={'whitesmoke'}>
    <Box background={'whitesmoke'} w={['95%','95%','80%','80%']} m={'auto'}>
      <Chrono
        items={items}
        mode="VERTICAL" // Change mode to "HORIZONTAL"
        hideControls
        cardHeight={150} // Adjust card height as needed
        cardWidth={900} // Adjust card width as needed
        theme={customTheme}
      />
    </Box>
    </Box>
  );
};

export default Timeline;
