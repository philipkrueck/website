import * as Chakra from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
const { Thead, Tbody, Table, Code, Alert, Box, chakra, Kbd, Link } = Chakra;

const MdxList = chakra("ul", {
  base: {
    mt: "0.5rem",
    ml: "1.25rem",
    "blockquote &": { mt: 0 },
    "& > * + *": {
      mt: "0.25rem",
    },
  },
});

export const MDXComponents = {
  ...Chakra,
  LinkedImage: ({ href, ...props }) => (
    <Link display="block" my="10" href={href}>
      <MDXComponents.Image {...props} />
    </Link>
  ),
  h1: (props) => <Heading as="h1" size="h1" {...props} />,
  h2: (props) => <Heading as="h2" size="h2" {...props} />,
  h3: (props) => <Heading as="h3" size="h3" {...props} />,
  h4: (props) => <Heading as="h4" size="h4" {...props} />,
  hr: (props) => <chakra.hr my="4rem" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  code: Code,
  kbd: Kbd,
  br: ({ reset, ...props }) => (
    <Box
      as={reset ? "br" : undefined}
      height={reset ? undefined : "24px"}
      {...props}
    />
  ),
  table: Table,
  th: Thead,
  td: Tbody,
  a: (props) => <Link variant="underline" colorPalette="purple" {...props} />,
  p: (props) => (
    <chakra.p
      css={{
        mt: "1.25rem",
        lineHeight: 1.7,
        "blockquote &": { mt: 0 },
      }}
      {...props}
    />
  ),
  ul: (props) => <MdxList {...props} />,
  ol: (props) => <MdxList as="ol" {...props} />,
  li: (props) => <chakra.li pb="4px" listStyleType="disc" {...props} />,
  blockquote: (props) => (
    <Alert
      as="blockquote"
      mt="4"
      role="none"
      fontSize="md"
      status="warning"
      borderWidth="1px"
      borderColor="orange.200"
      variant="subtle"
      rounded="lg"
      my="1.5rem"
      px="1.25rem"
      py="1rem"
      {...props}
    />
  ),
  IconsList: null,
  PropsTable: () => null,
};
