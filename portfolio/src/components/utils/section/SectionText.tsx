import React from "react";

import { Text, TextProps } from "@chakra-ui/react";

const SectionText = ({
  ...props
} : TextProps) => {
  return (
    <Text 
      color="tertiary"
      fontSize={{base: "md", md: "xl"}}
      {...props}
    />
  )
};

export default React.memo(SectionText);