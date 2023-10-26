import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Groups = () => {



return (
    <>
    <Navbar/>
    <Box w={'100%'} mb={['10px','10px','70px','70px']} h={'100vh'}>
        <Image h={'90vh'} w={'100%'} src='https://resources.skillwork.com/hubfs/group%20of%20construction%20workers%20looking%20at%20plans.jpg'/>
    </Box>
    <Box paddingBottom={'80px'} mt={['10px','10px','70px','70px']}>
            <Flex w={'85%'} m={'auto'} mt={['10px','10px','90px','90px']} direction={['column-reverse','column-reverse','row','row']}>
              <Box w={['95%','95%','40%','40%']} m={'auto'} justifyContent={'justify'} textAlign={'justify'}>
              <Text mb={'15px'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> Enhance Groups</Text>
            {/* <Text paddingTop={'10px'} fontFamily={'Lora'}>A journey of creating more than 4 million sq.ft. and 1500+ happy customers</Text> */  }
                <Text fontSize={['14px','14px','16px','16px']}>Enhance projects is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
              <Text fontSize={['14px','14px','16px','16px']} fontFamily={'"Poppins", sans-serif'} lineHeight={'26px'} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields. Maurya Homes is driven by the next generation of Real Estate. We leave no stone unturned to deliver the best at the customers’ place.</Text>
              </Box>
              <Flex mt={['0px','0px','50px','50px']} justifyContent={'start'} w={['95%','95%','50%','50%']}>
                <Image borderRadius={'20px'} src={'https://media.istockphoto.com/id/1139968862/photo/barrier-under-construction.jpg?s=612x612&w=0&k=20&c=UdMTWQ5dIjW8PP4HXRkmd5TYdImu1cZpYPR-l9oXiwA='}/>
              </Flex>
            </Flex>
          </Box>


          
          <Box>
<Box paddingBottom={'50px'} textAlign={'center'} w='90%' m={'auto'} mt={['10px','10px','90px','90px']}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Collaborators</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box>

    <Flex justifyContent={'space-around'} w={'70%'} m={'auto'} gap={'40px'} textAlign={'center'} pb={'60px'} direction={['column','column','row','row']}>
            <Box>
                <Image borderRadius={'10px'} src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Hospital</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>
            <Box>
                <Image borderRadius={'10px'} src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Hospital</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image borderRadius={'10px'} src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Hospital</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image borderRadius={'10px'} src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Hospital</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>

</Flex>




          <Box background={'#fff4e6'} pb={'50px'} pt={'30px'}>  
          <Flex w={'85%'} m={'auto'} mb={'50px'} justifyContent={'center'}>
          {/* <Box pt={'30px'} w={'50%'} m={'auto'}>
                <Flex justifyContent={'space-around'} textAlign={'center'} mb={'20px'} >
                <Box w={'220px'} h={'250px'} background={'white'} border={'2px solid grey'} p={'20px'} borderRadius={'10px'} _hover={{borderRadius:'0px'}}>
                  <Flex justifyContent={'center'} mb={5}>
                <Image w={'90px'} src='https://www.prestigeconstructions.com/images/icons/excellence.png'/>
                  </Flex>
                <Text mt={'4px'} fontSize={'30px'} mb={5}>25+</Text>
                <Text>Years of Excellance</Text>
                </Box>
                <Box w={'220px'} h={'250px'} background={'white'} border={'2px solid grey'} p={'20px'} borderRadius={'10px'}>
                  <Flex justifyContent={'center'} mb={5}>
                <Image w={'90px'} src='https://www.prestigeconstructions.com/images/icons/excellence.png'/>
                  </Flex>
                <Text mt={'4px'} fontSize={'30px'} mb={5}>25+</Text>
                <Text>Years of Excellance</Text>
                </Box>
                </Flex>
                <Flex justifyContent={'space-around'} textAlign={'center'} mb={'20px'} >
                <Box w={'220px'} h={'250px'} background={'white'} border={'2px solid grey'} p={'20px'} borderRadius={'10px'}>
                  <Flex justifyContent={'center'} mb={5}>
                <Image w={'90px'} src='https://www.prestigeconstructions.com/images/icons/excellence.png'/>
                  </Flex>
                <Text mt={'4px'} fontSize={'30px'} mb={5}>25+</Text>
                <Text>Years of Excellance</Text>
                </Box>
                <Box w={'220px'} h={'250px'} background={'white'} border={'2px solid grey'} p={'20px'} borderRadius={'10px'}>
                  <Flex justifyContent={'center'} mb={5}>
                <Image w={'90px'} src='https://www.prestigeconstructions.com/images/icons/excellence.png'/>
                  </Flex>
                <Text mt={'4px'} fontSize={'30px'} mb={5}>25+</Text>
                <Text>Years of Excellance</Text>
                </Box>
                </Flex>
            </Box> */}
            <Box w={['95%','95%','70%','70%']} m={'auto'} mt={['10px','10px','30px','30px']}>
            <Box w={['95%','95%','70%','70%']} paddingBottom={'50px'} textAlign={'center'}>
             <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Real Estate developer in India</Text>
             <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
          </Box>
          <Text textAlign={'justify'} fontSize={['14px','14px','16px','16px']}>Enhance projects is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
              <Text textAlign={'justify'} fontSize={['14px','14px','16px','16px']} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields.</Text>
            </Box>
          </Flex>
          </Box>






<Box>
<Box paddingBottom={'50px'} textAlign={'center'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Projects</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box>
<Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} mb={'90px'} direction={['column','column','row','row']}>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>

</Flex>
<Box paddingBottom={'50px'} textAlign={'center'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>We Worked with</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
{/* </Box> */}
<Box w={['90%','90%','60%','60%']} m={'auto'} mb={'80px'}>
  <Image w={'100%'} src='https://i.pinimg.com/736x/8d/92/64/8d92641ff0c0e9e5f44907ea208c1707.jpg'/>
</Box>


{/* <Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={'38px'} lineHeight={'44px'} fontFamily={'Playfair Display'}>Road Infrastrcture</Text>
      <Text fontFamily={'Lora'}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box> */}
{/* <Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} mb={'90px'}>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Infrastrcture</Text>
            </Box>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Infrastrcture</Text>
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Infrastrcture</Text>
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Infrastrcture</Text>
            </Box>
</Flex> */}

         
    <Footer/>
    </>

  )
}

export default Groups