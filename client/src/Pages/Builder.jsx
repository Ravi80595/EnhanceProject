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
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Projects</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
    <Box w={'85%'} textAlign={'center'} fontFamily={'Lora'} fontSize={'18px'} m={'auto'}>
        <Flex justifyContent={'space-around'} direction={['column','column','row','row']}>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'} mb={['40px','40px','0px','0px']}>BENGLURU</Text>
            </Box>
            <Box>
                <Flex justifyContent={'space-between'} gap={'40px'}>
                <Box>
                <Image src='https://www.puravankara.com/img/Clermonthome.jfif'/>
                <Text mt={'4px'} mb={['20px','20px','0px','0px']} >BENGLURU</Text>
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
            <Flex w={'80%'} m={'auto'} mt={'90px'} direction={['column','column','row','row']}>
              <Box w={['95%','95%','40%','40%']} m={'auto'} justifyContent={'justify'} textAlign={'justify'}>
              <Text mb={'15px'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> Floor plan</Text>

                <Text fontSize={['14px','14px','16px','16px']}>Enhance projects is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
              <Text fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={['14px','14px','16px','16px']} lineHeight={'26px'} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields. Maurya Homes is driven by the next generation of Real Estate. We leave no stone unturned to deliver the best at the customers’ place.</Text>
              </Box>
              <Flex mt={'50px'} justifyContent={'start'} w={['95%','95%','50%','50%']}>
                <Image borderRadius={'20px'} src={'https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/05/17182126/floor-plan-1.jpg'}/>
              </Flex>
            </Flex>
          </Box>



    <Box background={'#fff4e6'} pb={'50px'} pt={'30px'}>  
          <Flex w={'85%'} m={'auto'} mb={'90px'} justifyContent={'center'} direction={['column','column','row','row']}>
          <Box pt={'30px'} w={['97%','97%','50%','50%']} m={'auto'}>
                <Flex justifyContent={'space-around'} textAlign={'center'} mb={'20px'} gap={'20px'}>
                <Box w={'220px'} h={['210px','210px','250px','250px']} background={'white'} border={'2px solid grey'} p={'20px'} borderRadius={'10px'}>
                  <Flex justifyContent={'center'} mb={5}>
                <Image w={['50px','50px','90px','90px']} src='https://www.prestigeconstructions.com/images/icons/excellence.png'/>
                  </Flex>
                <Text mt={'4px'} fontSize={'30px'} mb={5}>25+</Text>
                <Text>Years of Excellance</Text>
                </Box>
                <Box w={'220px'} h={['210px','210px','250px','250px']} background={'white'} border={'2px solid grey'} p={'20px'} borderRadius={'10px'}>
                  <Flex justifyContent={'center'} mb={5}>
                <Image w={['50px','50px','90px','90px']} src='https://www.prestigeconstructions.com/images/icons/excellence.png'/>
                  </Flex>
                <Text mt={'4px'} fontSize={'30px'} mb={5}>25+</Text>
                <Text>Years of Excellance</Text>
                </Box>
                </Flex>
                <Flex justifyContent={'space-around'} textAlign={'center'} mb={'20px'} gap={'20px'} >
                <Box w={'220px'} h={['210px','210px','250px','250px']} background={'white'} border={'2px solid grey'} p={'20px'} borderRadius={'10px'}>
                  <Flex justifyContent={'center'} mb={5}>
                <Image w={['50px','50px','90px','90px']} src='https://www.prestigeconstructions.com/images/icons/excellence.png'/>
                  </Flex>
                <Text mt={'4px'} fontSize={'30px'} mb={5}>25+</Text>
                <Text>Years of Excellance</Text>
                </Box>
                <Box w={'220px'} h={['210px','210px','250px','250px']} background={'white'} border={'2px solid grey'} p={'20px'} borderRadius={'10px'}>
                  <Flex justifyContent={'center'} mb={5}>
                <Image w={['50px','50px','90px','90px']} src='https://www.prestigeconstructions.com/images/icons/excellence.png'/>
                  </Flex>
                <Text mt={'4px'} fontSize={'30px'} mb={5}>25+</Text>
                <Text>Years of Excellance</Text>
                </Box>
                </Flex>
            </Box>
            <Box w={['95%','95%','40%','40%']} m={'auto'}>
            <Box paddingBottom={['10px','10px','50px','50px']} textAlign={'center'}>
             <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Real Estate developer in India</Text>
             <Text fontFamily={'Lora'}> Innovation, Excellence, Global Impact</Text>
          </Box>
          <Text textAlign={'center'}>Enhance projects is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
              <Text textAlign={'center'} fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields.</Text>
            </Box>
          </Flex>
          </Box>


<Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Homes</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box>
<Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} direction={['column','column','row','row']}>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box>

</Flex>


<Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Offices</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box>
<Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} direction={['column','column','row','row']}>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box>

</Flex>


<Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Rentals</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box>
<Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} mb={'90px'} direction={['column','column','row','row']}>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'4px'}>BENGLURU</Text>
            </Box>
</Flex>
         
    <Footer/>
    </>
  )
}

export default Builder