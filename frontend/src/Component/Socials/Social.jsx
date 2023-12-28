import React, { memo } from "react";
import social from "../../utils/data/Timeline.json";
import { Box, Button, Center, Link, HStack, Image, Text } from "@chakra-ui/react";

const Social = () => {
  return (
    <Center 
      w="100%" 
      h="auto" 
      wrap='nowrap'
      flexDir='column'
    >
      <Text 
        fontSize='xl' 
        w='100%' 
        color='gray.500' 
        opacity={0.8}
        pt='5rem' 
        pb='2rem'
      >
        Like what you see so far? Feel free to connect with me on GitHub and Linkedin!</Text>
      <Box>        
        {social.social.map((social, idx) => (
          <Link
            href={social.src}
            isExternal
          >          
            <Button
              id={`social-btn-${idx}`}
              bgGradient={"linear-gradient(-90.13deg,#00cea8 1.9%,#bf61ff 97.5%)"}
              borderRadius={"30px"}
              w={["173px"]}
              h={["63px"]}
              mx="0.75rem"
              my='0.75rem'
              p={0}
            >
              <HStack
                bg="#151030"
                borderRadius={"30px"}
                w={["170px"]}
                h={["60px"]}
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  h="25px"
                  w="25px"
                  mr="1rem"
                  style={{
                    filter:'invert(100%)'
                  }}
                />
                <Text>{social.label}</Text>
              </HStack>
            </Button>
          </Link>
        ))}
      </Box>
    </Center>
  );
};

export default memo(Social);
