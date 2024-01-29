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

const Arovar = () => {


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
        <Text fontSize={['26px','26px','40px','40px']} fontWeight={'bold'}>Arover Niketen</Text>
        <Text>Where Modern Living Meets Safety and Sophistication </Text>
        </Box>
        <Box>
            {/* <Text fontSize={'32px'} color={'blue'}>From : 1cr only</Text> */}
        </Box>
    </Flex>
<Flex gap={'40px'} mt={'50px'} direction={['column','column','row','row']}>
    <Box background={'white'} w={['99%','99%','65%','65%']} border={'1px solid grey'} padding={'30px'} borderRadius={'10px'}>
    <Text fontSize={'26px'} fontWeight={'700'}>Property Description</Text>
        <Text mb={'40px'}>Property ID : 5269877</Text>
        <Flex gap={['20px','40px','40px','40px']} mb={'5px'}>
            <Flex gap={'10px'} direction={['column','column','row','row']}>
            <GiFloorHatch />
            <Text mt='-5px'> 3 Beds</Text>
            </Flex>
            <Flex gap={'10px'} direction={['column','column','row','row']}>
            <LiaBathSolid />
            <Text mt='-5px'> 3 Baths</Text>
            </Flex>
             <Flex gap={'10px'} direction={['column','column','row','row']}>
             <FaChartArea />
            <Text mt='-5px'>200sqft</Text>
            </Flex>
             <Flex gap={'10px'} direction={['column','column','row','row']}>
             <GiMushroomsCluster />
            <Text mt='-5px'>8 Rooms</Text>
            </Flex>
        </Flex>
        <hr />
        <Text fontSize={'26px'} fontWeight={'700'} mt={'20px'} mb={'30px'}>Description</Text>
        <Text>Welcome to Arovar Niketan, where modern living meets safety and sophistication. Our residences are built with an earthquake-resistant RCC structure, ensuring compliance with seismic zone III standards.   </Text>
            <Text fontSize={'22px'} fontWeight={'700'} mt={'20px'}>Key Features</Text>
        <Box textAlign={'left'} w={'80%'} m={'auto'}>
        <Box mt={'17px'} justifyContent={'space-between'}>
            <Flex gap={'10px'}>
             <MdOutlineFoundation />
            <Text mt='-5px'>Earthquake-resistant RCC structure </Text>
            </Flex>
            <Flex gap={'10px'} mt={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Internal POP and classical exterior finished in acrylic brand.  </Text>
            </Flex>
        </Box>
        <Box mt={'10px'} justifyContent={'space-between'}>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Vitrified tiles in Drawing/Dining/Bedrooms.  </Text>
            </Flex>
            <Flex gap={'10px'} mt={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Marble flooring in common areas of the building.  </Text>
            </Flex>
        </Box>
        <Box mt={'10px'} justifyContent={'space-between'}>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Granite marble on the raised cooking platform.  </Text>
            </Flex>
            <Flex gap={'10px'} mt={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Anti-skid tiles for flooring.  </Text>
            </Flex>
        </Box>
        <Box mt={'10px'} justifyContent={'space-between'}>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Powder-coated aluminum sliding windows</Text>
            </Flex>
            <Flex gap={'10px'} mt={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>All doors framed with WPC/Sal wood.  </Text>
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
            <Text>Isolated Footing with Pedestal, ISI Marked Iron Rod & Cement (M20 specification) </Text>
            </Box>
            <Box w={'50%'}>
            <Flex justifyContent={'center'} fontSize={'32px'}>
            <SiLinuxfoundation />
                </Flex>
            <Text mt='5px' fontWeight={'bold'}>Safety  </Text>
            <Text>Fire safety equipment as suggested by authorities. </Text>
            </Box>
        </Flex>
        <Flex gap={'30px'} w={'80%'} m={'auto'} mt={'50px'} textAlign={'center'}>
            <Box w={'50%'}>
            <Flex justifyContent={'center'} fontSize={'32px'}>
            <FaStairs />
                </Flex>
            <Text fontWeight={'bold'} mt='5px'>Common Facilities:    </Text>
            <Text>Solar panels on the roof for common area lighting.  </Text>
            </Box>
            <Box w={'50%'}>
            <Flex justifyContent={'center'} fontSize={'36px'}>
            <WiThermometerExterior />
                </Flex>
            <Text mt='5px' fontWeight={'bold'}>Super Structure: </Text>
            <Text>RCC Brickwork in CM (1:6), Earthquake Resistant Outer Wall 10”</Text>
            </Box>
        </Flex>



        <Text fontSize={'22px'} fontWeight={'700'} mt={'30px'}>Aminties</Text>
        <Box w={'80%'} m={'auto'} pt={'20px'}>
        <ul>
            <li>24-Hour Water Supply from Own Deep Tube Well   </li>
                    <li>
                    ISI Wiring Modular Switches in All Flats                     </li>
                        <li>
                        Staircase/Lift with Stainless Steel Railing & Marble Finish Stair                         </li>
                        <li>
                        Flooring with Vitrified Tiles/Antiskid Tiles </li>
                        <li>
                        Smoothly Finished Walls & Ceiling with 1:4 Cement Plaster </li>
                        <li>
                        Bathrooms Fitted with Jaquar Commercial Make Sanitary Ware </li>
                        <li>
                        Flush Doors and Aluminium Windows </li>
                        <li>
                        6 Passenger's Lift with ISI Mark </li>
                        <li>
                        Soundless Generator for Power Backup </li>
                        <li>
                                        Excellent quality vitrified tiles used. 
                        </li>

        </ul>
        </Box>
    </Box>
    <Box background={'white'} w={['99%','99%','30%','30%']} border={'1px solid grey'} padding={'30px'} h={'500px'} borderRadius={'10px'}>
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
            <li>Located in developed resident area </li>
            <li>Limited power backup</li>
            <li>24 hrs water supply</li>
            <li>Garding in corridor</li>
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

export default Arovar
