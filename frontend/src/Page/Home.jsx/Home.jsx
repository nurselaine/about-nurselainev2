import React, { useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Box,
  Center,
  Flex,
  Stack,
  HStack,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
import Layout from "../../Component/Layout/Layout";
import "./Home.scss";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Home = () => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(mainControls, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <Box id="home" h="100vh" w="100vw" px={[8, 16, 24]}>
      <Stack spacing={5} h="80%" w="100%" flexDir="column" position='relative'>
        <Center
          w={["100%", "100%"]}
          h="auto"
          pt="3rem"
          justifyContent="flex-start"
          position="relative"
        >
          <HStack pl="3rem">
            <Box>
              <LineWithDot />
            </Box>
            <Box>
              <VStack alignItems="start" spacing={2}>
                <Text
                  fontSize={["3xl", "4xl", "6xl"]}
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
        <Box position="relative" h={"400px"} ref={ref}>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{
              duration: 0.75,
              delay: 0.5,
            }}
            animate={mainControls}
          >
            <Box
              position="absolute"
              top={0}
              left={["-50px", "-100px"]}
              h="400px"
              w="100vw"
              m="auto"
            >
              <Spline scene="https://prod.spline.design/WXZwPqbVMSUnQ7Sn/scene.splinecode" />
            </Box>
          </motion.div>
        </Box>
        <Box position='absolute' bottom="-200px" left='50%'>
          <Link to={"/timeline"}>
            <DownArrow />
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

const DownArrow = () => {
  return (
    <motion.button>
      <Flex flexDir="column" gap="none">
        <ChevronDownIcon className="downarrow" boxSize={10} />
        <ChevronDownIcon className="downarrow" boxSize={10} opacity={0.75} />
        <ChevronDownIcon className="downarrow" boxSize={10} opacity={0.5} />
      </Flex>
    </motion.button>
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
