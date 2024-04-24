import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { NavBarMenu } from "./NavBarMenu";

export const Layout = ({ children }) => (
  <Flex flexDirection="column" minHeight="100vh">
    <NavBarMenu />
    <Box>{children}</Box>
    <Spacer />
    <Footer />
  </Flex>
);
