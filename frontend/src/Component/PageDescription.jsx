import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const PageDescription = ({ title, heading, overview }) => {
  return (
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
  );
};

export default PageDescription;
