import React from "react";
import Layout from "../../Component/Layout/Layout";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";
import { Box, Center, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
//import animation from '../../utils/motion/motion.css';

const Home = () => {
  return (
    <Layout>
      <Stack 
        direction={["column-reverse", "row"]} 
        spacing={5} 
        h="100vh" 
        w="100vw" 
        px={[4, 16, 24]} 
      >
        <Flex direction="column" h="100%" w='50%'>
          <Center w="50%" h={["50%", "50%", "100%"]}>
            <Box w='100%'>
              <Text>
                Hi my name is <span className="animated-gradient">Elaine</span>
              </Text>
              <TypeAnimation
                sequence={[
                  "I'm a Developer",
                  1000,
                  "I'm a Nurse",
                  1000,
                  "I'm a Graduate Student at Seattle U",
                  1000,
                  "I'm a Dog mom",
                  1000,
                  "I'm a Lifelong learner",
                  1000,
                  "I'm a software engineer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontsize: "2em" }}
              />
            </Box>
          </Center>
        </Flex>
        <Center h={['100%']} w={['100%', '50%']}>
          <Box h='100%' w='100%'>
            <Spline scene="https://prod.spline.design/WXZwPqbVMSUnQ7Sn/scene.splinecode" />
          </Box>
        </Center>
      </Stack>
    </Layout>
  );
};

export default Home;
