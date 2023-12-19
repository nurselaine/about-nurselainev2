import React from "react";
import { Chrono } from "react-chrono";
import { motion } from "framer-motion";
import items from "../../utils/data/Timeline.json";
import Layout from "../../Component/Layout/Layout";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <Layout>
      <motion.div exit={{ opacity: 0 }}>
        <Box
          w="100%"
          h="100px"
          bgGradient="linear-gradient(360deg, #050816 20%, #000000 67%);"
        />
        <Box 
          id="timeline" 
          h="100%" 
          w="100%" 
          px={[8, 16, 24]}
          bg="#050816"
        >
          <Flex flexDir="column" gap={3}>
            <Text opacity={0.5} fontSize={["md", "lg"]} color="gray.200">
              Introduction
            </Text>
            <Heading as="b" fontSize={["2xl", "4xl"]}>
              Overview
            </Heading>
            <Text w={["80%", "60%"]} fontSize={["md", "lg"]} color="gray.400">
              {items.overview}
            </Text>
          </Flex>
          <Center w="100%" pt="10rem">
            <Box h="100%" w="100%">
              <Chrono
                items={items.items}
                mode="VERTICAL_ALTERNATING"
                theme={{
                  primary: "#D53F8C", // pink 500
                  secondary: "#050816", // purple 700
                  cardBgColor: "#718096", // gray.600
                  cardForeColor: "#050816",
                  titleColor: "#F7FAFC", // gray 50
                  cardTitleColor: "#E2E8F0",
                  cardSubtitleColor: "#050816",
                  titleColorActive: "#D53F8C", // pink 500
                }}
                fontSizes={{
                  cardText: '1.5rem',
                  cardTitle: '1.75rem',
                }}
                slideShow
                slideItemDuration={4500}
                scrollable={{}}
              />
            </Box>
          </Center>
          {/* <Box
            position="absolute"
            bottom={0}
            w='100%'

            bgGradient="linear-gradient(360deg, #19082c 24%, #040108 67%)"
            zIndex={-1}
          >
            <Spline scene="https://prod.spline.design/iYBkgf2TMdfTWIoz/scene.splinecode" />
          </Box> */}
        </Box>
      </motion.div>
      <motion.div>
        <Projects />
      </motion.div>
    </Layout>
  );
};

const Projects = () => {
  return (
    <Box>
      <Text>
        MY WORK
      </Text>
      <Heading>
        Projects.
      </Heading>
      <Text>
        {items.projects}
      </Text>
    </Box>
  )
}

export default Timeline;
