import {
  HStack,
  Button,
  Link as ChakraLink,
  Box,
  Flex,
} from "@chakra-ui/react";
import {
  IoLogoVk,
  IoPersonSharp,
  IoNewspaperOutline,
  IoCodeSlashOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { IconType } from "react-icons/lib";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const NavBarMenu = () => {
  const router = useRouter();

  return (
    <Box as="nav" w="100%" position="fixed" top={4} zIndex={2}>
      <Flex justifyContent="center" alignItems="center">
        <DarkModeSwitch />
        <HStack>
          <MenuButton
            href="/"
            icon={IoPersonOutline}
            name="About"
            currentPathName={router.pathname}
          />
          <MenuButton
            href="/posts"
            icon={IoNewspaperOutline}
            name="Posts"
            currentPathName={router.pathname}
          />
          <MenuButton
            href="/projects"
            icon={IoCodeSlashOutline}
            name="Projects"
            currentPathName={router.pathname}
          />
        </HStack>
      </Flex>
    </Box>
  );
};
interface MenuButtonProps {
  href: string;
  icon: IconType;
  name: string;
  currentPathName: string;
}

const MenuButton = ({
  href,
  icon: Icon,
  name,
  currentPathName,
}: MenuButtonProps) => (
  <ChakraLink as={NextLink} href={href}>
    <Button
      variant="ghost"
      leftIcon={<Icon />}
      isActive={currentPathName === href}
    >
      {name}
    </Button>
  </ChakraLink>
);
