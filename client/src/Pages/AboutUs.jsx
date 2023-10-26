import { Box,Flex,Image,Text,} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import '../CSS/About.css'
import Goals from '../Components/Goals'
import Footer from '../Components/Footer'

const AboutUs = () => {


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
              <Text fontFamily={'"Poppins", sans-serif'} fontSize={['14px','14px','16px','16px']} lineHeight={'26px'} mt={['1rem','1rem','3rem','3rem']} mb={'1rem'}>Maurya Homes is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
              <Text fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields. Maurya Homes is driven by the next generation of Real Estate. We leave no stone unturned to deliver the best at the customers’ place.</Text>
          </Box>
        </Box>
        <Goals/>
        <Box paddingBottom={'50px'} textAlign={'center'}>
          <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Meet Our Team</Text>
          <Text fontFamily={'Lora'} fontSize={['14px','14px','18px','18px']}> Innovation, Excellence, Global Impact</Text>
        </Box>
        <Box w={['70%','70%','70%','70%']} m='auto' pb={'50px'}>
          <Text ml={['-50px','-50px','-50px','-50px']} fontSize={'26px'} pb={'20px'} fontFamily={'Playfair Display'}>Leadership</Text>
          <Flex justifyContent={'space-between'} direction={['column','column','row','row']} >
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
            <Box textAlign={'center'} mt={['30px','30px','5px','5px']}>
            <Flex justifyContent={'center'}>
              <Image w={'150px'} borderRadius='50%' src='https://elfsight.com/assets/team-showcase/business/1.jpg?v=1'/>
              </Flex>
              <Text fontFamily={'Lora'} mt='7px' fontWeight={'600'} fontSize={'18px'}>Michael Padvorac</Text>
              <Text fontFamily={'Lora'} mt='7px'>Founder & CEO</Text>
              <Text fontFamily={'Lora'} mt='7px' color={'blue'}>Founder@gmail.com</Text>
            </Box>
          </Flex>
        </Box>
<hr />
        <Box w={'70%'} m='auto' pb={'90px'} pt={'50px'}>
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
        </Box>

        <Footer/>
    </Box>
  )
}

export default AboutUs