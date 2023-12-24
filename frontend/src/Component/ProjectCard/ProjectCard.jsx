import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useDisclosure,
  Card,
  CardBody,
  Image,
  Text
} from "@chakra-ui/react";
import ProjectModal from "../ProjectModal";

const ProjectCard = ({ project, idx }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex mt={["0", "1rem", "2rem"]}>
        <Card
          id={`project-card-${idx}`}
          w={["300px"]}
          h={["150px"]}
          color="gray.400"
        >
          <CardBody>
            <Flex>
              <Box>
                <Image src={project.project_src} w="50px" h="50px" />
                <Stack>
                  <Heading as="h5" size={["sm", "md", "md"]} color="gray.50">
                    {project.project_name}
                  </Heading>
                  <Text fontSize="sm" color="gray.200">
                    {project.project_desc}
                  </Text>
                </Stack>
              </Box>
              <Button onClick={onOpen} ml="auto">
                View
              </Button>
              <Button>Hello</Button>
            </Flex>
          </CardBody>
        </Card>
      <ProjectModal 
        project={project} 
        idx={idx} onOpen={onOpen} 
        onClose={onClose} 
        isOpen={isOpen} 
      />
    </Flex>
  );
};

export default ProjectCard;
