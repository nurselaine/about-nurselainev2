import React from "react";
import { Box, Center, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import "./Tech.scss";

const TechCard = ({ src }) => {
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
    console.log("Hello?");
    const rect = event.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xP = mouseX / width - 0.5;
    const yP = mouseY / height - 0.5;

    x.set(xP);
    y.set(yP);
  };

  const handleMouseLeave = (event) => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      id='tech' 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
    >
      <Center
        className='border-wrap'
        bgGradient={'linear-gradient(-90.13deg,#00cea8 1.9%,#bf61ff 97.5%)'}
        borderRadius={'50%'}
        h={['83px', '123px']}
        w={['83px', '123px']}
        m={[ 2, 4 ]}
      >
        <Center
          bg='#151030'
          h={['80px', '120px']}
          w={['80px', '120px']}
          borderRadius={'50%'}
        >
          <Image 
            borderRadius='full'
            boxSize={['40px', '75px']}
            src={src}
            alt='tech-card'
          />
        </Center>
      </Center>
    </motion.div>
  )
}

export default TechCard;