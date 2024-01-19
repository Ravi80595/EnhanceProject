import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Builder = () => {



return (
    <>
    <Navbar/>
    <Box w={'100%'} mb={'70px'} h={'90vh'}>
        <Image h={'90vh'} w={'100%'} src='https://ammunition-live-assets.s3.amazonaws.com/LG/lgprobuilder/assets/img/hero-banner-1.jpg'/>
    </Box>
    <Box paddingBottom={'50px'} textAlign={'center'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Projects</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
    <Box w={'85%'} textAlign={'center'} fontFamily={'Lora'} fontSize={'18px'} m={'auto'} mt={'40px'}>
        <Flex justifyContent={'space-around'} direction={['column','column','row','row']}>
            <Box>
                <Image w={'550px'} h={'550px'} src='https://www.nbmcw.com/images/news/Real-Estate-Projects.webp'/>
                <Text mt={'4px'} mb={['40px','40px','0px','0px']}>URVASHI HEIGHTS</Text>
            </Box>
            <Box>
                <Flex justifyContent={'space-between'} gap={'40px'}>
                <Box>
                <Image w={'250px'} h={"250px"} src='https://img.freepik.com/free-photo/building_1127-2313.jpg?w=996&t=st=1705496649~exp=1705497249~hmac=7dfbd56aaae50da2442e3e9ee7dcfc06c63bc5efa2728752fd870e592049d4d8'/>
                <Text mt={'4px'} mb={['20px','20px','0px','0px']} >ENHANCE SHARMA</Text>
                </Box>
                <Box>
                <Image w={'250px'} h={"250px"} src='https://img.freepik.com/free-photo/modern-business-center_1127-3152.jpg?w=996&t=st=1705496758~exp=1705497358~hmac=dda9f30fdf139637d56294f5812da579de39f24b3185c277fc3fb04a6a9277e0'/>
                <Text>ENHANCE ENCLAVE</Text>
                </Box>
                </Flex>
                <Flex mt={"20px"} justifyContent={'space-between'} gap={'40px'} >
                <Box>
                <Image w={'250px'} h={"250px"} src='https://www.puravankara.com/img/Clermonthome.jfif'/>
                <Text mt={'4px'}>GARDENIA ENCLAVE</Text>
                </Box>
                <Box>
                <Image w={'250px'} h={"250px"} src='https://www.puravankara.com/img/Emerald%20Bayhome.jfif'/>
                <Text>AROVAR NIKETEN</Text>
                </Box>
                </Flex>
            </Box>
        </Flex>
    </Box>

<Box background={'#FAEBD7'} mt={'70px'} >
    <Flex w={['95%','95%','70%','70%']} m={'auto'} justifyContent={'space-around'} direction={['column','column','row','row']}>
      <Flex w={['95%','95%','60%','60%']} mt={'40px'} mb={'30px'}>
        <Image borderRadius={'10px'} w={'400px'} src='https://www.checkatrade.com/blog/wp-content/uploads/2021/07/Feature-builder-day-rate.jpg'/>
      </Flex>
          <Box w={['95%','95%','60%','60%']} pt={['30px','30px','70px','70px']} className='about-section'>
              <Text fontFamily={'"Poppins", sans-serif'} fontSize={['14px','14px','16px','16px']} lineHeight={'26px'} mt={['1rem','1rem','3rem','2rem']} mb={'1rem'}>At Enhance Projects, we understand that successful construction is more than just bricks and mortar; it's about crafting experiences and building legacies. Join us on a journey where innovation meets dependability, and where every project is a testament to our commitment to excellence in construction.  </Text>
          </Box>
        </Flex>
</Box>

    <Box paddingBottom={'80px'} mt={'70px'}>
            <Flex w={'80%'} m={'auto'} mt={'90px'} direction={['column','column','row','row']}>
              <Box w={['95%','95%','40%','40%']} m={'auto'} justifyContent={'justify'} textAlign={'justify'}>
              <Text mb={'15px'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> Floor plan</Text>

                <Text fontSize={['14px','14px','16px','16px']}>At Enhance Projects, we understand that the foundation of exceptional living or working spaces begins with thoughtful design. Our floor plans are a testament to innovation and functionality, offering a glimpse into the seamless integration of architectural expertise and user-centric design principles.</Text>
              <Text fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={['14px','14px','16px','16px']} lineHeight={'26px'} mt={'10px'}>Explore a variety of layouts tailored to suit diverse preferences and needs. From spacious residences to cutting-edge office spaces, our floor plans are a canvas for your imagination. Each design is crafted with precision, ensuring an optimal blend of aesthetics and practicality. </Text>
              </Box>
              <Flex mt={'50px'} justifyContent={'start'} w={['95%','95%','50%','40%']}>
                <Image borderRadius={'20px'} src={'https://www.genesisstudios.com/wp-content/uploads/2023/01/921499-Fairbrook-Communities-Flamingo-Bay-1.jpg'}/>
              </Flex>
            </Flex>
          </Box>




    {/* <Box background={'#fff4e6'} pb={'50px'} pt={'30px'}>  
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
          </Box> */}


<Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Homes</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box>
<Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} direction={['column','column','row','row']}>
            {/* <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?w=996&t=st=1705496906~exp=1705497506~hmac=c645b572d73d90d077acd6508e6f599634453b9c4bc478b2d55c46fd0121bbdc'/>
                <Text mt={'4px'}>Ranchi</Text>
            </Box> */}
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/premium-photo/model-modern-house_1003277-9599.jpg?w=1060'/>
                <Text mt={'4px'}>Jharkhand</Text>
            </Box>
            
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=996&t=st=1705497009~exp=1705497609~hmac=659add44ed9fb4fccea3ca903b48283520eac2cdc0686de9a1a58cde920ad674'/>
                <Text mt={'4px'}>Bihar</Text>
            </Box> 
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/charming-yellow-house-with-wooden-windows-green-grassy-garden_181624-8074.jpg?w=996&t=st=1705496995~exp=1705497595~hmac=d1a142a2d372b4617c2195aef565ec7a2e89e957eb15a85d4d5e69b00ec4dc77'/>
                <Text mt={'4px'}>Odisha</Text>
            </Box> 
            

</Flex>


<Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Offices</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box>
<Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} direction={['column','column','row','row']} mb={'120px'}>
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/modern-office-with-no-people-luxury-chair-generated-by-ai_188544-26092.jpg?t=st=1705497118~exp=1705500718~hmac=bc5fda50d8bfdb3f5343c04858dacc19431cd0c066b95b100a138f68043c27d9&w=1060'/>
                <Text mt={'4px'}>Odisha</Text>
            </Box>
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/premium-photo/modern-office-with-computer-equipment-empty-glass-window-generative-ai_188544-8750.jpg?w=1060'/>
                <Text mt={'4px'}>Ranchi</Text>
            </Box> 
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/managers-discussing-reports-with-boss-sitting-meeting-table-with-monitor-holding-documents-business-meeting-teamwork-concept_74855-11867.jpg?t=st=1705497131~exp=1705497731~hmac=bf6dd1707318dacd9aa6d208dc0f28ebd3e74d6ec6e6df014f88ee61d8c16cb8'/>
                <Text mt={'4px'}>Bihar</Text>
            </Box> 
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/serious-businessman-presenting-company-business-goals-colleagues_1163-4781.jpg'/>
                <Text mt={'4px'}>Jharkhand</Text>
            </Box>

</Flex>


{/* <Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Rentals</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box> */}


{/* <Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} mb={'90px'} direction={['column','column','row','row']}>
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
</Flex> */}
         
    <Footer/>
    </>
  )
}

export default Builder