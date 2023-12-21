import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  useDisclosure,
  HStack,
  Card, 
  CardBody, 
  Image, 
  Text, 
  VStack
} from "@chakra-ui/react";
import { CheckCircleIcon, SettingsIcon } from "@chakra-ui/icons";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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
    const rect = event.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xP = mouseX / width - 0.5;
    const yP = mouseY / height - 0.5;

    x.set(xP);
    y.set(yP);
  }

  const handleMouseLeave = (event) => {
    x.set(0);
    y.set(0);
  }


  const displayProjectImage = project.images.length > 0;

  return (
    <Flex mt={["0","1rem","2rem"]}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
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
              <Button onClick={onOpen} ml="auto">
                View
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </motion.div>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pb={0}>
            <Heading as='h3' size='lg' color='gray.50'>{project.project_name}</Heading>
            <Text fontSize='md' color='gray.200'>{project.project_desc}</Text>
            <HStack w="100%" wrap="wrap">
              {project.tech.map((t, idx) => (
                <Text fontSize="xs">#{t}</Text>
              ))}
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex w="100%" height="auto" overflow="auto" whiteSpace="nowrap">
              {displayProjectImage &&
                project.images.map((img, idx) => (
                  <Image
                    src={img}
                    w={["250px", "400px"]}
                    h={["200px", "350px"]}
                    alt={`${project.title}_image_${idx}`}
                  />
                ))}
            </Flex>
            <HStack justifyContent="center" spacing={6} p={6}>
              <Button>
                <Link href={project.site} isExternal>
                  Visit Site
                </Link>
              </Button>
              <Button>
                <Link href={project.github} isExternal>
                  Github
                </Link>
              </Button>
            </HStack>
            <VStack>
              <Text 
                fontSize='lg' 
                as='b'
                mr='auto' 
                color='gray.400'
              >
                About.
              </Text>
              <Text>{project.info}</Text>
              <Text 
                fontSize='lg' 
                as='b'
                mr='auto' 
                color='gray.400'
              >
                Features.
              </Text>
              <List>
                {project.features.map((ft, idx) => (
                  <ListItem>
                    <ListIcon
                      id={`feature-${idx}`}
                      as={CheckCircleIcon}
                      color="green.500"
                    />
                    {ft}
                  </ListItem>
                ))}
              </List>
              <Text 
                fontSize='lg' 
                as='b'
                mr='auto' 
                color='gray.400'
              >
                Streth Goals.
              </Text>
              <List>
                {project.stretch.map((ft, idx) => (
                  <ListItem>
                    <ListIcon as={SettingsIcon} color="green.500" />
                    {ft}
                  </ListItem>
                ))}
              </List>
            </VStack>
            <Text></Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default ProjectCard;