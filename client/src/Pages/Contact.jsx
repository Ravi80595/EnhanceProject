import { Box, Image, Text,Flex,Button,Input,Checkbox,Select,Textarea} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import '../CSS/About.css'
import Footer from '../Components/Footer'

const Contact = () => {
  const latitude = 28.453432537750142;
  const longitude = 77.06834227116423;

  const handleClick = () => {
    const googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(googleMapsURL, '_blank');
  };


return (
    <Box>
    <Navbar/>
    <div className="image-box">
        {/* <div className="gradient-overlay"></div> */}
        <img src="https://mauryahomes.in/wp-content/themes/maurya/images/our-journy-banner.jpg" alt="Background Image" className="background-image" />
     </div>
     <Box background={'#FAEBD7'} mt={'70px'} >
    <Flex w={['90%','90%','70%','70%']} m={'auto'} justifyContent={'space-around'} direction={['column','column','row','row']}>
      <Flex w={['95%','95%','50%','50%']} m={'auto'} mt={'40px'} mb={'30px'}>
        <Image borderRadius={'10px'} w={'300px'} src='https://img.freepik.com/premium-photo/luxury-golden-house-3d-real-estate-rendering_585146-160.jpg'/>
      </Flex>
      <Box w={['95%','95%','60%','60%']} pt={['20px','20px','70px','70px']} className='about-section'>
          <Text fontFamily={'"Poppins", sans-serif'} fontSize={['14px','14px','16px','16px']} lineHeight={'26px'} mt={['1rem','1rem','3rem','2rem']} mb={'1rem'}>Whether you're a potential client, partner, or simply curious about what Enhance Projects has to offer, we look forward to hearing from you. Your inquiries are important to us, and we are committed to providing timely and helpful responses. Thank you for considering Enhance Projects for your housing, construction and infrastructure endeavors.</Text>
      </Box>
    </Flex>
</Box>
     <Box backgroundColor='#fffffd' boxShadow='rgb(255 247 63 / 40%) 0px 2px 4px, rgb(242 255 77 / 30%) 0px 7px 13px -3px, rgb(239 255 46 / 20%) 0px -3px 0px inset' borderRadius={10} textAlign={'left'} w={['90%', '90%', '60%', '50%']} h={['750px', '550px', '550px', 'auto']} m={'auto'} p={'20px'} pb={'70px'} mt="50px" mb={'80px'}>
          {/* <Box w={['92%', '92%', '62%', '92%']} m={'auto'} mt={'30px'}> */}
            <Text pt={10}>Get in touch with our team by completing the below form or call us now. One of our customer service agents will get back to you shortly.</Text>
            <Box w={['90%', '90%', '60%', '82%']} m='auto' mt={'50px'}>
              <Text pt={15}>Name</Text>
              <Input placeholder='Name' />
              <Text pt={15}>Email</Text>
              <Input placeholder='Enter your email' />
              <Text pt={15}>Phone no.</Text>
              <Input placeholder='Enter your phone' />
              {/* <Textarea></Textarea> */}
              <Text pt={5}>Interest</Text>
              <Textarea placeholder='Enter your message here'/>
              <Checkbox pt={3} colorScheme='blue' defaultChecked>
                <Text fontSize={['12px', '16px', '16px', '12px']}>
                  By providing your phone number and checking the box below, you grant us permission to contact you via telephone for communication purposes.</Text>
              </Checkbox>
              <Flex mt={5} justifyContent={'center'}><Button background={'#c0c037'} color={'white'} _hover={{ color: 'blue', background: 'white', border: '2px solid blue' }} transition={'ease 1s'} textAlign={'center'}>Submit</Button></Flex>
            {/* </Box> */}
          </Box>
        </Box>
        <Footer/>
</Box>
  )
}

export default Contact