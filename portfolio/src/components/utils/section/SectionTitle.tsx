import React from "react";
import { Box, HStack, Heading, Icon, Stack } from "@chakra-ui/react";
import { IconType } from "react-icons";

type SectionTitleProps = {
  title: string;
  icon: IconType;
}

const SectionTitle = ({
  title,
  icon
} : SectionTitleProps) => {
  return (
    <HStack color="tertiary" gap="4">
      <Icon as={icon} h="12" w="12" />
      <Stack 
        w={{base: "full", md: "max-content"}}
        mt="2"
      >
        <Heading size={{base: "xl", md: "2xl"}}>
          {title}
        </Heading>
        <Box 
          h="2" 
          bg="tertiary"
          borderRadius="full"
        >
        </Box>
      </Stack>
      
    </HStack>
  )
};

export default React.memo(SectionTitle);