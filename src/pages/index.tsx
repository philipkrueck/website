import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Heading,
  Avatar,
  VStack,
  HStack,
  Box,
  useColorModeValue,
  Container,
  Button,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";

const Index = () => (
  <Container mt={59}>
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      bg={useColorModeValue("gray.100", "whiteAlpha.500")}
      css={{ backdropFilter: "blur(10px)" }}
    >
      <HStack align={"top"}>
        <VStack align={"left"}>
          <Heading variant="page-title">Philip Krück</Heading>
          <Text fontSize={"sm"}>
            Hello, I&apos;m a software engineer based in Hamburg, Germany.
          </Text>
          <Text fontSize={"xs"}>
            I&apos;m passionate about learning new things and building software.
            I have experience in full stack web development, iOS development,
            DevOps and cloud computing. I work at Genesis Cloud as a Platform
            Engineer building the next generation of sustainable compute
            infrastructure. I also study part time at Georgia Tech for a Masters
            in Computer Science.
          </Text>
        </VStack>
        <Spacer width={10} />
        <Avatar
          size="2xl"
          name="Philip Krück"
          src="https://avatars.githubusercontent.com/u/46320394?s=400&u=911a59eb531ffae914a157bb99ba0a15c12bc5b7&v=4"
        />
      </HStack>
    </Box>

    <Heading size="md" mt={6}>
      Let&apos;s connect
    </Heading>
    <List>
      <ListItem>
        <ChakraLink href="https://github.com/philipkrueck" target="_blank">
          <Button variant="ghost" leftIcon={<IoLogoGithub />}>
            @philipkrueck
          </Button>
        </ChakraLink>
      </ListItem>
      <ListItem>
        <ChakraLink href="https://linkedin.com/in/philipkrueck" target="_blank">
          <Button variant="ghost" leftIcon={<IoLogoLinkedin />}>
            @philipkrueck
          </Button>
        </ChakraLink>
      </ListItem>
      <ListItem>
        <ChakraLink href="mailto:hi@philipkrueck.com" target="_blank">
          <Button variant="ghost" leftIcon={<IoMail />}>
            hi@philipkrueck.com
          </Button>
        </ChakraLink>
      </ListItem>
    </List>

    <DarkModeSwitch />
    <Footer>
      <Text>Made with coffee in Hamburg.</Text>
    </Footer>
  </Container>
);

export default Index;
