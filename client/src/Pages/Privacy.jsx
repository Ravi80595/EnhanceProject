import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Privacy = () => {



return ( 
   <Box background={'white'} textAlign={'left'}>
    <Navbar/>
    <Text fontSize={'40px'} pt={90}>Who we are</Text>
    <Text pb={5}> Our website address is : </Text>
    <Box w={'90%'} m={'auto'}>
        <Text>
        Enhance Projects respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we collect, use, and share your personal data when you visit our website or use our services.     
        <br /><br />
        Information We Collect: We may collect personal identification information such as your name, email address, phone number, etc. when you register for an account, purchase products/services, sign up for our newsletter, or participate in surveys or contests.   
        </Text>
        <Text fontWeight="bold" pt={5}>Information We Collect  </Text>
        <Text>How We Use Your Information: The personal data we collect allows us to provide our services to you, process your payments, communicate with you about orders, products/services, special offers, and more. It also helps us improve our website and better understand our customers. </Text>
        <Text fontWeight='bold' pt={5}>How We Make Use of Your Data  </Text>
        <Text>
        We may use the collected information for a variety of purposes, including:  
        <br />
        Communication: We may use your contact information to react to your enquiries, provide customer service, and send you critical service updates and notifications. 
        <br />
        Personalization: We may use your information to personalize your experience on our website by displaying relevant content, suggestions, and adverts. 
        <br />
        Analytics: We may use non-personally identifiable information to examine website usage patterns, track trends, and improve our services. 
        <br />
        Legal Compliance: Your information may be used to comply with applicable laws, regulations, and legal processes.  
        </Text>
        <Text fontWeight='bold' pt={5}>Disclosure of Your Information  </Text>
        <Text>We do not sell or rent your personal data to third parties unless we have your consent or are required by law to do so. We may share your data with third party service providers who work on our behalf and are obligated to protect your information.   </Text>
        <Text>
        We may also reveal your information if we believe it is essential to:  
<br />
            We must safeguard our rights, privacy, safety, and property. 
<br />
            Apply our website policies and terms of service. 
<br />
            Respond to legal inquiries or comply with legal processes.  
        </Text>
        <Text pt={5} fontWeight='bold'>Security  </Text>
        <Text>We use a variety of security methods to keep your information safe. Please keep in mind, however, that no data transmission via the internet or electronic storage mechanism is completely safe. While we endeavor to protect your personal information using commercially acceptable techniques, we cannot guarantee its ultimate security. </Text>
        <Text fontWeight='bold' pt={5}>Privacy of Children    </Text>
        <Text>Individuals under the age of [age] are not permitted to use our website. We do not intentionally gather personal information from children under the age of [age]. Please contact us immediately if you are a parent or guardian and feel your child has provided us with personal information.  </Text>
        <Text>Changes to this Privacy Statement</Text>
        <Text>We retain the right, at any moment, to amend or update our Privacy Policy. Any modifications will be announced here, along with the new effective date. We invite you to revisit this page on a regular basis to stay up to date on our information practices. </Text>
        <Text>Please Contact Us  </Text>
        <Text pb={10}>Please contact us at info@enhance.com if you have any questions, issues, or requests about this Privacy Policy or how we manage your personal information.   
        <br />
        You indicate that you have read, understood, and agree to the terms of this Privacy Policy by using our website. </Text>
    </Box>
    <Footer/>
   </Box>
  )
}

export default Privacy