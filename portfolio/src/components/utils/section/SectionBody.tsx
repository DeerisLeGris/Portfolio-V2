import React from "react";

import { Stack, StackProps } from "@chakra-ui/react";

const SectionBody = ({
  ...props
} : StackProps) => {
  return (
    <Stack 
      pl={{base: "0", lg: "16"}}
      gap="4"
      {...props}
    />
  )
};

export default React.memo(SectionBody);