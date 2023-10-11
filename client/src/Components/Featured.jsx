import { Box,Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Timeline from './Timeline'

const Featured = () => {


return (
  <>
    <Box paddingBottom={'90px'}>
      <Text color={'#3D2B1F'} fontSize={'38px'} lineHeight={'44px'} fontFamily={'Playfair Display'}>Featrued Projects</Text>
      <Text fontFamily={'Lora'}>Pioneering lifestyles of tomorrow</Text>
      </Box>
      <Timeline/>
      </>
  )
}

export default Featured