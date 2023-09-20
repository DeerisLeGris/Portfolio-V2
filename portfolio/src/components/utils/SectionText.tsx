import React from "react";

import { Text, TextProps } from "@chakra-ui/react";

const SectionText = ({
  ...props
} : TextProps) => {
  return (
    <Text 
      color="tertiary"
      fontSize="xl"
      ml="16"
      {...props}
    />
  )
};

export default React.memo(SectionText);