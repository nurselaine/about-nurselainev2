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
import Layout from "../../Component/Layout/Layout";
import PageDescription from "../../Component/PageDescription";
import "./ContactForm.scss";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const ContactForm = () => {
  return (
    <Layout>
      {/* <Box
        bgGradient='linear-gradient(360deg, #050816 20%, #000000 67%)'
        h='200px'
        w='100%'
      /> */}
      <Flex
        id="contactform"
        flexDir="row-reverse"
        wrap="wrap"
        position="relative"
        pt="4rem"
      >
        <Center h="auto" w={["100vw", "100vw", "40%"]} position="relative">
          <Box
            zIndex={-3}
            h="100%"
            w="100%"
            position="absolute"
            top="0px"
            left={0}
          >
            <Spline
              className="moon"
              scene="https://prod.spline.design/57t1jpI5ELDi5QJx/scene.splinecode"
            />
          </Box>
        </Center>
        <Center h={"900px"} w={["100vw", "100vw", "60%"]}>
          <FormControl
            bg="#151030"
            opacity={0.9}
            w="80%"
            borderRadius={"10px"}
            p="25px"
            spacing={10}
          >
            <Box pb={['2rem']}>
              <PageDescription title="GET IN TOUCH" heading="Contact." />
            </Box>
            <FormLabel>Your Name</FormLabel>
            <Input type="name" placeholder="Rosemary Waters" />
            <FormLabel>Your Email</FormLabel>
            <Input type="email" placeholder="rosewater28@gmail.com" />
            <FormLabel>Your Message</FormLabel>
            <Textarea
              placeholder="Share your thoughts or let me know if you'd like a copy of my resume!"
              size="md"
            />
          </FormControl>
        </Center>

        {/* <Box zIndex={-4} position="absolute" top={0} w="100%" h="100vh">
          <Spline scene="https://prod.spline.design/iYBkgf2TMdfTWIoz/scene.splinecode" />
        </Box> */}
      </Flex>
    </Layout>
  );
};

export default ContactForm;
