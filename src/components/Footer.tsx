import { Flex, FlexProps } from "@chakra-ui/react";

export const Footer = (props: FlexProps) => (
  <Flex as="footer" {...props} position={"fixed"} bottom={4} mt={4}/>
);
