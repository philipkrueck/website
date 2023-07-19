import { Box, useColorModeValue } from "@chakra-ui/react";

export const RoundedBox = ({ children }) => (
  <Box
    borderRadius="lg"
    mb={6}
    p={3}
    bg={useColorModeValue("gray.100", "whiteAlpha.500")}
    css={{ backdropFilter: "blur(10px)" }}
  >
    {children}
  </Box>
);
