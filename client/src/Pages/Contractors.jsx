import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import contractorHero from '../Images/contractorHero.jpg'
import jsPDF from 'jspdf';
import Urvashi from '../Images/Urvashi.png';
import Arover from '../Images/Arovar.png';
import EnhanceSharma from '../Images/EnhanceSharma.png';
import EnhanceEnclave from '../Images/EnhanceEncalve.png';
import Gardenia from '../Images/Gardenia.png';

const Contractors = () => {


  const handleDownloadPDF = (imageURL, imageName) => {
    const doc = new jsPDF();
    doc.addImage(imageURL, 'PNG', 10, 10, 100, 100); // Embed the image in the PDF
    doc.save(`${imageName}.pdf`); // Save the PDF with the URL name
  };


return (
    <>
    <Navbar/>
    <Box w={'100%'} mb={'70px'} h={'90vh'}>
        <Image h={'90vh'} w={'100%'} src={contractorHero}/>
    </Box>
    <Box paddingBottom={'50px'} textAlign={'center'} mb={'50px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Projects</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}>Seamless Solutions, Trusted Contractors</Text>
      </Box>
    <Box w={'85%'} textAlign={'center'} fontFamily={'Lora'} fontSize={'18px'} m={'auto'}>
        <Flex justifyContent={'space-around'} direction={['column','column','row','row']}>
            <Box>
                <Image h={'550px'} w={'450px'} src='https://archello.s3.eu-central-1.amazonaws.com/images/2018/08/24/12-story-Commercial-Office-Building-1.1535133699.4952.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}  mb={['40px','40px','0px','0px']}>Commercials Buildings</Text>
            </Box>
            <Box>
                <Flex justifyContent={'space-between'} gap={'40px'}>
                <Box mb={['20px','20px','0px','0px']} >
                <Image w={'250px'} h={"250px"} borderRadius={'5px'} _hover={{borderRadius:'0px',transition:'2s'}} src='https://img.freepik.com/free-photo/modern-amphitheater-usa_1268-14358.jpg?w=996&t=st=1705497336~exp=1705497936~hmac=f6462822f7280505c6e5ae7db3e7790d145c6ae3608067273eff9108d472bd96'/>
                <Text mt={'14px'} mb={'7px'} fontWeight={'bold'} fontSize={'20px'}>Residential cum commercial</Text>
                </Box>
                <Box>
                <Image w={'250px'} h={"250px"} borderRadius={'5px'} _hover={{borderRadius:'0px',transition:'2s'}} src='https://img.freepik.com/free-photo/low-rise-building_1127-3272.jpg?w=996&t=st=1705497388~exp=1705497988~hmac=1563cef11aefa1f8848b069cfda6d69c28efdff124c6decf79ba7c243d07f7fe'/>
                <Text mt={'14px'} mb={'7px'} fontWeight={'bold'} fontSize={'20px'}>Educational Institute</Text>
                </Box>
                </Flex>
                <Flex justifyContent={'space-between'} gap={'40px'} mt={'20px'}>
                <Box>
                <Image w={'250px'} h={"250px"} borderRadius={'5px'} _hover={{borderRadius:'0px',transition:'2s'}} src='https://www.puravankara.com/img/Clermonthome.jfif'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Residential </Text>
                </Box>
                <Box>
                <Image w={'250px'} h={"250px"} borderRadius={'5px'} _hover={{borderRadius:'0px',transition:'2s'}} src='https://www.puravankara.com/img/Emerald%20Bayhome.jfif'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Healthcare</Text>
                </Box>
                </Flex>
            </Box>
        </Flex>
    </Box>

<Box background={'#FAEBD7'} mt={'70px'} >
<Flex w={['95%','95%','70%','70%']} m={'auto'} justifyContent={'space-around'} direction={['column','column','row','row']} >
  <Flex w={['95%','95%','50%','50%']} mt={'40px'} mb={['10px','10px','30px','30px']}>
    <Image borderRadius={'10px'} w={'400px'} src='https://www.propertyreporter.co.uk/images/660x350/shutterstock_547956979.jpg'/>
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
                <Text>At Enhance Projects, we understand that the foundation of exceptional living or working spaces begins with thoughtful design. Our floor plans are a testament to innovation and functionality, offering a glimpse into the seamless integration of architectural expertise and user-centric design principles.</Text>
              <Text fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>Explore a variety of layouts tailored to suit diverse preferences and needs. From spacious residences to cutting-edge office spaces, our floor plans are a canvas for your imagination. Each design is crafted with precision, ensuring an optimal blend of aesthetics and practicality.</Text>
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


{/* <Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Educational Institutes</Text>
      <Text fontFamily={'Lora'}> Innovation, Excellence, Global Impact</Text>
      </Box>
</Box>
<Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} direction={['column','column','row','row']}>
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/low-rise-building_1127-3268.jpg?w=996&t=st=1705497437~exp=1705498037~hmac=11ed679333bd027182d10e1eb78224d8d32b87ebe5256190ff739522a3f9d80c'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
            </Box>
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/premium-photo/modern-apartment-buildings-green-residential-area-city_1127-4267.jpg?w=996'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
            </Box> 
            <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/water-dwelling_1127-3260.jpg?w=996&t=st=1705497493~exp=1705498093~hmac=c6fa972c761e554ec9bcb2d0c714a0643ae8b074651ef778f4f411632f569908'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
            </Box> 
            <Box>
                <Image w={'500px'} h={'250px'}  src='https://img.freepik.com/free-photo/passageway_1127-3255.jpg?w=996&t=st=1705497517~exp=1705498117~hmac=c7152271cb4032c9757171a577d8e50ff2ad1d9149b188655fdc89c37e02b96c'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Educational</Text>
            </Box>

</Flex> */}


<Box>
<Box paddingBottom={'50px'} textAlign={'left'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Residental Infrastrcture</Text>
      <Text fontFamily={'Lora'}> Efficiency, Reliability, Excellence</Text>
      </Box>
</Box>
<Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} mb={'90px'} direction={['column','column','row','row']}>
            <Box onClick={() => handleDownloadPDF(Urvashi, 'Urvashi Heights')}>
                <Image w={'500px'} h={'250px'} src='https://venues-realestate.com/wp-content/uploads/2023/08/resde-1.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Urvashi Heights</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>
            <Box onClick={() => handleDownloadPDF(EnhanceSharma, 'Enhance Sharma')}>
                <Image w={'500px'} h={'250px'} src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/realessss-sixteen_nine.jpg?size=948:533'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Enhance Enclave</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box onClick={() => handleDownloadPDF(Gardenia, 'Gardenia Enclave')}>
                <Image w={'500px'} h={'250px'} src='https://www.bankrate.com/2022/09/01171315/Commercial-real-estate.jpg?auto=webp&optimize=high&crop=16:9'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Gardenia Enclace</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box onClick={() => handleDownloadPDF(Arover, 'Arover Niketen')}>
                <Image w={'500px'} h={'250px'} src='https://imageio.forbes.com/specials-images/imageserve/6070a6e2966eee4eaceadafc/Cityscape-with-modern-residential-area--new-apartment-buildings-and-green-courtyard/960x0.jpg?height=473&width=711&fit=bounds'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Arovar Niketen</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text>/ */}
            </Box>
</Flex>

         
    <Footer/>
    </>


  )
}

export default Contractors