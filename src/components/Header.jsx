import React from "react";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery, Button, Image } from "@chakra-ui/react";
import Pics from "../assets/images/IMG20211022102741.jpg";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align={isNotSmallerScreen ? "flex-end" : "center"}>
          <Text
            fontSize="5xl"
            fontWeight="semibold"
          >
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Paul Ezemiwe
          </Text>
          <Text
            color={isDark ? "gray.200" : "gray.500"}
          >
            A Frontend Developer with working experience of web tools such as
            HTML, CSS, SCSS, JavaScript, React, Tailwind, Bootstrap.
          </Text>

          <Button
            mt={8}
            colorScheme="blue"
            onClick={() => window.open("www.google.com")}
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src={Pics}
        />
      </Flex>
    </Stack>
  );
}

export default Header;
