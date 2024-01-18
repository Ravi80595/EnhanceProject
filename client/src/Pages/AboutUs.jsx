import { Box,Flex,Image,Text,} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import '../CSS/About.css'
import Goals from '../Components/Goals'
import Footer from '../Components/Footer'
import Gallery from '../Components/Gallery'

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
            <img src="https://mauryahomes.in/wp-content/themes/maurya/images/our-journy-banner.jpg" alt="Background Image" className="background-image" />
         </div>
         <Box background={'#FAEBD7'}>
          <Box w={['95%','95%','60%','60%']} pt={['30px','30px','70px','70px']} className='about-section'>
          <Text fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> About Enhance Project.com</Text>
              <Text fontFamily={'"Poppins", sans-serif'} fontSize={['14px','14px','16px','16px']} lineHeight={'26px'} mt={['1rem','1rem','3rem','3rem']} mb={'1rem'}>Enhance Projects is a market leader in integrated infrastructures and construction, continually offering effective solutions to construction challenges. Our dedication goes from project initiation to full operation, providing dependability at all times.   </Text>
              <Text fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>We offer the twin benefit of local presence and vast geographical reach through strategically positioned offices. A team of highly qualified individuals from several industries oversees each project. Enhance Projects, the forerunner of the new generation of real estate, pays close attention to every detail in order to provide exceptional service to our consumers. </Text>
          </Box>
        </Box>
        <Goals/>
        <Box paddingBottom={'50px'} textAlign={'center'}>
          <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Meet Our Team</Text>
          <Text fontFamily={'Lora'} fontSize={['14px','14px','18px','18px']}> Innovation, Excellence, Global Impact</Text>
        </Box>
        <Box w={['70%','70%','70%','70%']} m='auto' pb={'50px'}>
          {/* <Text ml={['-50px','-50px','-50px','-50px']} fontSize={'26px'} pb={'20px'} fontFamily={'Playfair Display'}>Leadership</Text> */}
          <Flex justifyContent={'space-between'} direction={['column','column','row','row']} >
            <Box textAlign={'center'} border={'1px solid gold'} p={'20px'} borderRadius={'5px'}>
              <Flex justifyContent={'center'}>
              <Image w={'150px'} src='https://elfsight.com/assets/team-showcase/business/1.jpg?v=1'/>
              </Flex>
              <Text fontFamily={'Lora'} mt='10px' fontWeight={'600'} fontSize={'18px'}>Michael Padvorac</Text>
              <Text fontFamily={'Lora'} mt='7px'>Founder & CEO</Text>
              <Text fontFamily={'Lora'} mt='7px' color={'blue'}>Founder@gmail.com</Text>
            </Box>
            <Box textAlign={'center'} border={'1px solid gold'} p={'20px'} borderRadius={'5px'}>
              <Flex justifyContent={'center'}>
              <Image w={'150px'} src='https://elfsight.com/assets/team-showcase/business/1.jpg?v=1'/>
              </Flex>
              <Text fontFamily={'Lora'} mt='10px' fontWeight={'600'} fontSize={'18px'}>Michael Padvorac</Text>
              <Text fontFamily={'Lora'} mt='7px'>Founder & CEO</Text>
              <Text fontFamily={'Lora'} mt='7px' color={'blue'}>Founder@gmail.com</Text>
            </Box>
            <Box textAlign={'center'} border={'1px solid gold'} p={'20px'} borderRadius={'5px'}>
              <Flex justifyContent={'center'}>
              <Image w={'150px'} src='https://elfsight.com/assets/team-showcase/business/1.jpg?v=1'/>
              </Flex>
              <Text fontFamily={'Lora'} mt='10px' fontWeight={'600'} fontSize={'18px'}>Michael Padvorac</Text>
              <Text fontFamily={'Lora'} mt='7px'>Founder & CEO</Text>
              <Text fontFamily={'Lora'} mt='7px' color={'blue'}>Founder@gmail.com</Text>
            </Box>
            <Box textAlign={'center'} border={'1px solid gold'} p={'20px'} borderRadius={'5px'}>
              <Flex justifyContent={'center'}>
              <Image w={'150px'} src='https://elfsight.com/assets/team-showcase/business/1.jpg?v=1'/>
              </Flex>
              <Text fontFamily={'Lora'} mt='10px' fontWeight={'600'} fontSize={'18px'}>Michael Padvorac</Text>
              <Text fontFamily={'Lora'} mt='7px'>Founder & CEO</Text>
              <Text fontFamily={'Lora'} mt='7px' color={'blue'}>Founder@gmail.com</Text>
            </Box>
          </Flex>
        </Box>


          {/* <Box>
            <Gallery images={imageUrls}/>
          </Box> */}


<hr />
        {/* <Box w={'70%'} m='auto' pb={'90px'} pt={'50px'}>
          <Text ml={'-50px'} fontSize={'26px'} pb={'20px'} fontFamily={'Playfair Display'}>Support</Text>
          <Flex justifyContent={'space-between'} direction={['column','column','row','row']}>
            <Box textAlign={'center'}>
            <Flex justifyContent={'center'}>
              <Image w={'150px'} borderRadius='50%' src='https://elfsight.com/assets/team-showcase/business/1.jpg?v=1'/>
              </Flex>
              <Text fontFamily={'Lora'} mt='7px' fontWeight={'600'} fontSize={'18px'}>Michael Padvorac</Text>
              <Text fontFamily={'Lora'} mt='7px'>Founder & CEO</Text>
              <Text fontFamily={'Lora'} mt='7px' color={'blue'}>Founder@gmail.com</Text>
            </Box>
            <Box textAlign={'center'} mt={['30px','30px','5px','5px']}>
            <Flex justifyContent={'center'}>
              <Image w={'150px'} borderRadius='50%' src='https://elfsight.com/assets/team-showcase/business/1.jpg?v=1'/>
              </Flex>
              <Text fontFamily={'Lora'} mt='7px' fontWeight={'600'} fontSize={'18px'}>Michael Padvorac</Text>
              <Text fontFamily={'Lora'} mt='7px'>Founder & CEO</Text>
              <Text fontFamily={'Lora'} mt='7px' color={'blue'}>Founder@gmail.com</Text>
            </Box>
            <Box textAlign='center' mt={['30px','30px','5px','5px']}>
            <Flex justifyContent={'center'}>
              <Image w={'150px'} borderRadius='50%' src='https://elfsight.com/assets/team-showcase/business/1.jpg?v=1'/>
              </Flex>
              <Text fontFamily={'Lora'} mt='7px' fontWeight={'600'} fontSize={'18px'}>Michael Padvorac</Text>
              <Text fontFamily={'Lora'} mt='7px'>Founder & CEO</Text>
              <Text fontFamily={'Lora'} mt='7px' color={'blue'}>Founder@gmail.com</Text>
            </Box>
          </Flex>
        </Box> */}

        <Footer/>
    </Box>
  )
}

export default AboutUs