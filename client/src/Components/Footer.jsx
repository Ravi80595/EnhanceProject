import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from '../CSS/Footer.css'
import { BsFacebook, BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import {AiFillLinkedin} from 'react-icons/ai'
import ScrollToTopLink from "./ScrollToTopLink";
// import ScrollToTopLink from "./ScrollToTopLink";
// import {ScrollToFAQLink, ScrollToReviewLink} from "./Scrolls";



const Footer = () => {


return (
  <div zIndex={999999999} className={styles.container} style={{background:'#DAA520',width:'100%',padding:'40px'}}>
  <Stack color='black' direction={["column",'row',"horizontal","horizontal"]} justify="space-between" w={'80%'} m={'auto'}>
    <Stack gap="10px">
      <Text fontSize="20px" fontWeight="700">
        Company
      </Text>
          <ScrollToTopLink to='/about'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">About us</Text>
          </ScrollToTopLink>
          <ScrollToTopLink to='/contact'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Contact us</Text>
          </ScrollToTopLink>
          <Text color={'Black'}>Email : info@enhance.com</Text>
          </Stack>
          <Stack gap="10px">
          <Text fontSize="20px" fontWeight="700">Featured Categories</Text>
          <ScrollToTopLink to='/'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Real Estate</Text>
          </ScrollToTopLink>
          <ScrollToTopLink to='/builder'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Builders</Text>
          </ScrollToTopLink>
          <ScrollToTopLink to='/contractors'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Contractors</Text>
          </ScrollToTopLink>
          <ScrollToTopLink to='/groups'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Groups</Text>
          </ScrollToTopLink>
          </Stack>
          <Stack gap="10px">
          {/* <Text fontSize="20px" fontWeight="700">Need Help</Text>
          <Text fontSize="16px" fontWeight="500" cursor="pointer"> Testimonials</Text> */}
          <Text fontSize="20px" fontWeight="700" paddingTop="1px"> Policy Info</Text>
          <Link to='/privacy'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Privacy Policy</Text>
          </Link>
          <Link to='/terms'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Terms of Use</Text>
          </Link>
          </Stack>
          <Stack gap="10px" marginRight="20px">
          <Box color={'Black'}>
          {/* <Heading pl={'25px'} pb={3}>ENHANCE</Heading> */}
        </Box>
            <Stack direction="horizontal" gap="25px">
              <a href="https://www.instagram.com/enhanceprojects?igsh=MnE5ajhrenJ3Ym84&utm_source=qr"target="blank">
              <BsInstagram
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              /></a>
              <a href="https://www.facebook.com/enhanceprojects?mibextid=LQQJ4d"target="blank">
              <BsFacebook
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              /></a>
              
            </Stack>
            <Text pt={3}>3N Shree Gopal Complex <br />Kutchery Road,<br />Ranchi, Jharkhand - 834001 </Text>
          </Stack>
        </Stack>
        <a href="https://www.laudco.com/" target="_blank">
           <Text textAlign='center' pt={5} color='Black'>Created by Laudco Media</Text>
        </a>
</div>
  );
};

export default Footer;