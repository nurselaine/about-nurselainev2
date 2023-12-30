import { React } from "react";
import PageDescription from "../../Component/PageDescription";
import { Box, Flex, VStack } from "@chakra-ui/react";
import projects from "../../utils/data/Projects.json";
import ProjectCard from "../../Component/ProjectCard/ProjectModal";

const Project = () => {

  return (
    <Box id="projects" h="100%" w="100%">
      <VStack w="100&" pt={["0", "3rem", "5rem"]}>
        <Box>
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
    </Box>
  );
};

export default Project;