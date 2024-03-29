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
      image:'https://img.freepik.com/free-photo/chinese-city_1127-4129.jpg?t=st=1711541200~exp=1711544800~hmac=bf99f4b013a3896ddf95d80211267f071d72758827a64723031eb28bc7d2b9f8&w=996'
    },
    {
      image:'https://img.freepik.com/free-photo/chinese-city_1127-4129.jpg?t=st=1711541200~exp=1711544800~hmac=bf99f4b013a3896ddf95d80211267f071d72758827a64723031eb28bc7d2b9f8&w=996'
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
     <Box w={'100%'} m={'auto'} background={'#f0f0f0'}>
    <Box>
    <Slider {...settings} style={{width:"100%"}}>
                {events.map((event, index) => (
                    <>
                  <Flex>
                    <Image  w={'100%'} h='99vh' src={event.image}/>
                    </Flex>
                  </>
                ))}
    </Slider>
    <Box w={'80%'} m={'auto'}>
    <Flex mt={'40px'} justifyContent={'space-between'}>
        <Box>
        <Text fontSize={['26px','26px','40px','40px']} fontWeight={'bold'} fontFamily={'Playfair Display'}>Signatures Homes</Text>
        <Text>Discover Serenity at Signature Homes</Text>
        </Box>
        <Box>
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
        <Text>Welcome to our tranquil residential enclave, offering a pollution-free environment for a serene lifestyle. Our earthquake-resistant structure ensures safety, while wide roads and ample visitor parking enhance convenience. Embrace the Vastu-compliant design and enjoy the benefits of available loan/EMI facilities.  </Text>
            <Text fontSize={'22px'} fontWeight={'700'} mt={'20px'}>Key Features</Text>
        <Box textAlign={'left'} w={'80%'} m={'auto'}>
        <Flex mt={'17px'} justifyContent={'space-between'} direction={['column','column','row','row']}>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Peaceful Residential Surrounding </Text>
            </Flex>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />

            <Text mt='-5px'>Pollution-Free Environment  </Text>
            </Flex>
        </Flex>
        <Flex mt={'10px'} justifyContent={'space-between'} direction={['column','column','row','row']}>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />

            <Text mt='-5px'>Earthquake Resistant Structure </Text>
            </Flex>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />

            <Text mt='-5px'>Ample Visitor’s Car Parking  </Text>
            </Flex>
        </Flex>
        <Flex mt={'10px'} justifyContent={'space-between'} direction={['column','column','row','row']}>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />

            <Text mt='-5px'>Vastu Compliant Building </Text>
            </Flex>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />

            <Text mt='-5px'>Loan/EMI Facility Available </Text>
            </Flex>
        </Flex>
        <Flex mt={'10px'} gap={'180px'} direction={['column','column','row','row']}>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Sufficient Water Supply </Text>
            </Flex>
            <Flex gap={'10px'}>
            <VscActivateBreakpoints />
            <Text mt='-5px'>Sufficient Open Area  </Text>
            </Flex>
        </Flex>
        </Box>
        <Box>
            <Text fontSize={'22px'} fontWeight={'700'} mt={'50px'} mb={'20px'}>Floor Plans</Text>
            {/* <Text>Type : Office</Text> */}
            <Box w={'80%'} m={'auto'}>
               <ul>
                <li>1st Floor Plan </li>
                <li>
                3BHK: BU Area 1113, SBA Area 1336, Carpet Area 864 </li>
                <li>
                2nd to 4th Floor Plan 
                </li><li>
                3BHK Options with varying BU, SBA, and Carpet Areas 
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
        <Flex gap={'30px'} w={'80%'} m={'auto'} mt={'50px'} textAlign={'center'} direction={['column','column','row','row']}>
            <Box>
            <Flex justifyContent={'center'} fontSize={'36px'}>
            <MdOutlineFoundation />
                </Flex>
            <Text fontWeight={'bold'} mt='5px'>Foundation: </Text>
            <Text>Isolated Footing with Pedestal, ISI Marked Iron Rod & Cement (M20 specification) </Text>
            </Box>
            <Box>
            <Flex justifyContent={'center'} fontSize={'32px'}>
            <SiLinuxfoundation />

                </Flex>
            <Text mt='5px' fontWeight={'bold'}>Super Structure: </Text>
            <Text>RCC Brickwork in CM (1:6), Earthquake Resistant Outer Wall 10”, Inner Walls 5” </Text>
            </Box>
        </Flex>
        <Flex gap={'30px'} w={'80%'} m={'auto'} mt={'50px'} textAlign={'center'} direction={['column','column','row','row']}>
            <Box>
            <Flex justifyContent={'center'} fontSize={'34px'}>
            <FaStairs />
                </Flex>
            <Text fontWeight={'bold'} mt='5px'>Roof/Beam/Stair:  </Text>
            <Text>RCC (1:2:4) 4 Inches, All M20 Specification  (M20 specification) </Text>
            </Box>
            <Box>
            <Flex justifyContent={'center'} fontSize={'36px'}>
            <WiThermometerExterior />

                </Flex>
            <Text mt='5px' fontWeight={'bold'}>Exterior Finish:  </Text>
            <Text>Acrylic Weatherproof Paint with Wall Putty  </Text>
            </Box>
        </Flex>



        <Text fontSize={'22px'} fontWeight={'700'} mt={'20px'}>Aminties</Text>
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
        <Text>Gandhi Nagar, Kanke Road Ranchi - 834008 </Text>
        </Box>
        <Text mt={'10px'}>Key Distance</Text>
        <Box w={'90%'} m={'auto'}>
        <ul>
            <li>Ranchi Railway station <b>9.5km</b></li>
            <li>Kantatoli bus stand <b>8km</b></li>
            <li>Rock garden <b>1km</b></li>
            <li>RIMS <b>6KM</b></li>
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

export default ProjectDetails
