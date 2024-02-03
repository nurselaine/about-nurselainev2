import React, { memo } from "react";
import { Flex } from "@chakra-ui/react";
import icons from '../../utils/data/Timeline.json';
import TechCard from './TechCard';

const Tech = () => {
  return (
    <Flex 
      w='90%' 
      h='auto' 
      flexDir='row' 
      wrap='wrap' 
      justifyContent='center'
      m={'auto'}
    >
      {icons.tech.map((icon, idx) => (
        <TechCard src={icon} id={`techicon-${idx}`} />
      ))}
    </Flex>
  )
}

export default memo(Tech);