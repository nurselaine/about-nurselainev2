import React from "react";
import Layout from "../../Component/Layout/Layout";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";
import {
  Box,
  Center,
  Circle,
  Divider,
  Flex,
  Spacer,
  Stack,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
//import animation from '../../utils/motion/motion.css';
import style from "./Home.scss";

const Home = () => {
  return (
    <Box 
      id="home"
      h="100vh"
      w="100vw"
      px={[8, 16, 24]}
    >
      <Stack
        direction="row"
        spacing={5}
        h='100%'
        w='100%'
        flexDirection='column'
      >
        <Center w={["100%", "100%"]} h='auto' pt='3rem' justifyContent='flex-start'>
          <HStack>
            <Box>
              <LineWithDot />
            </Box>
            <Box>
              <VStack alignItems="start" spacing={2}>
                <Text fontSize={["lg", "2xl", "5xl"]} as="b" numOfLines={1}>
                  👋🏻 Hi my name is{" "}
                  <span className="animated-gradient">Elaine</span>
                </Text>
                <Text fontSize={["xs", "md", "xl"]} as="b">
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
        <Center h={["60%", "60%"]} w={"100%"}>
          <Box h="100%" w="100%">
            <Spline className="orbs" scene="https://prod.spline.design/WXZwPqbVMSUnQ7Sn/scene.splinecode" />
          </Box>
        </Center>
      </Stack>
    </Box>
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
