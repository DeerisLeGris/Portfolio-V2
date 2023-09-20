import React from "react";

import { HStack, Icon, List, ListIcon, ListItem, ListProps, Text } from "@chakra-ui/react";
import { BsFillArrowRightCircleFill, BsFillCircleFill } from "react-icons/bs";

type SectionListProps = {
  items: string[];
  direction?: "horizontal" | "vertical";
} & ListProps;

const SectionList = ({
  items,
  direction = "vertical",
  ...props
} : SectionListProps) => {
  if (direction === "horizontal") {
    return (
      <HStack flexWrap="wrap">
        {items.map((item, index) => (
          <Text
            key={index}
            color="tertiary"
            fontSize={{base: "md", md: "xl"}}
          >
            {item}
            {index !== (items.length - 1) && (
              <Icon
                as={BsFillCircleFill} 
                ml="2" 
                mb="1" 
                h="2" 
                w="2"
              />
            )}
          </Text>
        ))}
      </HStack>
    )
  }

  return (
    <List 
      color="tertiary"
      fontSize="xl"
      spacing="3"
      {...props}
    >
      {items.map((item, index) => (
        <ListItem 
          key={index} 
          fontSize={{base: "md", md: "xl"}}
        >
          <ListIcon as={BsFillArrowRightCircleFill} />
          {item}
        </ListItem>
      ))}
    </List>
  )
};

export default React.memo(SectionList);