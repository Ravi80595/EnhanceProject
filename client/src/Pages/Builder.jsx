import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Builder = () => {



return (
    <>
    <Navbar/>
    <Box w={'100%'} mb={'70px'} h={'90vh'}>
        <Image h={'90vh'} w={'100%'} src='https://www.shapoorjipallonji.com//assets/Desktop/Projects/1440x490/qasr-al-alam-palace-2-1440x490.jpg'/>
    </Box>
    <Box paddingBottom={'50px'} textAlign={'center'}>
      <Text color={'#3D2B1F'} fontSize={'38px'} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Projects</Text>
      <Text fontFamily={'Lora'}> Innovation, Excellence, Global Impact</Text>
      </Box>
    <Box w={'85%'} textAlign={'center'} fontFamily={'Lora'} fontSize={'18px'} m={'auto'}>
        <Flex justifyContent={'space-around'}>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box>
            <Box>
                <Flex justifyContent={'space-between'} gap={'40px'}>
                <Box>
                <Image src='https://www.puravankara.com/img/Clermonthome.jfif'/>
                <Text mt={'4px'}>BENGLURU</Text>
                </Box>
                <Box>
                <Image src='https://www.puravankara.com/img/Emerald%20Bayhome.jfif'/>
                <Text>BENGLURU</Text>
                </Box>
                </Flex>
                <Flex justifyContent={'space-between'} gap={'40px'} >
                <Box>
                <Image src='https://www.puravankara.com/img/Clermonthome.jfif'/>
                <Text mt={'4px'}>BENGLURU</Text>
                </Box>
                <Box>
                <Image src='https://www.puravankara.com/img/Emerald%20Bayhome.jfif'/>
                <Text>BENGLURU</Text>
                </Box>
                </Flex>
            </Box>
        </Flex>
    </Box>
    <Box paddingBottom={'80px'} mt={'70px'}>
            <Flex w={'85%'} m={'auto'} mt={'90px'}>
              <Box w={'40%'} m={'auto'} justifyContent={'justify'} textAlign={'justify'}>
              <Text mb={'15px'} fontSize={'38px'} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> Floor plan</Text>
            {/* <Text paddingTop={'10px'} fontFamily={'Lora'}>A journey of creating more than 4 million sq.ft. and 1500+ happy customers</Text> */}
                <Text>Enhance projects is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
              <Text fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields. Maurya Homes is driven by the next generation of Real Estate. We leave no stone unturned to deliver the best at the customers’ place.</Text>
              </Box>
              <Flex mt={'50px'} justifyContent={'start'} w={'50%'}>
                <Image borderRadius={'20px'} src={'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/05/17182126/floor-plan-1.jpg'}/>
              </Flex>
            </Flex>
          </Box>
    <Footer/>
    </>
  )
}

export default Builder