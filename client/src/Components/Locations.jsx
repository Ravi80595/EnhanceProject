import { Box,Flex,Text,Image,Button } from '@chakra-ui/react'
import React from 'react'

const Locations = () => {



return (
    <>
    <Box paddingBottom={'50px'} textAlign={'center'} mt={'30px'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Locations</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','15px','18px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
    <Box w={['90%','90%','70%','70%']} m={'auto'} background={'#f7fff1'} p={'30px'} fontFamily={'Lora'}>
        <Flex justifyContent={'space-around'} direction={['column-reverse','column-reverse','row','row']}> 
            <Box>
                <Flex gap={'50px'} justifyContent={'space-around'}>
                    <Box>   
                        <Text mb={'5px'} fontSize={['20px','20px','30px','30px']} fontWeight={'600'}>48</Text>
                        <Text mb={'15px'} fontSize={['14px','14px','18px','18px']}>Residental Projects</Text>
                        <Text mb={'5px'} fontSize={['20px','20px','30px','30px']}  fontWeight={'600'}>4500 acres</Text>
                        <Text mb={'15px'} fontSize={['14px','14px','18px','18px']}>Residental Projects</Text>
                        <Text mb={'5px'} fontSize={['20px','20px','30px','30px']}  fontWeight={'600'}>13.71 msft</Text>
                        <Text mb={'15px'} fontSize={['14px','14px','18px','18px']}>Residental Projects</Text>
                    </Box>
                    <Box>
                    <Text mb={'5px'} fontSize={['20px','20px','30px','30px']}  fontWeight={'600'}>9</Text>
                        <Text mb={'10px'} fontSize={['14px','14px','18px','18px']}>Cities in India</Text>
                        <Text mb={'5px'} fontSize={['20px','20px','30px','30px']}  fontWeight={'600'}>1000 acres</Text>
                        <Text mb={'10px'} fontSize={['14px','14px','18px','18px']}>Residental Projects</Text>
                        <Text mb={'5px'} fontSize={['20px','20px','30px','30px']}  fontWeight={'600'}>48</Text>
                        <Text mb={'10px'} fontSize={['14px','14px','18px','18px']}>Residental Projects</Text>
                    </Box>
                </Flex>
                <Box pt={'30px'} fontSize={['16px','16px','22px','22px']}>
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