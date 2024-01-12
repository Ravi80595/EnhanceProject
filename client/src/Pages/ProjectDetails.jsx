import React from 'react'
import Navbar from '../Components/Navbar'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBed } from "react-icons/fa";
import { LiaBathSolid } from "react-icons/lia";
import { FaChartArea } from "react-icons/fa";
import { GiMushroomsCluster } from "react-icons/gi";


const events = [
    {
      image:'https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public/styles/large/public/2023-09/orl-Transforming-Spaces-Into-Extraordinary-Destinations-562x382px-010923.jpg?itok=QUh-cb2r'
    },
    {
      image:'https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public/styles/large/public/2023-09/orl-Transforming-Spaces-Into-Extraordinary-Destinations-562x382px-010923.jpg?itok=QUh-cb2r'
    },
  ]

const ProjectDetails = () => {


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
     <Navbar/>
     <Box w={'100%'} m={'auto'}>
    <Box>
    <Slider {...settings} style={{width:"100%"}}>
                {events.map((event, index) => (
                    <>
                  <Flex>
                    <Image w={'100%'} h='90vh' src={event.image}/>
                    </Flex>
                  </>
                ))}
    </Slider>
    <Box w={'80%'} m={'auto'}>
    <Flex mt={'40px'} justifyContent={'space-between'}>
        <Box>
        <Text fontSize={'40px'} fontWeight={'bold'}>URVASHI HEIGHTS</Text>
        <Text>Type : Offices</Text>
        </Box>
        <Box>
            <Text fontSize={'32px'} color={'blue'}>From : 1cr only</Text>
        </Box>
    </Flex>
    <Flex gap={'40px'} mt={'50px'}>
    <Box w={'65%'} border={'1px solid grey'} padding={'30px'}>
    <Text fontSize={'26px'} fontWeight={'700'}>Property Description</Text>
        <Text mb={'40px'}>Property ID : 5269877</Text>
        <Flex gap={'40px'} mb={'5px'}>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'> 3 Beds</Text>
            </Flex>
            <Flex gap={'10px'}>
            <LiaBathSolid />
            <Text mt='-5px'> 3 Baths</Text>
            </Flex>
             <Flex gap={'10px'}>
             <FaChartArea />
            <Text mt='-5px'>200sqft</Text>
            </Flex>
             <Flex gap={'10px'}>
             <GiMushroomsCluster />
            <Text mt='-5px'>8 Rooms</Text>
            </Flex>
        </Flex>
        <hr />
        <Text fontSize={'26px'} fontWeight={'700'} mt={'20px'} mb={'30px'}>Description</Text>
        <Text>The ideal starter set upon on 25 acres of flat country, the choice is yours. Only 15 Minutes from Toowoomba you can enjoy a comfortable semi – rural lifestyle with multiple living areas. <br /> <br />

        The spacious kitchen has ample storage space, an electric cooktop and oven. This solid brick home offers an open plan dining and living room that adjoins the carpeted formal lounge room, perfect for movie nights with family. The large deck is ideal for entertaining or just relaxing with a good book enjoying the breeze and the 25 acre outlook. <br /> <br />

        There are four generously-sized bedrooms that are bright and airy and all 3 bedrooms have built in robes and are central the modern family bathroom. The master bedroom has a walk in robe and its own ensuite. <br /> <br />

        Downstairs is a large rumpus/games room, which adjoins the oversized double car garage. Fully fenced and also a separate fenced house block, ample rainwater storage and a windmill perfect for stock water/garden irrigation. Don’t miss out on this fantastic opportunity! Call to arrange your inspection today! This home will be sold on or prior to Auction!</Text>
        <Box>
            <Text fontSize={'22px'} fontWeight={'700'} mt={'20px'}>Quick Infomation</Text>
            <Text>Type : Office</Text>
        <Flex justifyContent={'space-around'}>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
        </Flex>
        <Flex justifyContent={'space-around'}>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
        </Flex>
        <Flex justifyContent={'space-around'}>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
        </Flex>
        </Box>
        <Box>
            <Text fontSize={'22px'} fontWeight={'700'} mt={'20px'} mb={'30px'}>Quick Infomation</Text>
            <Text>Type : Office</Text>
        <Flex justifyContent={'space-around'}>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
        </Flex>
        <Flex justifyContent={'space-around'}>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
        </Flex>
        <Flex justifyContent={'space-around'}>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
            <Flex gap={'10px'}>
            <FaBed />
            <Text mt='-5px'>Beds : </Text>
            <Text fontWeight={'bold'}>2</Text>
            </Flex>
        </Flex>
        </Box>
        <Text fontSize={'22px'} fontWeight={'700'} mt={'20px'}>Key Features</Text>
        <Box w={'80%'} m={'auto'}>
        <ul>
            <li>Vastu-based design.  </li>
                    <li>
                Anti-termite treatment. 
                    </li>
                        <li>
                CCTV total security system. 
                        </li>
<li>
                Rainwater harvesting. 
</li>
<li>
                Gated community. 
</li>
<li>
                Ample car parking space. 
</li>
<li>
                High-speed modern elevator. 
</li>
<li>
                High-quality marble with skirting in common areas. 
</li>
<li>
                Standard type sanitary & drainage. 
</li>
<li>
                Excellent quality vitrified tiles used. 
</li>
<li>
                Proximity to schools, hospitals, banks, and ATMs. 
</li>
<li>
                24 hrs. generator backup. 
</li>
<li>
                24 hr. security. 
</li>
<li>
                Lightning arrester. 
</li>
<li>
                Sufficient open space.
</li>    
        </ul>
        </Box>
    </Box>
    <Box w={'30%'} border={'1px solid grey'} padding={'30px'}>

    </Box>
    </Flex>
    </Box>
    </Box>
     
</Box>
    </>
  )
}

export default ProjectDetails
