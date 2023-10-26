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
     <Box background={'#FAEBD7'}>
      <Box w={'80%'} m='auto' paddingBottom={'90px'} pt={'50px'}>
      {/* <Text fontSize={'38px'} lineHeight={'44px'} fontFamily={'PlayfairDisplay-Regular'} color={'#3D2B1F'}> About Enhance Project.com</Text> */}
          <Text textAlign={'left'} fontFamily={'"Poppins", sans-serif'} fontSize={['14px','14px','16px','16px']} lineHeight={'26px'} mt={'3rem'} mb={'1rem'}>Maurya Homes is a name synonymous to uncompromising business ethics and excellence. For more than three decades, Maurya Homes has been working towards delivering built spaces with utmost perfection. We are recognized in the Real Estate Industry of Eastern India for our noteworthy contribution and quality of work. The awards that we have received in our journey reflect our proficiency, commitment and dedication towards work and make us feel proud at each moment. We have been honoured with multiple awards from different prestigious institutions. Each award is a great inspiration for us that help to achieve more success in the years to come.
    </Text>
          <Text textAlign={'left'} fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={['14px','14px','16px','16px']} lineHeight={'26px'} mt={'10px'}>
          PRSI, the national association of PR practitioners, organized their annual brand event – BrandEdge at a renowned 5-star hotel in Kolkata on 17th August 2022. It was a star-studded award night where reputed brands and agencies have taken part from the genres of marketing, advertising and PR. Maurya Homes is proud of being honoured with 5 prestigious awards at the grand event. Our managing director Mr. Ekansh Bachchan has received the awards from Melinda Pavek – the US Consul General for Kolkata in the glorious presence of other dignitaries. Here’s a glimpse of the prizes received from Public Relations Society of India (PRSI).</Text>
      </Box>
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