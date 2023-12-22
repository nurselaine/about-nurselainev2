import React from "react";
import { Flex } from "@chakra-ui/react";
import icons from '../../utils/data/Timeline.json';
import TechCard from './TechCard';
import "./Tech.scss";

const Tech = () => {
  return (
    <Flex 
      w='80%' 
      h='auto' 
      flexDir='row' 
      wrap='wrap' 
      justifyContent='center'
      m={[8]}
    >
      {icons.tech.map((icon, idx) => (
        <TechCard src={icon} id={`techicon-${idx}`} />
      ))}
    </Flex>
  )
}

export default Tech;