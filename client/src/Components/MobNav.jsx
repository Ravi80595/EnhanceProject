import {HamburgerIcon} from "@chakra-ui/icons"
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    DrawerCloseButton,
    Image,
    Tabs,
    TabList,
    Tab,
    Text,
    Flex,
    Box
  } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
// import ScrollToTopLink from "./ScrollToTopLink";
// import Logo3 from '../Images/Logo3.png'

const MobNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()



return (
    <Flex justifyContent="space-between" alignItems="center" background='black' width='100vw'>
       <Box pl={5}>
        <Link to='/home'>
          {/* <Image w={70} src={'Logo30'}/> */}
        <Text  fontWeight="bold" color='white' pr='20px'>Enhance</Text>
        </Link> 
      </Box>
      <Button p="8px" color="white" bg="black" onClick={onOpen}>
        <HamburgerIcon  w="30px" h="30px" />
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerOverlay />
        <DrawerContent>
        {/* <Image w="50px" src={Logo} backgroundColor='black'/> */}
        <DrawerCloseButton pt={['20px','10px']} mt={['10px',"50px"]} color='white'/>
          <DrawerBody className="drawer-box">
            <Flex mt="5px" m='20px' gap="20px" direction="column" >
              <Link to='/'>
                <Text>Home</Text></Link>
                <Link to='/about'>
                <Text>About Us</Text></Link>
                {/* <ScrollToTopLink to='/board'>
                <Text>Board</Text></ScrollToTopLink> */}
                <Link to='/builder'>
                <Text>Builders</Text></Link>
                <Link to='/contractors'>
                <Text>Contractors</Text></Link>
                <Link to='/groups'>
                <Text>Groups</Text></Link >
                <Link to='/contact'>
                <Text>Contact us</Text>
                </Link>
            </Flex>
            {/* <Text mt="15px">MY ACCOUNT</Text> */}
            {/* <Flex direction="column">
                {/* <MobLogin name="Sign In" />  */}
                 {/* <MobLogin name="Register" /> */}
            {/* </Flex> */} 
          </DrawerBody>
        </DrawerContent>
      </Drawer>
     
      {/* <Flex gap="10px" mr="10px">
        <IoIosHeartEmpty className={styles.logo} />
        <BsBag className={styles.logo} />
      </Flex> */}
    </Flex>
  );
};

export default MobNav;