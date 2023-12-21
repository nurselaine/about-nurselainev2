import React from "react";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Image,
} from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <Flex id="contactform" flexDir="column" position="relative">
      <Box h={"900px"} w="100%">
        <FormControl bg='black' opacity={0.8} w='80%' m='auto' p='100px' spacing={5} >
          <FormLabel>Your Name</FormLabel>
          <Input type="name" placeholder="Rosemary Waters" />
          <FormLabel>Your Email</FormLabel>
          <Input type="email" placeholder="rose@gmail.com" />
          <FormLabel>Your Message</FormLabel>
          <Input
            type="message"
            placeholder={
              "Share your thoughts or let me know if you'd like a copy of my resume!"
            }
          />
        </FormControl>
      </Box>
      <Box w="100%" position="absolute" bottom={-200}>
        <Image src="/pinetrees.png" alt="pinetrees" w="100%" />
      </Box>
      <Center h='80vh' w='100%' position='absolute' top='50px'>
        <Spline className="moon" scene="https://prod.spline.design/57t1jpI5ELDi5QJx/scene.splinecode" />
      </Center>
      <Box position="absolute" top={0} w="100%" h="110%" zIndex={-1}>
          <Spline scene="https://prod.spline.design/iYBkgf2TMdfTWIoz/scene.splinecode" />
        </Box>
    </Flex>
  );
};

export default ContactForm;
