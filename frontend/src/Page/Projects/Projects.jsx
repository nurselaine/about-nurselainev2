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
        
      </VStack>
      {/* page transition */}
      <Box 
        bgGradient={'linear-gradient(180deg, rgba(0,0,0,1) 37%, rgba(0,0,0,0.88763427734375) 54%, rgba(0,0,0,0.6775502437303047) 73%, rgba(0,0,0,0.2713877787443102) 92%)'}
        w='100%'
        h='150px'
      />
      
      <Box>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Projects;
