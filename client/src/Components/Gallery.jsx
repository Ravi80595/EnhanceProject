import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Gallery = () => {
  // Ensure that the number of images doesn't exceed 6
//   const limitedImages = images.slice(0, 6);

return (
    <>
    <Box paddingBottom={'50px'} textAlign={'center'} mt={'90px'}>
          <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>CSR Activites</Text>
          <Text fontFamily={'Lora'} fontSize={['14px','14px','18px','18px']}>Building Strong Communities </Text>
        </Box>
    <Box w='80%' m={'auto'} mt={'50px'} mb={'70px'}>
        <Flex gap={'100px'} direction={['column','column','row','row']}>
            <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' w={['95%','95%','50%','50%']} borderRadius={'10px'} border={'2px solid black'} p={'20px'}>
                <Text fontWeight={'bold'} textAlign={'center'} fontSize={'18px'}>Job Creation and Training Programs</Text>
                <Text textAlign={'center'} mt={'9px'}>Providing employment opportunities for local residents during construction and operation phases. 
                    <br />Offering skill development and training programs.
                </Text>
            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' w={['95%','95%','50%','50%']} borderRadius={'10px'} border={'2px solid black'} p={'20px'}>
                <Text fontWeight={'bold'} textAlign={'center'} fontSize={'18px'}>Sustainable Construction Practices</Text>
                <Text textAlign={'center'} mt={'9px'}>Adopting green building standards to reduce environmental impact. 
                    <br />Incorporating energy-efficient technologies and materials in construction. 
                </Text>
            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' w={['95%','95%','50%','50%']} borderRadius={'10px'} border={'2px solid black'} p={'20px'}>
                <Text fontWeight={'bold'} textAlign={'center'} fontSize={'18px'}>Affordable Housing Initiatives</Text>
                <Text textAlign={'center'} mt={'9px'}>Developing and promoting affordable housing projects for lower-income communities.  
                    <br />Offering financial assistance or subsidies for affordable housing. 
                </Text>
            </Box>
        </Flex>



        <Flex gap={'100px'} mt={'40px'} direction={['column','column','row','row']}>
            <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' w={['95%','95%','50%','50%']} borderRadius={'10px'} border={'2px solid black'} p={'20px'}>
                <Text fontWeight={'bold'} textAlign={'center'} fontSize={'18px'}>Community Infrastructure Development</Text>
                <Text textAlign={'center'} mt={'9px'}>Investing in the development of community infrastructure such as schools, healthcare facilities, and recreational spaces.  
                    <br />Enhancing local amenities to improve the overall quality 
                </Text>
            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' w={['95%','95%','50%','50%']} borderRadius={'10px'} border={'2px solid black'} p={'20px'}>
                <Text fontWeight={'bold'} textAlign={'center'} fontSize={'18px'}>Ethical Business Practices </Text>
                <Text textAlign={'center'} mt={'9px'}>Ensuring fair and transparent dealings in land acquisition and property transactions. 
                    <br />Avoiding displacement of local communities 
                </Text>
            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' w={['95%','95%','50%','50%']} borderRadius={'10px'} border={'2px solid black'} p={'20px'}>
                <Text fontWeight={'bold'} textAlign={'center'} fontSize={'18px'}>Urban Renewal and Slum Rehabilitation</Text>
                <Text textAlign={'center'} mt={'9px'}>Participating in urban renewal projects to revitalize neglected or blighted areas. 
                    <br />Engaging in slum rehabilitation programs to provide better living
                </Text>
            </Box>
        </Flex>



        <Flex gap={'100px'} mt={'40px'} direction={['column','column','row','row']}>
        <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' w={['95%','95%','50%','50%']} borderRadius={'10px'} border={'2px solid black'} p={'20px'}>
                <Text fontWeight={'bold'} textAlign={'center'} fontSize={'18px'}>Energy Efficiency and Conservation</Text>
                <Text textAlign={'center'} mt={'9px'}>Implementing energy-efficient technologies in buildings
                    <br />Promoting the use of renewable energy sources
                </Text>
            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' w={['95%','95%','50%','50%']} borderRadius={'10px'} border={'2px solid black'} p={'20px'}>
                <Text fontWeight={'bold'} textAlign={'center'} fontSize={'18px'}>Environmental Conservation</Text>
                <Text textAlign={'center'} mt={'9px'}>Preserving green spaces within and around real estate developments.  
                    <br />Implementing landscaping and tree planting initiatives. 
                </Text>
            </Box>
            <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' w={['95%','95%','50%','50%']} borderRadius={'10px'} border={'2px solid black'} p={'20px'}>
                <Text fontWeight={'bold'} textAlign={'center'} fontSize={'18px'}>Social Impact Assessment</Text>
                <Text textAlign={'center'} mt={'9px'}>Engaging with community stakeholders to address concerns 
                    <br />Conducting social impact assessments. 
                </Text>
            </Box>
        </Flex>
    </Box>

    </>
  );
};


export default Gallery;
