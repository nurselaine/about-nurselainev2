import React from "react";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import {
  Box,
  Center,
  Flex,
  Stack,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "./Home.scss";
import Layout from "../../Component/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <motion.div exit={{ opacity:0 }}>
      <Box id="home" h="100vh" w="100vw" px={[8, 16, 24]}>
        <Stack spacing={5} h="80%" w="100%" flexDir="column">
          <Center
            w={["100%", "100%"]}
            h="auto"
            pt="3rem"
            justifyContent="flex-start"
          >
            <HStack pl="3rem">
              <Box>
                <LineWithDot />
              </Box>
              <Box>
                <VStack alignItems="start" spacing={2}>
                  <Text
                    fontSize={["3xl", "4xl", "5xl", "6xl"]}
                    as="b"
                    numOfLines={1}
                    color="gray.200"
                  >
                    👋🏻 Hi my name is{" "}
                    <span className="animated-gradient">Elaine</span>
                  </Text>
                  <Text fontSize={["sm", "lg", "2xl"]} as="b" color="gray.200">
                    I am a
                    <TypeAnimation
                      sequence={[
                        " Developer",
                        1000,
                        " Nurse",
                        1000,
                        " Graduate Student",
                        1000,
                        " Dog mom",
                        1000,
                        " lifelong learner",
                        1000,
                        " software engineer",
                        1000,
                      ]}
                      speed={50}
                      repeat={Infinity}
                      style={{ color: "hotpink" }}
                    />
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </Center>
          <Box h={["45vh", "50vh"]} w="100vw">
            <Spline
              className="orbs"
              scene="https://prod.spline.design/WXZwPqbVMSUnQ7Sn/scene.splinecode"
            />
          </Box>
        </Stack>
        <Box position="absolute" bottom="1rem" left="50%">
          <Link to={"/timeline"}>
            <DownArrow />
          </Link>
        </Box>
      </Box>
      </motion.div>
    </Layout>
  );
};

const DownArrow = () => {
  return (
    <Flex flexDir="column" gap="none">
      <motion.button
        className="downarrow"
        animate={{ scale: 1.3 }}
        transition={{
          type: "spring",
          damping: 3,
          repeat: "infinite",
          delay: 0,
        }}
      >
        <ChevronDownIcon boxSize={10} />
      </motion.button>
      <motion.button
        className="downarrow"
        animate={{ scale: 1.2 }}
        transition={{
          type: "spring",
          damping: 3,
          repeat: "infinite",
          delay: 0.2,
        }}
      >
        <ChevronDownIcon boxSize={10} opacity={0.75} />
      </motion.button>
      <motion.button
        className="downarrow"
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          damping: 3,
          repeat: "infinite",
          delay: 0.3,
        }}
      >
        <ChevronDownIcon boxSize={10} opacity={0.5} />
      </motion.button>
    </Flex>
  );
};

const LineWithDot = () => {
  return (
    <div className="line">
      <div className="dot"></div>
    </div>
  );
};

export default Home;
