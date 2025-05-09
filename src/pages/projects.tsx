import {
  Link as ChakraLink,
  Image,
  Heading,
  Text,
  Card,
  CardBody,
  Stack,
  Grid,
} from "@chakra-ui/react";

type ProjectProps = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const Project = ({ name, description, image, link }: ProjectProps) => (
  <ChakraLink
    href={link}
    textDecoration="none"
    _hover={{ textDecoration: "none" }}
  >
    <Card
      key={name}
      mb="8"
      maxW="sm"
      _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
    >
      <CardBody>
        <Image src={image} alt="solstamp" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  </ChakraLink>
);

const Projects = () => (
  <Grid templateColumns="repeat(2, 1fr)" gap="6">
    <Project
      name=".dotfiles"
      description="My personal dotfiles will likely be the longest living project throughout my career."
      image="dotfiles.png"
      link="https://github.com/philipkrueck/homelab"
    />
    <Project
      name="solstamp.io"
      description="A collection of open-source no-code Solana tools including a fungible and non-fungible token minter."
      image="solstamp.png"
      link="https://solstamp.io"
    />
    <Project
      name="homelab"
      description="Kubernetes homelab hosting a variety of applications acting as a learning ground for my explorations into the K8s universe."
      image="homelab.png"
      link="https://github.com/philipkrueck/homelab"
    />
  </Grid>
);

export default Projects;
