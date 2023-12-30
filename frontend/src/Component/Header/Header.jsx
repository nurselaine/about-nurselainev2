import { useState, React } from "react";
import { Flex, Button, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

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
      <Link to={"/"} style={{ marginRight: "auto" }}>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', duration: 0.5, ease: 'easeOut'}}
        >
          <Button
            leftIcon={<MoonIcon />}
            as="a"
            variant="ghost"
            aria-label="Elaine Huynh"
            my={5}
            w="100%"
            mr="auto"
          >
            | Elaine Huynh
          </Button>
        </motion.div>
      </Link>
      <Flex>
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ type: 'tween', duration: 0.5, ease: 'easeOut'}}
          >
            <Link to={"/"}>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ type: 'tween', delay: 0.3, duration: 0.5, ease: 'easeOut'}}
          >

          <Link to={"/timeline"}>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>
          </motion.div>

          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ type: 'tween', delay: 0.5, duration: 0.5, ease: 'easeOut'}}
          >

          <Link to={"/contactform"}>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
          </motion.div>
        </Flex>

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
        bg='#120e2a'
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

        <Flex flexDir="column" align="center" h="100vh" w="100vw">
          <Link to={"/"}>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link to={"/timeline"}>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link to={"/contactform"}>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;