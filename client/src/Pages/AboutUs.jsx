import { Box,Flex,Image,Text,} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import '../CSS/About.css'
import Goals from '../Components/Goals'
import Footer from '../Components/Footer'
import Gallery from '../Components/Gallery'
import aboutHero from '../Images/abuoutHero.jpg'
import BOD1 from '../Images/BOD1.png'
import BOD2 from '../Images/BOD2.png'

const AboutUs = () => {



  const imageUrls = [
    'https://www.adanirealty.com/-/media/Project/Realty/Accolades/Property-Launch-campaign.jpg',
    'https://www.adanirealty.com/-/media/Project/Realty/Accolades/Property-Launch-campaign.jpg',
    'https://www.adanirealty.com/-/media/Project/Realty/Accolades/Property-Launch-campaign.jpg',
    'https://www.adanirealty.com/-/media/Project/Realty/Accolades/Property-Launch-campaign.jpg',
    'https://www.adanirealty.com/-/media/Project/Realty/Accolades/Property-Launch-campaign.jpg',
    'https://www.adanirealty.com/-/media/Project/Realty/Accolades/Property-Launch-campaign.jpg',
  ];

return (
    <Box>
        <Navbar/>
        <div className="image-box">
            <div></div>
            <img src={aboutHero} alt="Background Image" className="background-image" />
         </div>
         <Box background={'#FAEBD7'}>
          <Box w={['95%','95%','60%','60%']} pt={['30px','30px','70px','50px']} className='about-section'>
          {/* <Text fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> About Enhance Project.com</Text> */}
              <Text fontFamily={'"Poppins", sans-serif'} fontSize={['14px','14px','16px','16px']} lineHeight={'26px'} mt={['1rem','1rem','3rem','3rem']} mb={'1rem'}>Enhance Projects is a market leader in integrated infrastructures and construction, continually offering effective solutions to construction challenges. Our dedication goes from project initiation to full operation, providing dependability at all times.   </Text>
              <Text fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>We offer the twin benefit of local presence and vast geographical reach through strategically positioned offices. A team of highly qualified individuals from several industries oversees each project. Enhance Projects, the forerunner of the new generation of real estate, pays close attention to every detail in order to provide exceptional service to our consumers. </Text>
          </Box>
        </Box>
        <Goals/>
        <Box paddingBottom={'50px'} textAlign={'center'}>
          <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Meet Our leadership</Text>
          <Text fontFamily={'Lora'} fontSize={['14px','14px','18px','18px']}>Time is the key to success, and at Enhance, we prioritise time. </Text>
        </Box>
        {/* <Box w={['70%','70%','70%','70%']} m='auto' pb={'50px'}> */}
          <Flex justifyContent={'space-around'} direction={['column','column','row','row']} w={['90%','90%','90%','60%']} m={'auto'} gap={"20px"}>
            <Box textAlign={'center'} border={'1px solid gold'} p={'20px'} borderRadius={'5px'}>
              <Flex justifyContent={'center'}>
              <Image w={'250px'} src={BOD1}/>
              </Flex>
              <Text fontFamily={'Lora'} mt='10px' fontWeight={'600'} fontSize={'18px'}>Ankit Jain</Text>
              <Text fontFamily={'Lora'} mt='7px'>Director</Text>
            </Box>
            <Box textAlign={'center'} border={'1px solid gold'} p={'20px'} borderRadius={'5px'}>
              <Flex justifyContent={'center'}>
              <Image w={'250px'} src={BOD2}/>
              </Flex>
              <Text fontFamily={'Lora'} mt='10px' fontWeight={'600'} fontSize={'18px'}>Manish Jain</Text>
              <Text fontFamily={'Lora'} mt='7px'>Director</Text>
            </Box>
          </Flex>
        {/* </Box> */}


          <Box>
            <Gallery/>
          </Box>


<hr />

        <Footer/>
    </Box>
  )
}

export default AboutUs