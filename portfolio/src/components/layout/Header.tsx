import React from "react";

import { 
  Button, 
  Flex, 
  FlexProps, 
  HStack, 
  Heading, 
  Icon
} from "@chakra-ui/react";
import { 
  AiOutlineHome, 
  AiOutlineAppstore 
} from "react-icons/ai";

import portfolioContent from '../../portfolio_content.json';
import { Link } from "react-router-dom";

const Header = ({
  ...props
} : FlexProps) => {
  const links = [
    {
      link: "/",
      name: "Présentation",
      icon: AiOutlineHome
    },
    {
      link: "/projects",
      name: "Projets",
      icon: AiOutlineAppstore
    }
  ];

  return (
    <Flex 
      h="20" 
      w="full" 
      px="8"
      position="fixed" 
      bg="primary"
      color="secondary"
      alignItems="center"
      justifyContent="space-between"
      pt="10px" // To counterbalance the outset image
      sx={{
        borderBottom: "10px solid transparent",
        borderImage: "url(/header_motif.png) 30 repeat",
        borderImageOutset: "10px"
      }}
      {...props}
    >
      <Heading p="0">
        {portfolioContent.name}
      </Heading>
      <HStack gap="4">
        {links.map(({link, name, icon}) => (
          <Button
            as={Link}
            to={link}
            leftIcon={<Icon as={icon} w="5" h="5"/>}
            bg="secondary"
            color="tertiary"
          >
            {name}
          </Button>
        ))}
      </HStack>
    </Flex>
  );
};

export default React.memo(Header);