import React from "react";
import PageDescription from "../Component/PageDescription";
import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import projects from "../utils/data/Projects.json";
import GradientBox from "../Component/GradientBox";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box id="projects" h="100%" w="100%" pt="10rem" position="relative">
      <VStack w="100&" px={[8, 16, 24]}>
        <PageDescription
          title="MY WORK"
          heading="Projects."
          overview={projects.about_projects}
        />
        <Flex w="100%" wrap="wrap" gap={5} mt='5rem' justifyContent='center'>
          {projects.projects.map((project) => (
            <Card w={["300px"]} h={["150px"]} color='gray.400'>
              <CardBody>
                <Flex>
                  <Box>
                    <Image src={project.project_src} w="50px" h="50px" />
                    <Stack>
                      <Heading as="h5" size={["sm","md","md"]} color='gray.50'>
                        {project.project_name}
                      </Heading>
                      <Text fontSize='sm' color='gray.200'>{project.project_desc}</Text>
                    </Stack>
                  </Box>
                  <Button ml="auto">View</Button>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </Flex>
      </VStack>
      <Box position="absolute" top={0} w="100%" h='110%' zIndex={-1}>
        <Spline scene="https://prod.spline.design/iYBkgf2TMdfTWIoz/scene.splinecode" />
      </Box>
    </Box>
  );
};

export default Projects;
