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
  VStack
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "./Home.scss";
import Layout from "../../Component/Layout/Layout";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Home = () => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(mainControls, { once: true});

  useEffect(() => {
    if(isInView){
      mainControls.start('visible');
    }
  }, [isInView])

  return (
    <Layout>
      <Box id="home" h="100vh" w="100vw" px={[8, 16, 24]}>
        <Stack spacing={5} h="80%" w="100%" flexDir="column">
          <Center
            w={["100%", "100%"]}
            h="auto"
            pt="3rem"
            justifyContent="flex-start"
            position='relative'
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
          <Box 
            position='absolute' 
            top='300px'
            left='0px'
            h={["auto"]} 
            w={["100%"]} 
            ref={ref}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{
                duration: 0.75,
                delay: 0.5
              }}
              animate={mainControls}
            >
               <Spline className="orbs" scene="https://prod.spline.design/WXZwPqbVMSUnQ7Sn/scene.splinecode" />
            </motion.div>
          </Box>
        </Stack>
        <Box position="absolute" bottom="1rem" left="50%">
          <Link to={"/timeline"}>
            <DownArrow />
          </Link>
        </Box>
      </Box>
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
