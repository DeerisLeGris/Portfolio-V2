import React, { useCallback } from "react";

import { 
  Button, 
  Flex, 
  FlexProps, 
  HStack, 
  Heading, 
  Icon,
  IconButton
} from "@chakra-ui/react";
import { 
  AiOutlineHome, 
  AiOutlineAppstore 
} from "react-icons/ai";
import { 
  BiLogoLinkedinSquare ,
  BiLogoGithub
} from "react-icons/bi";

import { Link } from "react-router-dom";

import portfolioContent from '../../../portfolio_content.json';

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

  const handleLinkedinButtonClick = useCallback(() => window.open(portfolioContent.header.linkedinLink, "_blank"), []);
  const handleGithubButtonClick = useCallback(() => window.open(portfolioContent.header.githubLink, "_blank"), []);

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
      <HStack>
        <Heading p="0">
          {portfolioContent.header.name}
        </Heading>
        <IconButton 
          icon={<Icon as={BiLogoLinkedinSquare} h="5" w="5"/>}
          color="secondary"
          aria-label="linkedin"
          variant="link"
          onClick={handleLinkedinButtonClick}
        />
        <IconButton 
          icon={<Icon as={BiLogoGithub} h="5" w="5"/>}
          color="secondary"
          aria-label="linkedin"
          variant="link"
          onClick={handleGithubButtonClick}
        />
      </HStack>
      <HStack gap="4">
        {links.map(({link, name, icon}) => (
          <Button
            key={link}
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