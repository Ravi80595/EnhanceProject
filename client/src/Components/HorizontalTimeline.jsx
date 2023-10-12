import { Text } from '@chakra-ui/react';
import React from 'react';

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

const HorizontalTimeline = () => {
    return (
      <div className="horizontal-timeline-container">
        <div className="horizontal-timeline">
          {events.map((event, index) => (
            <div key={index} className="event">
              <div className="event-date">{event.date}</div>
              <div className="event-description">{event.title}</div>
              <div>{event.description}</div>
            </div>
          ))}
        </div>
        <style>{`
          .horizontal-timeline-container {
            width: 100%;
            overflow-x: scroll;
          }
          .horizontal-timeline {
            display: flex;
            flex-direction: row;
            white-space: nowrap;
          }
          .event {
            width: 200px;
            padding: 10px;
            border: 1px solid #ccc;
            margin: 10px;
          }
          .event-date {
            font-weight: bold;
          }
        `}</style>
      </div>
    );
  };
  
  export default HorizontalTimeline;

  
  
  
  
  
  