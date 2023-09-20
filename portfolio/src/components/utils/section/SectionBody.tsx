import React from "react";

import { Box, BoxProps } from "@chakra-ui/react";

const SectionBody = ({
  ...props
} : BoxProps) => {
  return (
    <Box 
      pl="16"
      {...props}
    />
  )
};

export default React.memo(SectionBody);