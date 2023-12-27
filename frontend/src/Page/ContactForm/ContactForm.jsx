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
    name: "Unknown User." || name,
    email: "Unknown Email." || email,
    message: "Message empty" || message
  }

  
  const handleSubmit = (e) => {

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, defaultParams)
      .then((res) => {
        console.log("Email successfully sent", res.status, res.text);
        setSent(true);
      })
      .error((err) => {
        console.log("Error while sending email...", err);
      })
  }

  return (
    <Layout>
      {/* <Box
        bgGradient='linear-gradient(360deg, #050816 20%, #000000 67%)'
        h='200px'
        w='100%'
      /> */}
      <Flex
        id="contactform"
        flexDir={["column","row-reverse"]}
        wrap="wrap"
        position="relative"
        pt={['100px']}
        height='auto'
        w='100%'
      >
        <Box 
          position="relative"
          h={["600px", "auto" ]}
          w={["100%", "100%", "60%"]} 
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.25
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
              <Spline
                className="moon"
                scene="https://prod.spline.design/57t1jpI5ELDi5QJx/scene.splinecode"
              />
            </Box>
          </motion.div>

        </Box>
        <Center 
          h={["50%", "auto"]} 
          w={["100vw", "100vw", "40%"]}
          justifyContent='center'
        >
          <Box
            bg="#151030"
            opacity={0.9}
            w="90%"
            borderRadius={"15px"}
            p="25px"
          >
          {
            !sent ? (
              <>
                <FormControl pb={['3rem']}>
                  <PageDescription title="GET IN TOUCH" heading="Contact." />
                </FormControl>
                <FormControl pb={['3rem']}>
                  <FormLabel>Your Name</FormLabel>
                  <Input onChange={(e) => setName(e.target.value)} type="name" placeholder="Rosemary Waters" />
                </FormControl>
                <FormControl pb={['3rem']}>
                  <FormLabel >Your Email</FormLabel>
                  <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="rosewater28@gmail.com" />
                </FormControl>
                <FormControl pb={['2rem']}>
                  <FormLabel>Your Message</FormLabel>
                  <Textarea
                    placeholder="Share your thoughts or let me know if you'd like a copy of my resume!"
                    size="lg"
                    h='150px'
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormControl>
                <Button onSubmit={handleSubmit} size='lg'>Send</Button>
              </>

            ) : (
              <FormValidation />
            )
          }
          </Box>
        </Center>

        <Box zIndex={-4} position="absolute" top={0} w="100%" h="100%">
          {/* <Spline scene="https://prod.spline.design/iYBkgf2TMdfTWIoz/scene.splinecode" /> */}
        </Box>
      </Flex>
    </Layout>
  );
};

const FormValidation = () => {
  return (
    <Flex>
      <Text>
        Your message has sent!
      </Text>
      <CheckCircleIcon />
    </Flex>
  )
}

export default ContactForm;
