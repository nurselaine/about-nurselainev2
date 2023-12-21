import { React } from "react";
import PageDescription from "../Component/PageDescription";
import {
  Box,
  Flex,
  VStack
} from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import projects from "../utils/data/Projects.json";
import ProjectCard from "../Component/ProjectModal";

const Projects = () => {
  const features = projects.projects.features;
  console.log(features);

  return (
    <Box id="projects" h="100%" w="100%" position="relative">
      <Box
        bgGradient="linear-gradient(360deg, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 75%)"
        w="100%"
        h="150px"
      />
      <VStack w="100&" px={[8, 16, 24]} pt={["7rem"]}>
        <PageDescription
          title="MY WORK"
          heading="Projects."
          overview={projects.about_projects}
        />
        <Flex
          w="100%"
          flexDir="row"
          wrap="wrap"
          gap={5}
          mt="5rem"
          justifyContent="center"
        >
          {projects.projects.map((project, idx) => (
            <ProjectCard project={project} idx={idx} />
          ))}
        </Flex>
      </VStack>
      <Box position="absolute" top={0} w="100%" h="110%" zIndex={-1}>
        <Spline scene="https://prod.spline.design/iYBkgf2TMdfTWIoz/scene.splinecode" />
      </Box>
    </Box>
  );
};

export default Projects;
