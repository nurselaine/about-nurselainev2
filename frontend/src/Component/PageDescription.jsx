import { React, useEffect, useRef } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useInView, useAnimation } from "framer-motion";
import { slidein } from "../utils/motion/motion";

const PageDescription = ({ title, heading, overview }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start('visible');
    }
  }, [isInView]);


  return (
    <Box ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25
        }}
      >
        <Flex flexDir="column" gap={3}>
          <Text opacity={0.5} fontSize={["md", "2xl"]} color="gray.200">
            {title}
          </Text>
          <Heading as="b" fontSize={["2xl", "6xl"]}>
            {heading}
          </Heading>
          <Text w={["100%", "80%"]} fontSize={["md", "lg"]} color="gray.400">
            {overview}
          </Text>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default PageDescription;
