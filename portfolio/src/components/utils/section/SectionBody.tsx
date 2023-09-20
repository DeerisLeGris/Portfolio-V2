import React from "react";

import { Stack, StackProps } from "@chakra-ui/react";

const SectionBody = ({
  ...props
} : StackProps) => {
  return (
    <Stack 
      pl="16"
      gap="4"
      {...props}
    />
  )
};

export default React.memo(SectionBody);