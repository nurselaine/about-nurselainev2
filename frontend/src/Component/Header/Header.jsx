import {useState, React} from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Link,
  Button,
  IconButton
} from "@chakra-ui/react";
import {HamburgerIcon, CloseIcon} from "@chakra-ui/icons";


const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [display, changeDisplay] = useState('none');

  return (
    <Flex>
      <Flex 
        position="fixed" 
        top="1rem" 
        right="1rem" 
        align="center"
      >

        {/* Desktop */}
        <Flex 
          display={['none', "none", "flex", "flex"]}  
        >
          <Link href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none']}
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>
      {/* Mobile Content */}
    </Flex>
  )
}

export default Header;