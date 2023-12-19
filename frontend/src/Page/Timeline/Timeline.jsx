import React from "react";
import { Chrono } from "react-chrono";
import items from "../../utils/data/Timeline.json";
import Layout from "../../Component/Layout/Layout";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

const Timeline = () => {
  return (
    <Layout>
      <Text>
        Introduction
      </Text>
      <Heading>
        Overview
      </Heading>
      <Text>
        {items.overview}
      </Text>
      <Center w="100vw" pt="10rem" >
        <Box h="100%" w="70%">
          <Chrono
            items={items.items}
            mode="VERTICAL_ALTERNATING"
          />
        </Box>
      </Center>
    </Layout>
  )
}

export default Timeline;