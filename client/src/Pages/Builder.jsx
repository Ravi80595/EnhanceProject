import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import builderHero from '../Images/builderHero.jpg';
import Urvashi from '../Images/Urvashi.png';
import Arover from '../Images/Arovar.png';
import EnhanceSharma from '../Images/EnhanceSharma.png';
import EnhanceEnclave from '../Images/EnhanceEncalve.png';
import Gardenia from '../Images/Gardenia.png';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import RajsthanGarden from '../Images/RajsthanGarden.jpg'
import InnovaTower from '../Images/InnovaTower.jpg'
import KCComplex from '../Images/KCComplex.jpg'
import MahabirComplex from '../Images/MahabirComplex.jpg'


const Builder = () => {

  const handleDownloadPDF = (imageURL, imageName) => {
    const doc = new jsPDF();
    doc.addImage(imageURL, 'PNG', 10, 10, 100, 100); // Embed the image in the PDF
    doc.save(`${imageName}.pdf`); // Save the PDF with the URL name
  };


  return (
    <>
      <Navbar />
      <Box w={'100%'} mb={'70px'} h={'90vh'}>
        <Image h={'90vh'} w={'100%'} src={builderHero} />
      </Box>
      <Box paddingBottom={'50px'} textAlign={'center'}>
        <Text color={'#3D2B1F'} fontSize={['22px', '22px', '38px', '38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Projects</Text>
        <Text fontFamily={'Lora'} fontSize={['14px', '14px', '16px', '16px']}>Transformative Construction for a Changing World </Text>
      </Box>
      <Box pb={'120px'} w={'85%'} textAlign={'center'} fontFamily={'Lora'} fontSize={'18px'} m={'auto'} mt={'40px'}>
        <Flex justifyContent={'space-around'} direction={['column', 'column', 'row', 'row']}>
          <Box onClick={() => handleDownloadPDF(Urvashi, 'Urvashi Heights')}>
            <Image w={'500px'} h={'550px'} src={Urvashi} />
            <Text mt={'4px'} mb={['40px', '40px', '0px', '0px']}>URVASHI HEIGHTS</Text>
          </Box>
          <Box>
            <Flex justifyContent={'space-between'} gap={'40px'}>
              <Box onClick={() => handleDownloadPDF(EnhanceSharma, 'Enhance Sharma')}>
                <Image w={'250px'} h={"250px"} src={EnhanceSharma} />
                <Text mt={'4px'} mb={['20px', '20px', '0px', '0px']} >ENHANCE SHARMA</Text>
              </Box>
              <Box onClick={() => handleDownloadPDF(EnhanceEnclave, 'Enhance Enclave')}>
                <Image w={'250px'} h={"250px"} src={EnhanceEnclave} />
                <Text>ENHANCE ENCLAVE</Text>
              </Box>
            </Flex>
            <Flex mt={"20px"} justifyContent={'space-between'} gap={'40px'} >
              <Box onClick={() => handleDownloadPDF(Gardenia, 'Gardenia Enclave')}>
                <Image w={'250px'} h={"250px"} src={Gardenia} />
                <Text mt={'4px'}>GARDENIA ENCLAVE</Text>
              </Box>
              <Box onClick={() => handleDownloadPDF(Arover, 'Arover Niketen')}>
                <Image w={'250px'} h={"250px"} src={Arover} />
                <Text>AROVAR NIKETEN</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>



        {/* <Box> */}
      <Box paddingBottom={'50px'} textAlign={'left'} w='99%' m={'auto'} mt={'90px'}>
            <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Homes</Text>
            <Text fontFamily={'Lora'} fontSize={['14px','14px','16px','16px']}>Innovative Construction Solutions</Text>
            </Box>
    

            <Flex pb={'60px'} justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} direction={['column','column','row','row']}>
            <Box>
                <Image w={'500px'} h={'250px'} src={RajsthanGarden}/>
                <Text mt={'4px'}>Rajsthan Garden</Text>
            </Box>
            <Box>
                <Image w={'500px'} h={'250px'} src={MahabirComplex}/>
                <Text mt={'4px'}>Mahabir Complex</Text>
            </Box>
            
            <Box>
                <Image w={'500px'} h={'250px'} src={InnovaTower}/>
                <Text mt={'4px'}>Innovat Tower</Text>
            </Box> 
            <Box>
                <Image w={'500px'} h={'250px'} src={KCComplex}/>
                <Text mt={'4px'}>KC Complex</Text>
            </Box> 
            

</Flex>





<Flex pb={'60px'} justifyContent={'space-around'} w={'90%'} m={'auto'} gap={'40px'} textAlign={'center'} direction={['column','column','row','row']}>
            {/* <Box>
                <Image w={'500px'} h={'250px'} src='https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?w=996&t=st=1705496906~exp=1705497506~hmac=c645b572d73d90d077acd6508e6f599634453b9c4bc478b2d55c46fd0121bbdc'/>
                <Text mt={'4px'}>Ranchi</Text>
            </Box> */}
            <Box>
                <Image w={'500px'} h={'250px'} src='https://as1.ftcdn.net/v2/jpg/05/00/86/48/1000_F_500864828_2FbOt7MK1rlfraJjBRMn6pNQ7QKhrMyu.jpg'/>
                <Text mt={'4px'}>Jharkhand</Text>
            </Box>
            
            <Box>
                <Image w={'500px'} h={'250px'} src='https://static.vecteezy.com/system/resources/previews/021/827/590/original/bihar-state-location-within-india-3d-map-vector.jpg'/>
                <Text mt={'4px'}>Bihar</Text>
            </Box> 
            <Box>
                <Image w={'500px'} h={'250px'} src='https://t4.ftcdn.net/jpg/05/00/87/51/360_F_500875112_mY72CF7G5Yy913K5VLWLzj0AW9OeIQ5A.jpg'/>
                <Text mt={'4px'}>Odisha</Text>
            </Box> 
            

</Flex>









</Box>
      {/* </Box> */}
      <Footer />
    </>
  )
}

export default Builder;
