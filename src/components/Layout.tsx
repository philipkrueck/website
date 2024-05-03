import { Container, Flex, Spacer } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { NavBarMenu } from "./NavBarMenu";

export const Layout = ({ children }) => (
  <Flex flexDirection="column" minHeight="100vh">
    <NavBarMenu />
    <Container maxWidth={750} mt={24}>
      {children}
    </Container>
    <Spacer />
    <Footer />
  </Flex>
);
