import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import './ContactForm.scss';

const ContactForm = () => {
  return (
    <Flex id='contactform'>
      <Box
        w='100%'
        h='300px'
        bgImage={'url(../../../public/assets/img/hero_bg.jpg)'}
      />
    </Flex>
  )
}

export default ContactForm;
