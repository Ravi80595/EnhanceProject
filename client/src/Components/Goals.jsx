import { Box, SimpleGrid, Text, Stack, Flex,Image } from '@chakra-ui/react'
// import icon3 from '../Images/icon3.png'
// import icon2 from '../Images/icon2.png'
// import icon1 from '../Images/icon1.png'


export default function Goals(){


return (
    <Box textAlign={'center'} p={4} w='90%' m='auto' mt={['30px','30px','90px','90px']} mb={150}>
        <Box paddingBottom={'50px'} textAlign={'center'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Goals</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','18px','18px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
    <Flex direction={['column','column','row','row']} gap={20} justifyContent={'space-around'}>
      <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p={2} background={'white'}  borderRadius={10}>
      <Box pb={3} w={'15%'} m={'auto'}>
         <Image src={'https://static.thenounproject.com/png/5302889-200.png'}/></Box>
      <Text pb={2} fontWeight={600}>Hard-Work</Text>
      <Text color={'gray.600'}>With diligence as our foundation, we pave the path to your property dreams. </Text>
    </Box>
    <Box  _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p={2} background={'white'}  borderRadius={10}>
      <Box pb={3} w={'20%'} m={'auto'}>
         <Image src={'https://static.thenounproject.com/png/5302889-200.png'}/></Box>
      <Text pb={2} fontWeight={600}>Extraordinary</Text>
      <Text color={'gray.600'}>Achieving more than expected, because you deserve nothing less.</Text>
    </Box>
    <Box _hover={{transform:'translateY(-15px)',transition:'transform 0.5s'}} p={2} background={'white'}  borderRadius={10}>
      <Box pb={3} w={'15%'} m={'auto'}>
         <Image src={'https://static.thenounproject.com/png/5302889-200.png'}/></Box>
      <Text pb={2} fontWeight={600}>Accountable</Text>
      <Text color={'gray.600'}>Taking responsibility every step of the way to ensure your trust is upheld. </Text>
    </Box>
    </Flex>
    </Box>
  )
}