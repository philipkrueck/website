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
  Button,
  Box,
} from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { RoundedBox } from "../components/RoundedBox";
import { IconType } from "react-icons/lib";

const Index = () => (
  <Box>
    <AboutBox />
    <SocialSection />
  </Box>
);

const AboutBox = () => (
  <RoundedBox>
    <HStack align={"top"}>
      <AboutTextSection />
      <Spacer width={10} />
      <ProfilePic />
    </HStack>
  </RoundedBox>
);

const AboutTextSection = () => (
  <VStack align={"left"}>
    <Heading variant="page-title">Philip Krück</Heading>
    <Text fontSize={"sm"}>Cloud | Backend | DevOps | Command Line Enthusiast</Text>
    <Text fontSize={"xs"}>
      I work mainly in Golang, Python, Rust and Kubernetes.
    </Text>
    <Text fontSize={"xs"}>
      I am passionate about my work as there is always more to learn.
    </Text>
    <Text fontSize={"xs"}>
      I see myself as a craftsman who is constantly striving to improve at his craft.
    </Text>
  </VStack>
);

const ProfilePic = () => (
  <Avatar
    size="2xl"
    name="Philip Krück"
    src="profile.png"
    ignoreFallback={true}
  />
);

const SocialSection = () => (
  <Box p={0}>
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
        url="https://x.com/philipkrueck"
        text="@philipkrueck"
        leftIcon={IoLogoTwitter}
      />
      <SocialItem
        url="https://www.youtube.com/channel/UC5gh-x8bh4psIRdKLpf5Cbw"
        text="@philipkrueck"
        leftIcon={IoLogoYoutube}
      />
      <SocialItem
        url="mailto:hi@philipkrueck.com"
        text="hi@philipkrueck.com"
        leftIcon={IoMail}
      />
    </List>
  </Box>
);

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
