import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Contractors = () => {



return (
    <>
    <Navbar/>
    <Box w={'100%'} mb={'70px'} h={'90vh'}>
        <Image h={'90vh'} w={'100%'} src='https://uploads-ssl.webflow.com/5ec51dfa9f4a9e20ed0c9f1d/6347cabe7c8d5e6a10c7634c_1.png'/>
    </Box>
    <Box paddingBottom={'50px'} textAlign={'center'} mb={'50px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Projects</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
    <Box w={'85%'} textAlign={'center'} fontFamily={'Lora'} fontSize={'18px'} m={'auto'}>
        <Flex justifyContent={'space-around'} direction={['column','column','row','row']}>
            <Box>
                <Image h={'550px'} w={'450px'} src='https://www.losangelescontractors.org/wp-content/uploads/2019/10/image12.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}  mb={['40px','40px','0px','0px']}>Hotels</Text>
            </Box>
            <Box>
                <Flex justifyContent={'space-between'} gap={'40px'}>
                <Box mb={['20px','20px','0px','0px']} >
                <Image w={'250px'} h={"250px"} borderRadius={'5px'} _hover={{borderRadius:'0px',transition:'2s'}} src='https://img.freepik.com/free-photo/modern-amphitheater-usa_1268-14358.jpg?w=996&t=st=1705497336~exp=1705497936~hmac=f6462822f7280505c6e5ae7db3e7790d145c6ae3608067273eff9108d472bd96'/>
                <Text mt={'14px'} mb={'7px'} fontWeight={'bold'} fontSize={'20px'}>Educational Institute</Text>
                </Box>
                <Box>
                <Image w={'250px'} h={"250px"} borderRadius={'5px'} _hover={{borderRadius:'0px',transition:'2s'}} src='https://img.freepik.com/free-photo/low-rise-building_1127-3272.jpg?w=996&t=st=1705497388~exp=1705497988~hmac=1563cef11aefa1f8848b069cfda6d69c28efdff124c6decf79ba7c243d07f7fe'/>
                <Text mt={'14px'} mb={'7px'} fontWeight={'bold'} fontSize={'20px'}>Educational Institute</Text>
                </Box>
                </Flex>
                <Flex justifyContent={'space-between'} gap={'40px'} mt={'20px'}>
                <Box>
                <Image w={'250px'} h={"250px"} borderRadius={'5px'} _hover={{borderRadius:'0px',transition:'2s'}} src='https://www.puravankara.com/img/Clermonthome.jfif'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Hospital</Text>
                </Box>
                <Box>
                <Image w={'250px'} h={"250px"} borderRadius={'5px'} _hover={{borderRadius:'0px',transition:'2s'}} src='https://www.puravankara.com/img/Emerald%20Bayhome.jfif'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Hospital</Text>
                </Box>
                </Flex>
            </Box>
        </Flex>
    </Box>

<Box background={'#FAEBD7'} mt={'70px'} >
<Flex w={'70%'} m={'auto'} justifyContent={'space-around'} >
  <Flex w={'50%'} mt={'40px'} mb={'30px'}>
    <Image borderRadius={'10px'} w={'400px'} src='https://bridgemastersinc.com/wp-content/uploads/2017/12/contractor-1000x500.jpg'/>
  </Flex>
      <Box w={['95%','95%','60%','60%']} pt={['30px','30px','70px','70px']} className='about-section'>
          <Text fontFamily={'"Poppins", sans-serif'} fontSize={['14px','14px','16px','16px']} lineHeight={'26px'} mt={['1rem','1rem','3rem','2rem']} mb={'1rem'}>At Enhance Projects, we understand that successful construction is more than just bricks and mortar; it's about crafting experiences and building legacies. Join us on a journey where innovation meets dependability, and where every project is a testament to our commitment to excellence in construction.  </Text>
      </Box>
    </Flex>
</Box>



    <Box paddingBottom={'80px'} mt={'70px'}>
            <Flex w={'85%'} m={'auto'} mt={'90px'} direction={['column','column','row','row']}>
              <Box w={['95%','95%','40%','40%']} m={'auto'} justifyContent={'justify'} textAlign={'justify'}>
              <Text mb={'15px'}  fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> Floor plan</Text>
            {/* <Text paddingTop={'10px'} fontFamily={'Lora'}>A journey of creating more than 4 million sq.ft. and 1500+ happy customers</Text> */}
                <Text>Enhance projects is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
              <Text fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields. Maurya Homes is driven by the next generation of Real Estate. We leave no stone unturned to deliver the best at the customers’ place.</Text>
              </Box>
              <Flex mt={'50px'} justifyContent={'start'} w={['95%','95%','50%','50%']}>
                <Image borderRadius={'20px'} src={'https://i.pinimg.com/736x/c8/9f/87/c89f87040eabbb8b778b86dbf808253c.jpg'}/>
              </Flex>
            </Flex>
          </Box>
          {/* <Box background={'#fff4e6'} pb={'50px'} pt={'30px'}>  
          <Flex w={'85%'} m={'auto'} mb={'90px'} justifyContent={'center'} direction={['column','column','row','row']}>
          <Box pt={'30px'} w={['97%','97%','50%','50%']} m={'auto'}>
                <Flex justifyContent={'space-around'} textAlign={'center'} mb={'20px'}  gap={'20px'}>
                <Box w={'220px'} h={['210px','210px','250px','250px']} background={'white'} border={'2px solid grey'} p={'20px'} borderRadius={'10px'} _hover={{borderRadius:'0px'}}>
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
                <Flex justifyContent={'space-around'} textAlign={'center'} mb={'20px'}  gap={'20px'}>
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
            <Box paddingBottom={'50px'} textAlign={'center'}>
             <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Real Estate developer in India</Text>
             <Text fontFamily={'Lora'}> Innovation, Excellence, Global Impact</Text>
          </Box>
          <Text textAlign={'center'}>Enhance projects is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
              <Text textAlign={'center'} fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields.</Text>
            </Box>
          </Flex>
          </Box> */}



          {/* <Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Hospitality</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box> */}
{/* <Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} direction={['column','column','row','row']}>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Hospital</Text>
            </Box>
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Hospital</Text>
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Hospital</Text>
            </Box> 
            <Box>
                <Image src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Hospital</Text>
            </Box>

</Flex> */}


<Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Educational Institutes</Text>
      <Text fontFamily={'Lora'}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box>
<Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} direction={['column','column','row','row']}>
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/low-rise-building_1127-3268.jpg?w=996&t=st=1705497437~exp=1705498037~hmac=11ed679333bd027182d10e1eb78224d8d32b87ebe5256190ff739522a3f9d80c'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/premium-photo/modern-apartment-buildings-green-residential-area-city_1127-4267.jpg?w=996'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/water-dwelling_1127-3260.jpg?w=996&t=st=1705497493~exp=1705498093~hmac=c6fa972c761e554ec9bcb2d0c714a0643ae8b074651ef778f4f411632f569908'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image w={'500px'} h={'250px'}  src='https://img.freepik.com/free-photo/passageway_1127-3255.jpg?w=996&t=st=1705497517~exp=1705498117~hmac=c7152271cb4032c9757171a577d8e50ff2ad1d9149b188655fdc89c37e02b96c'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>

</Flex>


<Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Road Infrastrcture</Text>
      <Text fontFamily={'Lora'}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box>
<Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} mb={'90px'} direction={['column','column','row','row']}>
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/road-city-view_1417-1474.jpg?w=996&t=st=1705497576~exp=1705498176~hmac=1d5c89e0b55a1fe1e5fb86fadcd8d0d05e547f3d5b59c50b0d36f05d42e903f4'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Infrastrcture</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/viaduct-city_1127-3273.jpg?w=996&t=st=1705497611~exp=1705498211~hmac=56f7c7df8cb591c1e6cafb066fb1b2b1c7b10edc05bbb3824a4c99f271c1a75c'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Infrastrcture</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/empty-curved-road_107420-95914.jpg?w=996&t=st=1705497625~exp=1705498225~hmac=5cda44365c331838743f483446d4563999497180864712ef87a0e439ebbc78bf'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Infrastrcture</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/premium-photo/modern-iconic-bridge-boom-marina-banyuwangi-east-java-indonesia-eyeemnewhere_1048944-12033238.jpg?w=360'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Infrastrcture</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text>/ */}
            </Box>
</Flex>

         
    <Footer/>
    </>


  )
}

export default Contractors