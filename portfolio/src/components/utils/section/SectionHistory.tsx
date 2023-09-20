import React from "react";

import { Text, HStack, StackProps, Icon, Heading, Stack, Link } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs"
import { BiLinkExternal } from "react-icons/bi"

type SectionHistoryItemProps = {
  startDate: string;
  endDate: string;
  title: string;
  description?: string;
  link?: string;
};

type SectionHistoryProps = {
  items: SectionHistoryItemProps[];
} & StackProps;

const SectionHistoryItem = ({
  startDate,
  endDate,
  title,
  description,
  link
} : SectionHistoryItemProps) => {
  return (
    <HStack alignItems="start">
      <HStack 
        bg="tertiary" 
        color="secondary" 
        p="1" 
        borderRadius="md"
      >
        <Text fontSize="xl">
          {startDate}
        </Text>
        <Icon as={BsArrowRight} w="6" h="6" />
        <Text fontSize="xl">
          {endDate}
        </Text>
      </HStack>
      <Stack color="tertiary">
        <Heading size="lg">
          {title}
        </Heading>
        {link && (
          <Link 
            color="tertiary" 
            href={link} 
            isExternal
          >
            {link}
            <Icon as={BiLinkExternal} ml="1" h="4" w="4" />
          </Link>
        )}
        {description && (
          <Text fontStyle="italic" fontSize="xl">
            {description}
          </Text>
        )}
      </Stack>
    </HStack>
  )
};

const SectionHistory = ({
  items,
  ...props
} : SectionHistoryProps) => {
  return (
    <Stack {...props}>
      {items.map((item) => (
        <SectionHistoryItem 
          key={item.title} 
          {...item} 
        />
      ))}
    </Stack>
  )
};

export default React.memo(SectionHistory);