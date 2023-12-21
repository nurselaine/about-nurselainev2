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
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project, idx }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["27.5deg", "-27.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["27.5deg", "-27.5deg"]
  );

  const handleMouseMove = (event) => {
    console.log("Hello?");
    const rect = event.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xP = mouseX / width - 0.5;
    const yP = mouseY / height - 0.5;

    x.set(xP);
    y.set(yP);
  };

  const handleMouseLeave = (event) => {
    x.set(0);
    y.set(0);
  };

  return (
    <Flex mt={["0", "1rem", "2rem"]}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
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
              <Button onClick={() => {console.log("Hello")}} ml="auto">
                View
              </Button>
              <Button>Hello</Button>
            </Flex>
          </CardBody>
        </Card>
      </motion.div>
      {/* <ProjectModal 
        project={project} 
        idx={idx} onOpen={onOpen} 
        onClose={onClose} 
        isOpen={isOpen} 
      /> */}
    </Flex>
  );
};

export default ProjectCard;
