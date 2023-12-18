import { useState, React } from "react";
import {
  useColorMode,
  Switch,
  Box,
  Flex,
  Link,
  Button,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon } from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  const [menu, changeManu] = useState(false);

  return (
    <Flex
      id="navbar"
      w="100%"
      position="fixed"
      justifyContent="flex-end"
      zIndex={5}
    >
      <Link href="/" mr='auto'>
        <Button
          leftIcon={<MoonIcon />}
          as="a"
          variant="ghost"
          aria-label="Elaine Huynh"
          my={5}
          w="100%"
          color={isDark ? "gray.50" : "gray.800"}
        >
          | Elaine Huynh
        </Button>
      </Link>
      <Flex>
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <Link href="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              color={isDark ? "gray.50" : "gray.800"}
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
              color={isDark ? "gray.50" : "gray.800"}
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
              color={isDark ? "gray.50" : "gray.800"}
            >
              Contact
            </Button>
          </Link>
        </Flex>

        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
          mr={2}
          my={7}
        />
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

        <Flex flexDir="column" align="center" bgColor={isDark ? 'gray.800' : 'gray.50'} h='100vh' w='100vw'>
          <Link href="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              color={isDark ? "gray.50" : "gray.800"}
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
              color={isDark ? "gray.50" : "gray.800"}
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
              color={isDark ? "gray.50" : "gray.800"}
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
