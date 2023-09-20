import React from "react";

import { LinkProps, Link, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

type SectionLinkProps = {
  icon?: IconType;
} & LinkProps

const SectionLink = ({
  icon,
  children,
  ...props
} : SectionLinkProps) => {
  return (
    <Link 
      display="flex"
      alignItems="center"
      color="tertiary" 
      fontStyle="italic"
      isExternal
      {...props}
    >
      {icon && (
        <Icon as={icon} mr="1" h="6" w="6" />
      )}
      {children}
    </Link>
  )
};

export default React.memo(SectionLink);