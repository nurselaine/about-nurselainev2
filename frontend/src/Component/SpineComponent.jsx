import React from "react";
import { Box } from "@chakra-ui/react";

const SpineComponent = React.memo({props}) => {
  return (
    <Box
      h={props.h}
      w={props.w}

    >
      {props.src}
    </Box>
  )
}

export default SpineComponent;