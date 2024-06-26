import { Box,Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import groupsHero from '../Images/groupsHero.jpg'
import BOD1 from '../Images/BOD1.png'
import BOD2 from '../Images/BOD2.png'
import EnhanceLOGO from '../Images/EnhanceLOGO.png'
import MinuLOGO from '../Images/MinuLOGO.png'
import AKJLogo from '../Images/AKJLogo.png'

const Groups = () => {



return (
    <>
    <Navbar/>
    <Box>
      <Box pt={'40px'}>

        <Image w={'100%'} src={'https://res.cloudinary.com/rsmglobal/image/fetch/t_default/f_auto/q_auto/https://www.rsm.global/uganda/sites/default/files/media/backgrounds/Real-Estate-Consulting_sector-page-new-hero-banner-3840x960px.jpg'}/>
      </Box>
    </Box>
    <Box paddingBottom={'80px'} mt={['10px','10px','70px','70px']}>
            <Flex w={'85%'} m={'auto'} mt={['10px','10px','90px','90px']} direction={['column-reverse','column-reverse','row','row']}>
              <Box w={['95%','95%','40%','40%']} m={'auto'} justifyContent={'justify'} textAlign={'justify'}>
              <Text mb={'15px'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> Enhance Groups</Text>
            {/* <Text paddingTop={'10px'} fontFamily={'Lora'}>A journey of creating more than 4 million sq.ft. and 1500+ happy customers</Text> */  }
                <Text fontSize={['14px','14px','16px','16px']}>At Enhance Projects, we understand the power of synergy, a celebration of the collective efforts that define our success. Our commitment to excellence is reflected in the diverse groups we work with, each contributing a unique perspective to the projects we undertake.</Text>
              <Text fontSize={['14px','14px','16px','16px']} fontFamily={'"Poppins", sans-serif'} lineHeight={'26px'} mt={'10px'}>From architects and engineers to contractors and stakeholders, meet the the vibrant tapestry of professionals who come together under the Enhance Projects umbrella. Welcome to Enhance Projects, where groups converge, ideas flourish, and excellence is the common language.</Text>
              </Box>
              <Flex mt={['0px','0px','50px','50px']} justifyContent={'start'} w={['95%','95%','50%','50%']}>
                <Image borderRadius={'20px'} src={'https://media.istockphoto.com/id/1139968862/photo/barrier-under-construction.jpg?s=612x612&w=0&k=20&c=UdMTWQ5dIjW8PP4HXRkmd5TYdImu1cZpYPR-l9oXiwA='}/>
              </Flex>
            </Flex>
          </Box>


          
          <Box>
<Box paddingBottom={'50px'} textAlign={'center'} w='90%' m={'auto'} mt={['10px','10px','90px','90px']}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Collaborators</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}>Our Network of Trusted Partners </Text>
      </Box>
</Box>

    <Flex justifyContent={'space-around'} w={'70%'} m={'auto'} gap={'40px'} textAlign={'center'} pb={'60px'} direction={['column','column','row','row']}>
            <Box>
                <Image w={'400px'} h={'200px'} borderRadius={'10px'} src={EnhanceLOGO}/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Enhance Pvt Ltd</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>
            <Box>
                <Image w={'400px'} h={'200px'} borderRadius={'10px'} src={MinuLOGO}/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Minu Enhance</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image w={'400px'} h={'200px'} borderRadius={'10px'} src='https://images-platform.99static.com//7ViXOz4gZ3IIJs4txA_nUrmJC_U=/0x0:2014x2014/fit-in/500x500/99designs-contests-attachments/132/132558/attachment_132558399'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Mc Jain</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image w={'400px'} h={'200px'} borderRadius={'10px'} src={AKJLogo}/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Ajay Jain</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>

</Flex>




          {/* <Box background={'#fff4e6'} pb={'50px'} pt={'30px'}>  
          <Flex w={'85%'} m={'auto'} mb={'50px'} justifyContent={'center'}>
          <Box pt={'30px'} w={'50%'} m={'auto'}>
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
            </Box>
            <Box w={['95%','95%','70%','70%']} m={'auto'} mt={['10px','10px','30px','30px']}>
            <Box w={['95%','95%','70%','70%']} paddingBottom={'50px'} textAlign={'center'}>
             <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Real Estate developer in India</Text>
             <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text>
          </Box>
          <Text textAlign={'justify'} fontSize={['14px','14px','16px','16px']}>Enhance projects is renowned for being the thick vision of the most integrated infrastructures and constructions. For years now, it has provided the customers with effective and reliable solutions that could overcome any construction challenges. We are consistent in processing the delivery of reliable solutions to our customers. It incorporates supporting them right from the inception phase to the fully operational phase.</Text>
              <Text textAlign={'justify'} fontSize={['14px','14px','16px','16px']} mt={'10px'}>We project our offices at local places to offer our customers an integrated advantage of local presence and broad geographical reach. Our every project is managed by our team comprising of highly experienced and skilled personnel, integrated from different fields.</Text>
            </Box>
          </Flex>
          </Box> */}






<Box>
<Box paddingBottom={'50px'} textAlign={'center'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Projects</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}>Browse our portfolio of innovative construction projects.</Text>
      </Box>
</Box>
<Flex justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} mb={'90px'} direction={['column','column','row','row']}>
            <Box>
                <Image w={'400px'} h={'250px'} src='https://www.quantumrealty.co.in/wp-content/uploads/2019/06/Aster-court.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Urvashi Heights</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>
            <Box>
                <Image w={'400px'} h={'250px'} src='https://www.orionrealtors.com/blog/wp-content/uploads/2019/10/f5f87e6b67_residential-projects-gurgaon-1360x650.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Arovar Niketen</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image w={'400px'} h={'250px'} src='https://assets-news.housing.com/news/wp-content/uploads/2018/04/24200056/Township-projects-The-future-of-real-estate-development-in-metros-FB-1200x628-compressed.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Enhance Enclave</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box> 
            <Box>
                <Image w={'400px'} h={'250px'} src='https://www.puravankara.com/img/Bangalore%20home.jpg'/>
                <Text mt={'14px'} fontWeight={'bold'} fontSize={'20px'}>Gardenia Enclave</Text>
                {/* <Text mt={'4px'}>BENGLURU</Text> */}
            </Box>

</Flex>










<Box paddingBottom={'50px'} textAlign={'center'} w='90%' m={'auto'} mt={'90px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>We Worked with</Text>
      {/* <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}> Innovation, Excellence, Global Impact</Text> */}
      </Box>
{/* </Box> */}
<Flex w={['60%','90%','60%','60%']} gap={['50px','50px','0px','0px']} m={'auto'} mb={'80px'} justifyContent={'space-around'} direction={['column','column','row','row']} alignItems={'center'}>
  <Image w={'150px'} src='https://static.vecteezy.com/system/resources/previews/020/336/706/non_2x/honda-logo-honda-icon-free-free-vector.jpg'/>
  <Image w={'150px'} h={'70px'} src='https://image4.owler.com/logo/osam-dairy_owler_20161129_095301_original.jpg' />
  <Image w={'250px'} src='https://www.acharyakulam.org/public/themes/assets/img/logo.webp' />
</Flex>
<Flex w={['60%','90%','60%','80%']} gap={['50px','50px','0px','0px']} m={'auto'} mb={'80px'} justifyContent={'space-around'} direction={['column','column','row','row']}>
  <Image w={'150px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMC6urNrywN3g5vwIeLZUe1v3VguUhFj8x6OVmdEy6YWWkFUNhbz2yqZav6ml_Khfueg&usqp=CAU' />
  <Image w={'150px'} src='https://www.shardaglobalschool.com/wp-content/uploads/2023/02/cropped-cropped-SGS-Logo_PNG.png' />
  <Image w={'150px'} src='https://i.pinimg.com/736x/28/af/9f/28af9f9e7d9a24312579eeb763670105.jpg' />
  <Image w={'150px'} src='https://m.media-amazon.com/images/I/61OgrIEL7EL._AC_UF350,350_QL80_.jpg'/>
</Flex>


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