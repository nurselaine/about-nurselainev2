import React, {memo} from "react";
import { Box } from "@chakra-ui/react";

const SplineComponent = ({props}) => {
  return (
    <Box
      h={props.h}
      w={props.w}
      zIndex={-3}
      position='absolute'
      top={props.t}
      left={props.l}
    >
      {props.spline}
    </Box>
  )
}

export default memo(SplineComponent);