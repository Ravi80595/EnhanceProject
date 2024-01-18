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
import { GiFloorHatch } from "react-icons/gi";
import { MdOutlineFoundation } from "react-icons/md";
import { SiLinuxfoundation } from "react-icons/si";
import { FaStairs } from "react-icons/fa6";
import { WiThermometerExterior } from "react-icons/wi";
import { VscActivateBreakpoints } from "react-icons/vsc";


const events = [
    {
      image:'https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public/styles/large/public/2023-09/orl-Transforming-Spaces-Into-Extraordinary-Destinations-562x382px-010923.jpg?itok=QUh-cb2r'
    },
    {
      image:'https://d3dy70zhjs5mi1.cloudfront.net/s3fs-public/styles/large/public/2023-09/orl-Transforming-Spaces-Into-Extraordinary-Destinations-562x382px-010923.jpg?itok=QUh-cb2r'
    },
  ]

const Enhance = () => {


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
     <Box w={'100%'} m={'auto'} background={'#f0f0f0'}>
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
        <Text fontSize={'40px'} fontWeight={'bold'}>Enhance Sharma Heights</Text>
        <Text>Where Modern Living Meets Safety and Sophistication </Text>
        </Box>
        <Box>
            {/* <Text fontSize={'32px'} color={'blue'}>From : 1cr only</Text> */}
        </Box>
    </Flex>
<Flex gap={'40px'} mt={'50px'}>
    <Box background={'white'} w={'65%'} border={'1px solid grey'} padding={'30px'} borderRadius={'10px'}>
    <Text fontSize={'26px'} fontWeight={'700'}>Property Description</Text>
        <Text mb={'40px'}>Property ID : 5269877</Text>
        <Flex gap={'40px'} mb={'5px'}>
            <Flex gap={'10px'}>
            <GiFloorHatch />
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
        <Text>Welcome to Enhance Sharma Heights, where blissful living meets exceptional convenience. Our residential cum commercial project offers 3 BHK flats with shops in Upper Bazar, North Market Road, Ranchi, Jharkhand. Discover the best of both worlds – exquisite aesthetics and an exemplary lifestyle.  </Text>
            <Text fontSize={'22px'} fontWeight={'700'} mt={'20px'}>Key Features</Text>
        <Box textAlign={'left'} w={'80%'} m={'auto'}>
        <Box mt={'17px'} justifyContent={'space-between'}>
            <Flex gap={'10px'} mt={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Centrally located in the Upper Bazar area of Ranchi.  </Text>
            </Flex>
        </Box>
        <Box mt={'10px'} justifyContent={'space-between'}>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>24/7 water supply, multiple shops, Wi-Fi connectivity, and mo </Text>
            </Flex>
            <Flex gap={'10px'} mt={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>True value for money – affordable 3 BHK flats available.   </Text>
            </Flex>
        </Box>
        <Box mt={'10px'} justifyContent={'space-between'}>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>All pipes of UPVC fiber and rust-proof. </Text>
            </Flex>
            <Flex gap={'10px'} mt={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Kirloskar/Mahindra/Ashok Leyland or equivalent.  </Text>
            </Flex>
        </Box>
        <Box mt={'10px'} justifyContent={'space-between'}>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>304 grade SS railing. </Text>
            </Flex>
            <Flex gap={'10px'} mt={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Concealed copper wiring with modular switches (branded).  </Text>
            </Flex>
        </Box>
       
        </Box>
        <Box>
            <Text fontSize={'22px'} fontWeight={'700'} mt={'50px'} mb={'20px'}>Safety Features:   </Text>
            {/* <Text>Type : Office</Text> */}
            <Box w={'80%'} m={'auto'}>
               <ul>
                <li>Fire safety equipment as suggested by authorities.  </li>
                <li>
                Soundproof generator for standby power supply (extra cost).  </li>
                <li>
                Membership options for gym and indoor games room (extra charge). 
                </li><li>
                CCTV cameras in common areas. 
                </li> 
               </ul>
            </Box>
     
        {/* <Flex justifyContent={'space-around'}>
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
        </Flex> */}
        </Box>
<Text fontSize={'22px'} fontWeight={'700'} mt={'70px'} textAlign={'center'}>Construction Details</Text>
        <Flex gap={'30px'} w={'80%'} m={'auto'} mt={'50px'} textAlign={'center'}>
            <Box w={'50%'}>
            <Flex justifyContent={'center'} fontSize={'36px'}>
            <MdOutlineFoundation />
                </Flex>
            <Text fontWeight={'bold'} mt='5px'>Foundation: </Text>
            <Text>RCC framed structure with fly ash brickwork.  </Text>
            </Box>
            <Box w={'50%'}>
            <Flex justifyContent={'center'} fontSize={'32px'}>
            <SiLinuxfoundation />
                </Flex>
            <Text mt='5px' fontWeight={'bold'}>Walls </Text>
            <Text>Internal walls finished with putty, exterior walls with weatherproof exterior paint.  </Text>
            </Box>
        </Flex>
        <Flex gap={'30px'} w={'80%'} m={'auto'} mt={'50px'} textAlign={'center'}>
            <Box w={'50%'}>
            <Flex justifyContent={'center'} fontSize={'32px'}>
            <FaStairs />
                </Flex>
            <Text fontWeight={'bold'} mt='5px'>Doors   </Text>
            <Text>Main door: Flush door (30mm), all doors with mortise lock.   </Text>
            </Box>
            <Box w={'50%'}>
            <Flex justifyContent={'center'} fontSize={'36px'}>
            <WiThermometerExterior />
                </Flex>
            <Text mt='5px' fontWeight={'bold'}>Windows </Text>
            <Text>Powder-coated aluminum windows. </Text>
            </Box>
        </Flex>



        <Text fontSize={'22px'} fontWeight={'700'} mt={'30px'}>Aminties</Text>
        <Box w={'80%'} m={'auto'} pt={'20px'}>
        <ul>
            <li>Vastu-based design.   </li>
                    <li>
                    Anti-termite treatment.                     </li>
                        <li>
                        CCTV total security system.                         </li>
                        <li>
                        Rainwater harvesting.  </li>
                        <li>
                        Gated community. </li>
                        <li>
                        Ample car parking space. </li>
                        <li>
                        High-speed modern elevator.  </li>
                        <li>
                        High-quality marble with skirting in common areas.  </li>
                        <li>
                        Standard type sanitary & drainage. </li>
                        <li>
                        Excellent quality vitrified tiles used. 
                        </li>

        </ul>
        </Box>
    </Box>
    <Box background={'white'} w={'30%'} border={'1px solid grey'} padding={'30px'} h={'500px'} borderRadius={'10px'}>
        <Image src='https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705449600&semt=ais'/>
        <Box mt={'20px'}>
        <hr />
        <Text mt={'15px'} fontWeight={'bold'}>Location</Text>
        <Text>TIKLITOLA ROAD, BEHIND RELIANCE FRESH
                NEAR SHAHDEO HOUSE BANQUET, </Text>
        </Box>
        <Text mt={'10px'}>Key Distance</Text>
        <Box w={'90%'} m={'auto'}>
        <ul>
            <li>Ranchi Railway Station: 4 km </li>
            <li>Ranchi Airport: 8 km </li>
            <li>Mahavir Chowk: 250 m </li>
            <li>Firayalal Chowk: 1 km </li>
        </ul>
        </Box>
    </Box>
    </Flex>
    </Box>
    </Box>
     
</Box>
    </>
  )
}

export default Enhance
