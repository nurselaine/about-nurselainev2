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

const ProjectCard = ({ project, idx }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const displayProjectImage = project.images.length > 0;

  return (
    <Flex w="auto" wrap="wrap" gap={5} mt={["0","2rem","5rem"]} justifyContent="center">
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