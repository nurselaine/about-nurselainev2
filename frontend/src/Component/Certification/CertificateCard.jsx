import React from "react";
import { Center, Image, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

const CertificateCard = ({ certificate }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x);
  const springY = useSpring(y);

  const rotateX = useTransform(
    springX, 
    [-0.5, 0.5],
    ["-27.5deg", "27.5deg"]
  );

  const rotateY = useTransform(
    springY,
    [-0.5, 0.5],
    ["-27.5deg", "27.5deg"]
  );

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPos = mouseX / width - 0.5;
    const yPos = mouseY / height - 0.5;

    x.set(xPos);
    y.set(yPos);
  }

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="tilt"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
    >
      <Center
        bgGradient="linear-gradient(-90.13deg,#00cea8 1.9%,#bf61ff 97.5%)"
        w={["100%", "243px"]}
        h={["283px"]}
        m="0.5rem"
        rounded="lg"
      >
        <Center
          w={["99%", "240px"]}
          h={["280px"]}
          bg="#151030"
          borderRadius={8}
          display="flex"
          flexDir="column"
          justifyContent="center"
        >
          <Image
            src={certificate.src}
            alt={certificate.title}
            w="75px"
            h="75px"
          />
          <Heading pt="3rem" as="h3" size="md" textAlign="center">
            {certificate.title}
          </Heading>
        </Center>
      </Center>
    </motion.div>
  );
};

export default CertificateCard;
