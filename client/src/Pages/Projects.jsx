import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'

const Projects = () => {


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
          <Text textAlign={'left'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'3rem'} mb={'1rem'}>Maurya Homes is a name synonymous to uncompromising business ethics and excellence. For more than three decades, Maurya Homes has been working towards delivering built spaces with utmost perfection. We are recognized in the Real Estate Industry of Eastern India for our noteworthy contribution and quality of work. The awards that we have received in our journey reflect our proficiency, commitment and dedication towards work and make us feel proud at each moment. We have been honoured with multiple awards from different prestigious institutions. Each award is a great inspiration for us that help to achieve more success in the years to come.
</Text>
          <Text textAlign={'left'} fontWeight={'400'} fontFamily={'"Poppins", sans-serif'} fontSize={'16px'} lineHeight={'26px'} mt={'10px'}>
PRSI, the national association of PR practitioners, organized their annual brand event – BrandEdge at a renowned 5-star hotel in Kolkata on 17th August 2022. It was a star-studded award night where reputed brands and agencies have taken part from the genres of marketing, advertising and PR. Maurya Homes is proud of being honoured with 5 prestigious awards at the grand event. Our managing director Mr. Ekansh Bachchan has received the awards from Melinda Pavek – the US Consul General for Kolkata in the glorious presence of other dignitaries. Here’s a glimpse of the prizes received from Public Relations Society of India (PRSI).</Text>
      </Box>
    </Box>
    </Box>
  )
}

export default Projects