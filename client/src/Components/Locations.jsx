import { Box,Flex,Text,Image,Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import map from '../Images/map.png'

const Locations = () => {



return (
    <>
    <Box paddingBottom={'50px'} textAlign={'center'} mt={'30px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Exploring Excellence Worldwide </Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','15px','18px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
    <Box w={['90%','90%','70%','70%']} m={'auto'} background={'#ffedee'} p={'30px'} fontFamily={'Lora'}>
        <Flex justifyContent={'space-around'} direction={['column-reverse','column-reverse','row','row']}> 
            <Box>
                <Flex gap={'50px'} justifyContent={'space-around'}>
                    <Box>   
                        <Text mb={'5px'} fontSize={['20px','20px','30px','30px']} fontWeight={'600'}>250+</Text>
                        <Text mb={'15px'} fontSize={['14px','14px','18px','18px']}>Projects</Text>
                        <Text mb={'5px'} fontSize={['20px','20px','30px','30px']}  fontWeight={'600'}>4500 acres</Text>
                        <Text mb={'15px'} fontSize={['14px','14px','18px','18px']}>Residental Projects</Text>
                        <Text mb={'5px'} fontSize={['20px','20px','30px','30px']}  fontWeight={'600'}>13.71 msft</Text>
                        <Text mb={'15px'} fontSize={['14px','14px','18px','18px']}>Built-up Area</Text>
                    </Box>
                    <Box>
                    <Text mb={'5px'} fontSize={['20px','20px','30px','30px']}  fontWeight={'600'}>3</Text>
                        <Text mb={'10px'} fontSize={['14px','14px','18px','18px']}>Cities in India</Text>
                        <Text mb={'5px'} fontSize={['20px','20px','30px','30px']}  fontWeight={'600'}>10000+</Text>
                        <Text mb={'10px'} fontSize={['14px','14px','18px','18px']}>Acres</Text>
                        {/* <Text mb={'5px'} fontSize={['20px','20px','30px','30px']}  fontWeight={'600'}>48</Text>
                        <Text mb={'10px'} fontSize={['14px','14px','18px','18px']}>Residental Projects</Text> */}
                    </Box>
                </Flex>
                <Box pt={'30px'} fontSize={['16px','16px','22px','22px']}>
                    <hr />
                    <Text mt={'10px'}>Creating Sustainble communities across India</Text>
                    <Link to='/contact'>
                    <Button background={'gold'} _hover={{color:'white'}} color={'white'} mt={'20px'}>Claim Yours</Button>
                    </Link>
                </Box>
            </Box>
            <Box>
                <Image w={'400px'} h={'380px'} src={map}/>
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default Locations