import React from "react";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import Layout from "../../Component/Layout/Layout";
import PageDescription from "../../Component/PageDescription";
import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <Layout>
      <Box
        bgGradient='linear-gradient(360deg, #050816 20%, #000000 67%)'
        h='200px'
        w='100%'
      />
      <Flex 
        id="contactform" 
        flexDir="column" 
        position="relative"
      >
        <Box h={"900px"} w="90%" m='auto'>
          <FormControl
            bg="#151030"
            opacity={0.8}
            w="80%"
            m="auto"
            p="100px"
            spacing={5}
          >
            <PageDescription 
              title="GET IN TOUCH"
              heading="Contact."
            />
            <FormLabel>Your Name</FormLabel>
            <Input type="name" placeholder="Rosemary Waters" />
            <FormLabel>Your Email</FormLabel>
            <Input type="email" placeholder="rosewater28@gmail.com" />
            <FormLabel>Your Message</FormLabel>
            <Textarea 
              placeholder="Share your thoughts or let me know if you'd like a copy of my resume!"
              size='md'
            />
          </FormControl>
        </Box>
        <Center zIndex={-3} h="80vh" w="100%" position="absolute" top="50px">
          <Spline
            className="moon"
            scene="https://prod.spline.design/57t1jpI5ELDi5QJx/scene.splinecode"
          />
        </Center>
        <Box zIndex={-4} position="absolute" top={0} w="100%" h="100vh%">
          <Spline scene="https://prod.spline.design/iYBkgf2TMdfTWIoz/scene.splinecode" />
        </Box>
      </Flex>
    </Layout>
  );
};

export default ContactForm;
