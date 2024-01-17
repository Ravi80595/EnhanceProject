import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from '../CSS/Footer.css'
import { BsFacebook, BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import {AiFillLinkedin} from 'react-icons/ai'
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
          <Link to='/about'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">About us</Text>
          </Link>
          <Link to='/contact'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Contact us</Text>
          </Link>
          <Text color={'Black'}>Email : info@Enhance</Text>
          </Stack>
          <Stack gap="10px">
          <Text fontSize="20px" fontWeight="700">Featured Categories</Text>
          <Link to='/'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Real Estate</Text>
          </Link>
          <Link to='/builder'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Builders</Text>
          </Link>
          <Link to='/contractors'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Contractors</Text>
          </Link>
          <Link to='/groups'>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Groups</Text>
          </Link>
          </Stack>
          <Stack gap="10px">
          {/* <Text fontSize="20px" fontWeight="700">Need Help</Text>
          <Text fontSize="16px" fontWeight="500" cursor="pointer"> Testimonials</Text> */}
          <Text fontSize="20px" fontWeight="700" paddingTop="1px"> Policy Info</Text>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Privacy Policy</Text>
          <Text fontSize="16px" fontWeight="500" cursor="pointer">Terms of Use</Text>
          </Stack>
          <Stack gap="10px" marginRight="20px">
          <Box color={'Black'}>
          <Heading pl={'25px'} pb={3}>ENHANCE</Heading>
        </Box>
            <Stack direction="horizontal" gap="25px">
              <a href="#"target="blank">
              <BsInstagram
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              /></a>
              <a href="#"target="blank">
              <BsFacebook
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              /></a>
              <a href="#"target="blank">
              <AiFillLinkedin
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              /></a>
              <a href="#" target="blank">
              <BsTwitter
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              /></a>
              <a href="#" target="blank">
              <BsYoutube
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              /></a>
            </Stack>
            <Text pt={3}>Plot No.14, <br /> Sector 44, Gurugram, <br /> Haryana 122003</Text>
          </Stack>
        </Stack>
        <a href="https://www.laudco.com/">
           <Text textAlign='center' pt={5} color='Black'>Created by Laudco Media</Text>
        </a>
</div>
  );
};

export default Footer;