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


const MobNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // console.log('rav')


return (
    <Flex zIndex={999999999999} justifyContent="space-between" alignItems="center" background='transparent' w={'90%'} position='fixed'>
       <Box pl={5}>
        <Link to='/home'>
        <Text fontWeight="bold" color='gold' pr='20px'>Enhance</Text>
        </Link> 
      </Box>
      <Button color="gold" bg="transparent" onClick={onOpen}>
        <HamburgerIcon  w="30px" h="30px" />
        {/* <Text background={'red'}>Ravi</Text> */}
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton pt={['20px','10px']} mt={['10px',"10px"]} color='white'/>
          <DrawerBody className="drawer-box">
            <Flex mt="5px" m='20px' gap="20px" direction="column" >
              <Link to='/'>
                <Text>Home</Text></Link>
                <Link to='/about'>
                <Text>About Us</Text></Link>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MobNav;