import React from 'react'
import {Box,Tabs,TabList,TabPanel,TabPanels,Tab, Text, Flex, Image} from '@chakra-ui/react'
import HorizontalTimeline from './HorizontalTimeline'

const SubBrands = () => {



return (
    // <Box marginBottom={'200px'}>
    <Box backgroundColor={'#fafafa'} pt={'90px'} paddingBottom={'80px'}>
    <Box paddingBottom={'50px'} textAlign={'center'}>
      <Text color={'#3D2B1F'} fontSize={['22px','22px','38px','38px']} lineHeight={'44px'} fontFamily={'Playfair Display'}>Our Sub-Brands</Text>
      <Text fontFamily={'Lora'} fontSize={['14px','14px','15px','18px']}> Innovation, Excellence, Global Impact</Text>
      </Box>
    <Box w={'90%'} m={'auto'} background={'white'}>
        <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
            <Tab fontSize={['16px','16px','24px','24px']} fontFamily={'Playfair Display'}>Enhance Pvt. ltd</Tab>
            <Tab fontSize={['16px','16px','24px','24px']} fontFamily={'Playfair Display'}>Minu Enhance</Tab>
            <Tab fontSize={['16px','16px','24px','24px']} fontFamily={'Playfair Display'}>Ajay Jain</Tab>
        </TabList>
        <TabPanels>
            <TabPanel fontFamily={'Lora'} fontSize={'18px'}>
                <Flex direction={['column','column','row','row']}>
                    <Flex justifyContent={'center'} w={['95%','95%','40%','40%']}>
                    <Image w={'290px'} h={'300px'} src='https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/22/full/1632254947-8566.jpg?im=FeatureCrop,size=(1200,900)'/>
                    </Flex>
                    <Box w={['95%','95%','50%','50%']}>
                    <p>Enhance Pvt Ltd. is a dynamic and innovative technology company dedicated to delivering cutting-edge solutions that empower businesses to thrive in the digital age. With a focus on excellence and a commitment to enhancing our clients' success, we leverage our expertise in various domains to provide high-impact services and products.
                    About Us:
                    At Enhance Pvt Ltd., we are driven by a passion for innovation and a customer-centric approach. Our mission is to bridge the gap between business challenges and technology solutions, offering tailor-made strategies that drive growth, efficiency, and sustainability. With a team of experienced professionals, we strive to push the boundaries of what's possible in the world of technology.
                    Our Core Offerings:
                    Software Development: We specialize in developing custom software solutions that cater to a wide range of industries, including finance, healthcare, e-commerce, and more. Our team's expertise in multiple programming languages and frameworks ensures that we deliver high-quality, scalable, and secure applications.
                    Web and Mobile App Development: Our skilled developers craft web and mobile applications that engage users and deliver seamless experiences. From responsive websites to feature-rich mobile apps, we create solutions that align with your business goals.</p>
                    </Box>
                </Flex>
            </TabPanel>
            <TabPanel>
            <Flex>
                    <Flex justifyContent={'center'} w={'40%'}>
                    <Image w={'290px'} h={'300px'} src='https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/22/full/1632254947-8566.jpg?im=FeatureCrop,size=(1200,900)'/>
                    </Flex>
                    <Box w={'50%'}>
                    <p> At Enhance Pvt Ltd., we are driven by a passion for innovation and a customer-centric approach. Our mission is to bridge the gap between business challenges and technology solutions, offering tailor-made strategies that drive growth, efficiency, and sustainability. With a team of experienced professionals, we strive to push the boundaries of what's possible in the world of technology.
                        Enhance Pvt Ltd. is a dynamic and innovative technology company dedicated to delivering cutting-edge solutions that empower businesses to thrive in the digital age. With a focus on excellence and a commitment to enhancing our clients' success, we leverage our expertise in various domains to provide high-impact services and products.
                    About Us:
                    Our Core Offerings:
                    Software Development: We specialize in developing custom software solutions that cater to a wide range of industries, including finance, healthcare, e-commerce, and more. Our team's expertise in multiple programming languages and frameworks ensures that we deliver high-quality, scalable, and secure applications.
                    Web and Mobile App Development: Our skilled developers craft web and mobile applications that engage users and deliver seamless experiences. From responsive websites to feature-rich mobile apps, we create solutions that align with your business goals.</p>
                    </Box>
                </Flex>
            </TabPanel>
            <TabPanel>
            <Flex>
                    <Flex justifyContent={'center'} w={'40%'}>
                    <Image w={'290px'} h={'300px'} src='https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/22/full/1632254947-8566.jpg?im=FeatureCrop,size=(1200,900)'/>
                    </Flex>
                    <Box w={'50%'}>
                    <p>Software Development: We specialize in developing custom software solutions that cater to a wide range of industries, including finance, healthcare, e-commerce, and more. Our team's expertise in multiple programming languages and frameworks ensures that we deliver high-quality, scalable, and secure applications.
                    Web and Mobile App Development: Our skilled developers craft web and mobile applications that engage users and deliver seamless experiences. From responsive websites to feature-rich mobile apps, we create solutions that align with your business goals.Enhance Pvt Ltd. is a dynamic and innovative technology company dedicated to delivering cutting-edge solutions that empower businesses to thrive in the digital age. With a focus on excellence and a commitment to enhancing our clients' success, we leverage our expertise in various domains to provide high-impact services and products.
                    About Us:
                    At Enhance Pvt Ltd., we are driven by a passion for innovation and a customer-centric approach. Our mission is to bridge the gap between business challenges and technology solutions, offering tailor-made strategies that drive growth, efficiency, and sustainability. With a team of experienced professionals, we strive to push the boundaries of what's possible in the world of technology.
                    Our Core Offerings:
                    </p>
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