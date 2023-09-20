import React from "react";

import { Text, HStack, StackProps, Icon, Heading, Stack, Link } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs"
import { BiLinkExternal } from "react-icons/bi"

type SectionHistoryListItemProps = {
  startDate: string;
  endDate: string;
  title: string;
  description?: string;
  links?: string[];
};

type SectionHistoryListProps = {
  items: SectionHistoryListItemProps[];
} & StackProps;

const SectionHistoryListItem = ({
  startDate,
  endDate,
  title,
  description,
  links
} : SectionHistoryListItemProps) => {
  return (
    <Stack 
      direction={{base: "column", md: "row"}}
      alignItems="start"
    >
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
        {links && (
          <Stack gap="1">
            {links?.map((link) => (
              <Link 
                key={link}
                color="tertiary" 
                fontStyle="italic"
                href={link} 
                isExternal
              >
                {link}
                <Icon as={BiLinkExternal} ml="1" h="4" w="4" />
              </Link>
            ))}
          </Stack>
        )}
        {description && (
          <Text fontStyle="italic" fontSize={{base: "md", md: "xl"}}>
            {description}
          </Text>
        )}
      </Stack>
    </Stack>
  )
};

const SectionHistoryList = ({
  items,
  ...props
} : SectionHistoryListProps) => {
  return (
    <Stack 
      gap="6" 
      {...props}
    >
      {items.map((item) => (
        <SectionHistoryListItem 
          key={item.title} 
          {...item} 
        />
      ))}
    </Stack>
  )
};

export default React.memo(SectionHistoryList);