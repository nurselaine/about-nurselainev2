import React from "react";
import { Box } from "@chakra-ui/react";

const GradientBox = ({height, color1, color2}) => {
  return (
    <Box 
      w='100%'
      h={height}
      zIndex={4}
      bgGradient={`linearGradient(360deg, {color1} 24%, {color2} 67%)`}
    />
  )
}

export default GradientBox;