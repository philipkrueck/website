import {
  Link as ChakraLink,
  Text,
  List,
  ListItem,
  Spacer,
  Heading,
  Avatar,
  VStack,
  HStack,
  Container,
  Button,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { RoundedBox } from "../components/RoundedBox";
import { IconType } from "react-icons/lib";

const Index = () => (
  <Container mt={59}>
    <RoundedBox>
      <HStack align={"top"}>
        <AboutSection />
        <Spacer width={10} />
        <ProfilePic />
      </HStack>
    </RoundedBox>
    <SocialSection />
    <DarkModeSwitch />
    <Footer />
  </Container>
);

const AboutSection = () => (
  <VStack align={"left"}>
    <Heading variant="page-title">Philip Krück</Heading>
    <Text fontSize={"sm"}>
      Hello, I&apos;m a software engineer based in Hamburg, Germany.
    </Text>
    <Text fontSize={"xs"}>
      I&apos;m passionate about learning new things and building software. I
      have experience in full stack web development, iOS development, DevOps and
      cloud computing. I work at Genesis Cloud as a Platform Engineer building
      the next generation of sustainable compute infrastructure. I also study
      part time at Georgia Tech for a Masters in Computer Science.
    </Text>
  </VStack>
);

const ProfilePic = () => (
  <Avatar
    size="2xl"
    name="Philip Krück"
    src="https://avatars.githubusercontent.com/u/46320394?s=400&u=911a59eb531ffae914a157bb99ba0a15c12bc5b7&v=4"
  />
);

const SocialSection = () => (
  <Container p={0}>
    <Heading size="md" mt={6}>
      Socials
    </Heading>
    <List>
      <SocialItem
        url="https://github.com/philipkrueck"
        text="@philipkrueck"
        leftIcon={IoLogoGithub}
      />
      <SocialItem
        url="https://linkedin.com/in/philipkrueck"
        text="@philipkrueck"
        leftIcon={IoLogoLinkedin}
      />
      <SocialItem
        url="mailto:hi@philipkrueck.com"
        text="hi@philipkrueck.com"
        leftIcon={IoMail}
      />
    </List>
  </Container>
);

const Footer = () => (
  <Text pt={20 } fontSize={"xs"} textAlign={"center"}>Thanks for visiting. © 2023. Stay curious, keep coding. 🚀</Text>
)

interface SocialItemProps {
  url: string;
  text: string;
  leftIcon: IconType; // Accept the icon component as a parameter
}

const SocialItem = ({ url, text, leftIcon: LeftIcon }: SocialItemProps) => (
  <ListItem>
    <ChakraLink href={url} target="_blank">
      <Button variant="ghost" leftIcon={<LeftIcon />}>
        {text}
      </Button>
    </ChakraLink>
  </ListItem>
);

export default Index;
