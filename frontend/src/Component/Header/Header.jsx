import { useState, React } from "react";
import {
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon } from "@chakra-ui/icons";

const Header = () => {
  const [display, changeDisplay] = useState("none");

  return (
    <Flex
      id="navbar"
      w="100%"
      position="fixed"
      justifyContent="flex-end"
      zIndex={5}
      px={5}
    >
      <Link to={'/'}>
        <Button
          leftIcon={<MoonIcon />}
          as="a"
          variant="ghost"
          aria-label="Elaine Huynh"
          my={5}
          w="100%"
          mr='auto'
        >
          |  Elaine Huynh
        </Button>
      </Link>
      <Flex>
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <Link to={'/'}>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              
            >
              Home
            </Button>
          </Link>

          <Link to={'/timeline'}>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >
              About
            </Button>
          </Link>

          <Link to={"/contact"}>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Contact
            </Button>
          </Link>
        </Flex>

        {/* <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
          mr={2}
          my={7}
        /> */}
        {/* Mobile */}

        <IconButton
          aria-label="Open Menu"
          size="lg"
          icon={display === "flex" ? "" : <HamburgerIcon />}
          bg={display === "flex" && "none"}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
          ml={"auto"}
          my={3}
        />
      </Flex>
      {/* Mobile Content */}
      <Flex
        w="100vw"
        h="100vh"
        display={display}
        zIndex={20}
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={7}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center" h='100vh' w='100vw'>
          <Link href="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </Link>

          <Link href="/about">
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >
              About
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
