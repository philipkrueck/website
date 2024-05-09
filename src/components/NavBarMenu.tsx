import React, { useEffect, useState } from "react";
import {
  HStack,
  Button,
  Link as ChakraLink,
  Box,
  Flex,
} from "@chakra-ui/react";
import {
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

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isShown, setIsShown] = useState(true);

  const checkScrolled = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setIsShown(false);
      setScrolled(st > 0);
    } else {
      setIsShown(true);
      setScrolled(st > 0);
    }
    setLastScrollTop(st <= 0 ? 0 : st);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrolled);
    return () => window.removeEventListener("scroll", checkScrolled);
  }, [lastScrollTop]);

  return (
    <Box
      as="nav"
      w="100%"
      position="fixed"
      zIndex={2}
      style={scrolled ? { backdropFilter: "blur(10px)" } : undefined}
      transition="transform 0.3s ease-out"
      transform={isShown ? "translateY(0)" : "translateY(-100%)"}
      display={isShown ? "block" : "none"}
    >
      <Flex justifyContent="center" alignItems="center" my={4}>
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
}: MenuButtonProps) => {
  const isActive =
    currentPathName === href ||
    (currentPathName.includes("/posts/") && href === "/posts");
  return (
    <ChakraLink as={NextLink} href={href}>
      <Button variant="ghost" leftIcon={<Icon />} isActive={isActive}>
        {name}
      </Button>
    </ChakraLink>
  );
};
