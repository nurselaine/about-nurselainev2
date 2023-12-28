import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
} from "@chakra-ui/react";
import Layout from "../../Component/Layout/Layout";
import { motion } from "framer-motion";
import PageDescription from "../../Component/PageDescription";
import SplineComponent from "../../Component/SplineComponent";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const ContactForm = () => {
  let [sent, setSent] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  let defaultParams = {
    name: name || "Unknown User.",
    email: email || "Unknown Email.",
    message: message || "Message empty",
  };

  const handleSubmit = async (e) => {

    try {
      const res = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        defaultParams,
        process.env.EMAILJS_PUBLIC_KEY
      );
      console.log("Email successfully sent", res.status, res.text);
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log("Error while sending email...", err);
    }
    
  };

  return (
    <Layout>
      <Box
        bgGradient='linear-gradient(360deg, #ffffff00 27%, #000000 67%)'
        h='100px'
        w='100%'
        position="relative"
      />
      <Flex
        id="contactform"
        flexDir={["column", "row-reverse"]}
        wrap="wrap"
        height="auto"
        w="100%"
      >
        <Box
          position="relative"
          h={["600px", "600px", "auto"]}
          w={["100%", "100%", "40%"]}
          className="moon-container"
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <Box
              zIndex={-3}
              h="100%"
              w="100%"
              position="absolute"
              top={0}
              left={0}
            >
              <Spline scene="https://prod.spline.design/57t1jpI5ELDi5QJx/scene.splinecode" />
            </Box>
          </motion.div>
        </Box>
        <Center
          h={["50%", "auto"]}
          w={["100vw", "100vw", "60%"]}
          justifyContent="center"
        >
          <Box
            bg="#151030"
            opacity={0.9}
            w="80%"
            borderRadius={"15px"}
            p="25px"
          >
            {!sent ? (
              <>
                <FormControl pb={["3rem"]}>
                  <PageDescription title="GET IN TOUCH" heading="Contact." />
                </FormControl>
                <FormControl pb={["3rem"]}>
                  <FormLabel>Your Name</FormLabel>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    type="name"
                    placeholder="Rosemary Waters"
                  />
                </FormControl>
                <FormControl pb={["3rem"]}>
                  <FormLabel>Your Email</FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="rosewater28@gmail.com"
                  />
                </FormControl>
                <FormControl pb={["2rem"]}>
                  <FormLabel>Your Message</FormLabel>
                  <Textarea
                    placeholder="Share your thoughts or let me know if you'd like a copy of my resume!"
                    size="lg"
                    h="150px"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
                <Button onClick={handleSubmit} size="lg">
                  Send
                </Button>
              </>
            ) : (
              <FormValidation />
            )}
          </Box>
        </Center>
        {/* <SplineComponent 
          h='100%'
          w='100%'
          t={0}
          l={0}
          spline={<Spline scene="https://prod.spline.design/iYBkgf2TMdfTWIoz/scene.splinecode" />}
        /> */}
        <Box zIndex={-4} position="absolute" top={0} left={0} w="100%" h="100%">
          <Spline scene="https://prod.spline.design/iYBkgf2TMdfTWIoz/scene.splinecode" />
        </Box>
      </Flex>
    </Layout>
  );
};

const FormValidation = () => {
  return (
    <Center h={["400px", "400px", "600px"]} >
      <Flex flexDir="column" m="auto">
        <Text textAlign="center">Your message has sent!</Text>
        <CheckCircleIcon color="green.400" mx="auto" mt="1rem" />
      </Flex>
    </Center>
  );
};

export default ContactForm;
