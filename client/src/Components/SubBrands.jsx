import React from 'react'
import {Box,Tabs,TabList,TabPanel,TabPanels,Tab, Text, Flex, Image} from '@chakra-ui/react'
import HorizontalTimeline from './HorizontalTimeline'

const SubBrands = () => {



return (
    // <Box marginBottom={'200px'}>
    <Box backgroundColor={'#fafafa'} pt={'90px'} paddingBottom={'80px'}>
    <Box paddingBottom={'50px'} textAlign={'center'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Meet Our Sub-Brands </Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','15px','18px']}> Innovating for Global Influence</Text>
      </Box>
    <Box w={'90%'} m={'auto'} background={'white'}>
        <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
            <Tab fontSize={['16px','16px','24px','24px']} fontFamily={'Playfair Display'}>Enhance Pvt. Ltd</Tab>
            <Tab fontSize={['16px','16px','24px','24px']} fontFamily={'Playfair Display'}>Minu Enhance</Tab>
            <Tab fontSize={['16px','16px','24px','24px']} fontFamily={'Playfair Display'}>MC Jain</Tab>
            <Tab fontSize={['16px','16px','24px','24px']} fontFamily={'Playfair Display'}>Ajay Jain</Tab>
        </TabList>
        <TabPanels>
            <TabPanel fontSize={'16px'}>
                <Flex direction={['column','column','row','row']}>
                    <Flex justifyContent={'center'} w={['95%','95%','40%','40%']}>
                    <Image w={'290px'} h={'300px'} src='https://images-platform.99static.com//7ViXOz4gZ3IIJs4txA_nUrmJC_U=/0x0:2014x2014/fit-in/500x500/99designs-contests-attachments/132/132558/attachment_132558399'/>
                    </Flex>
                    <Box w={['95%','95%','50%','50%']}>
                    <Text >The Company was incorporated as a Private Limited Company in the year 1990 with the dream of providing a home to all. Starting from developing homes for the middle- and lower-income groups, the Company is today developing large townships, retail and office spaces and Luxurious apartments for HNI Individuals. Even among the middle class, a home of one’s own is a dream that is fulfilled after elongated years of savings. Unlike most private developers who prefer to build for the affluent, Jain Builders focuses on affordable housing for the masses. The Group has earned a reputation for quality construction and its ability to keep commitments and timely Schedules. </Text>
                    </Box>
                </Flex>
            </TabPanel>
            <TabPanel fontSize={'16px'}>
            <Flex direction={['column','column','row','row']}>
                <Flex justifyContent={'center'}  w={['95%','95%','50%','50%']}>
                    <Image w={'290px'} h={'300px'} src='https://images-platform.99static.com//7ViXOz4gZ3IIJs4txA_nUrmJC_U=/0x0:2014x2014/fit-in/500x500/99designs-contests-attachments/132/132558/attachment_132558399'/>
                    </Flex>
                    <Box  w={['95%','95%','50%','50%']}>
                    <Text>Welcome to Minu Enhance Developers, a special partnership formed in 2021 by Minu Group and Enhance Group. Minu Group started in 1987 and has grown from a marketing agency to a big player in Retail, Entertainment, FMCG, Logistics, Warehousing, and Real Estate across 10 states and 2 Union Territories in India.   <br />
                    Enhance Group, since the 1970s, has been working with government organizations like BSNL CCL and BCD. They stepped into Development Business in 2005 with Shreya Constructions, completing successful projects for Companies, Hospitals, Schools, Industries, Private Buildings, and Homes. They've been proud members of BIA and the Federation of Jharkhand Chamber of Commerce & Industries for over 20 years.   <br />
                    Now, Minu Enhance Developers, our joint venture, is all about creating modern homes and commercial spaces. We're committed to top-notch standards in professionalism, ethics, quality, and customer service. Come be part of our journey where innovation and excellence meet, and your dreams find a place to grow. 
                    </Text>
                    </Box>
                </Flex>
            </TabPanel>
            <TabPanel fontSize={'16px'}>
            <Flex direction={['column','column','row','row']}>
                    <Flex justifyContent={'center'}  w={['95%','95%','50%','50%']}>
                    <Image w={'290px'} h={'300px'} src='https://images-platform.99static.com//7ViXOz4gZ3IIJs4txA_nUrmJC_U=/0x0:2014x2014/fit-in/500x500/99designs-contests-attachments/132/132558/attachment_132558399'/>
                    </Flex>
                    <Box  w={['95%','95%','50%','50%']}>
                    <Text>With specialized experience in the Construction Industry for more than 50 years, we, at MC JAIN & Co., have carved a niche for ourselves in the industry as one of the leading Civil Contractors of the region. Our company was also recognized and awarded in the category of “Best Professionally Managed Company  by Builders Association of India (BIA). However, we pride ourselves not on account of our turnover but on our commitment to construction quality. <br /> Our company's ideological foundations in respect of commitment to time bound completion of projects and high-quality construction have been the corner stones to our rapid growth over the years. Our consistent pursuit of customer satisfaction has won us several prestigious awards and around acclaim in the past.</Text>
                    </Box>
                </Flex>
            </TabPanel>
            <TabPanel fontSize={'16px'}>
            <Flex direction={['column','column','row','row']}>
                    <Flex justifyContent={'center'} w={['95%','95%','50%','50%']}>
                    <Image w={'290px'} h={'300px'} src='https://images-platform.99static.com//7ViXOz4gZ3IIJs4txA_nUrmJC_U=/0x0:2014x2014/fit-in/500x500/99designs-contests-attachments/132/132558/attachment_132558399'/>
                    </Flex>
                    <Box  w={['95%','95%','50%','50%']}>
                    <Text>The firm has been promoted by Sri Ajay Kumar Jain, who had around 25 years of experience in the field of Construction. Under his Supervision Telephone Exchange at Ranchi was constructed, also constructed many other private buildings in the city. Beyond that Company had also constructed 18 buildings at P&T Colony, Lalpur Ranchi. Not only Business the company also had completed Social Activities. “The only thing that matters is a unique vision and our complete commitment to it. His thoughts reflect not only his ability to outthink others, but challenge people to grasp more than they can envision too. His instinct in spotting opportunities and knack for finance make him a formidable force in realty circles. </Text>
                    </Box>
                </Flex>
            </TabPanel>
        </TabPanels>
        </Tabs>
    </Box>
    </Box>
    
    // </Box>
  )
}

export default SubBrands