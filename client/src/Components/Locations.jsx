import { Box,Flex,Text,Image,Button } from '@chakra-ui/react'
import React from 'react'

const Locations = () => {



return (
    <>
    <Box paddingBottom={'50px'} textAlign={'center'} mt={'30px'}>
      <Text color={'#3D2B1F'} fontSize={'38px'} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Locations</Text>
      <Text fontFamily={'Lora'}> Innovation, Excellence, Global Impact</Text>
      </Box>
    <Box w={'70%'} m={'auto'} background={'#f7fff1'} p={'30px'} fontFamily={'Lora'}>
        <Flex justifyContent={'space-around'}> 
            <Box>
                <Flex gap={'50px'} justifyContent={'space-around'}>
                    <Box>   
                        <Text mb={'5px'} fontSize={'30px'} fontWeight={'600'}>48</Text>
                        <Text mb={'15px'}>Residental Projects</Text>
                        <Text mb={'5px'} fontSize={'30px'} fontWeight={'600'}>4500 acres</Text>
                        <Text mb={'15px'}>Residental Projects</Text>
                        <Text mb={'5px'} fontSize={'30px'} fontWeight={'600'}>13.71 msft</Text>
                        <Text mb={'15px'}>Residental Projects</Text>
                    </Box>
                    <Box>
                    <Text mb={'5px'} fontSize={'30px'} fontWeight={'600'}>9</Text>
                        <Text mb={'10px'}>Cities in India</Text>
                        <Text mb={'5px'} fontSize={'30px'} fontWeight={'600'}>1000 acres</Text>
                        <Text mb={'10px'}>Residental Projects</Text>
                        <Text mb={'5px'} fontSize={'30px'} fontWeight={'600'}>48</Text>
                        <Text mb={'10px'}>Residental Projects</Text>
                    </Box>
                </Flex>
                <Box pt={'30px'} fontSize={'22px'}>
                    <hr />
                    <Text mt={'10px'}>Creating Sustainble communities across India</Text>
                    <Button mt={'20px'}>Explore Our Bussiness</Button>
                </Box>
            </Box>
            <Box>
                <Image src='https://mldlprodstorage.blob.core.windows.net/live/2022/11/Mahindra-Lifespaces-Locations.webp'/>
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default Locations