import {
  Link as ChakraLink,
  Image,
  Heading,
  Text,
  Card,
  CardBody,
  Stack,
  Center,
} from "@chakra-ui/react";

const Projects = () => (
  <Center>
    <ChakraLink
      href={"https://solstamp.io"}
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
    >
      <Card
        key={"solstamp"}
        mb="8"
        maxW="sm"
        _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
      >
        <CardBody>
          <Image src="solstamp.png" alt="solstamp" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{"solstamp.io"}</Heading>
            <Text>
              I'm building a collection of no-code solana tools including a NFT
              creator and token minter.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </ChakraLink>
    {/* <ChakraLink */}
    {/*   href={"https://omsplanner.pro"} */}
    {/*   textDecoration="none" */}
    {/*   _hover={{ textDecoration: "none" }} */}
    {/* > */}
    {/*   <Card */}
    {/*     key={"omsplanner"} */}
    {/*     mb="8" */}
    {/*     maxW="sm" */}
    {/*     _hover={{ transform: "scale(1.02)", transition: "0.2s" }} */}
    {/*   > */}
    {/*     <CardBody> */}
    {/*       <Image */}
    {/*         src="omsplanner-hero-image.png" */}
    {/*         alt="Green double couch with wooden legs" */}
    {/*         borderRadius="lg" */}
    {/*       /> */}
    {/*       <Stack mt="6" spacing="3"> */}
    {/*         <Heading size="md">{"omsplanner.pro"}</Heading> */}
    {/*         <Text> */}
    {/*           I built a planner for Online Masters students at Georgia Tech to */}
    {/*           optimally manage their studies in Notion. */}
    {/*         </Text> */}
    {/*       </Stack> */}
    {/*     </CardBody> */}
    {/*   </Card> */}
    {/* </ChakraLink> */}
  </Center>
);

export default Projects;
