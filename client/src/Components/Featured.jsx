import { Box,Flex,Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Timeline from './Timeline'

const Featured = () => {


return (
  <>
    <Box paddingBottom={'50px'}>
      <Text color={'#3D2B1F'} fontSize={'38px'} lineHeight={'44px'} fontFamily={'Playfair Display'}>Featrued Projects</Text>
      <Text fontFamily={'Lora'}>Pioneering lifestyles of tomorrow</Text>
      </Box>
      <Box w={'90%'} m={'auto'}  marginBottom={'90px'}>
        <Flex>
          <Flex>
            <Image borderRadius={'20px'} src='https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg'/>
          </Flex>
          <Box w={'40%'} m={'auto'} justifyContent={'justify'} textAlign={'justify'}>
            <Text> At Enhance Pvt Ltd., we are driven by a passion for innovation and a customer-centric approach. Our mission is to bridge the gap between business challenges and technology solutions, offering tailor-made strategies that drive growth, efficiency, and sustainability. With a team of experienced professionals, we strive to push the boundaries of what's possible in the world of technology. Our Core Offerings: Software Development: We specialize in developing custom software solutions that cater to a wide range of industries, including finance, healthcare, e-commerce, and more. Our team's expertise in multiple programming languages and frameworks ensures that we deliver high-quality, scalable, and secure applications. offering tailor-made strategies that drive growth, efficiency, and sustainability. With a team of experienced professionals, we strive to push the boundaries of what's possible in the world of technology. Our Core Offerings: Software Development: We specialize in developing custom software solutions that cater to a wide range of industries, including finance, healthcare, e-commerce, and more. Our team's expertise in multiple programming languages and frameworks ensures that we deliver high-quality, scalable, and secure applications.</Text>
          </Box>
        </Flex>
      </Box>
      <Timeline/>
      </>
  )
}

export default Featured




      {/* <Box>
        <Image src='https://mauryahomes.in/wp-content/uploads/2022/03/journypic2.jpg'/>
      </Box>
        <Flex background={'white'} position={'absolute'} marginTop={'-260px'} w={'600px'} right={'0'} p={'20px'}>
          <Text>With a focus on excellence and a commitment to enhancing our clients' success, we leverage our expertise in various domains to provide high-impact services and products. About Us: At Enhance Pvt Ltd., we are driven by a passion for innovation and a customer-centric approach. Our mission is to bridge the gap between business challenges and technology solutions, offering tailor-made strategies that drive growth, efficiency, and sustainability. </Text>
        </Flex> */}