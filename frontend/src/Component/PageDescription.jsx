import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { slidein } from "../utils/motion/motion";

const PageDescription = ({ title, heading, overview }) => {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      variants={slidein('left', 'tween', 0, 1)}
    >
      <Flex flexDir="column" gap={3}>
        <Text opacity={0.5} fontSize={["md", "lg"]} color="gray.200">
          {title}
        </Text>
        <Heading as="b" fontSize={["2xl", "4xl"]}>
          {heading}
        </Heading>
        <Text w={["100%", "80%"]} fontSize={["md", "lg"]} color="gray.400">
          {overview}
        </Text>
      </Flex>
    </motion.div>
  );
};

export default PageDescription;
