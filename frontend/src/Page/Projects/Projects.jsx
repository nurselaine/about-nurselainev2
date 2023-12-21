import { React } from "react";
import PageDescription from "../../Component/PageDescription";
import {
  Box,
  Center,
  Flex,
  VStack
} from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import projects from "../../utils/data/Projects.json";
import ProjectCard from "../../Component/ProjectModal";
import ContactForm from "../ContactForm/ContactForm";
import { motion } from "framer-motion";
import "./Projects.scss";

const Projects = () => {
  const features = projects.projects.features;
  console.log(features);

  return (
    <Box id="projects" h="100%" w="100%" bg='black' position='relative' zIndex={-2}>
  
      <Box
        bgGradient="linear-gradient(360deg, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 75%)"
        w="100%"
        h="150px"
      />
      <VStack w="100&" px={[8, 16, 24]} pt={["0", "3rem", "5rem"]}>
        <Box bg='black' opacity={0.8}>
          <PageDescription
            title="MY WORK"
            heading="Projects."
            overview={projects.about_projects}
          />
        </Box>
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
        <Box position="absolute" top={0} w="100%" h="110%" zIndex={-1}>
          <Spline scene="https://prod.spline.design/iYBkgf2TMdfTWIoz/scene.splinecode" />
        </Box>
      </VStack>
      {/* page transition */}
      <Center h='100vh' w='100%'>
        <Spline className="moon" scene="https://prod.spline.design/57t1jpI5ELDi5QJx/scene.splinecode" />
      </Center>
      <ContactForm />
    </Box>
  );
};

export default Projects;
