import React from "react";

import { Stack, StackProps } from "@chakra-ui/react";

const Section = ({
  ...props
} : StackProps) => {
  return (
    <Stack 
      gap="4"
      {...props}
    />
  )
};

export default React.memo(Section);