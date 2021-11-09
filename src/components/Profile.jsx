import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import Icon from "@chakra-ui/icon";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading
          fontWeight="extrabold"
          color="cyan.500"
          size="4xl"
          align={isNotSmallerScreen ? "flex-end" : "center"}
        >
          2+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text
          fontWeight="bold"
          fontSize="2xl"
          align={isNotSmallerScreen ? "flex-end" : "center"}
        >
          Frontend Developer, specialised in web development
        </Text>
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          mt={8}
          align={isNotSmallerScreen ? "flex-end" : "center"}
        >
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "gray.400" }}
          >
            <Icon color="white" p="4" as={DiAndroid} w="24" h="24" />
            <Text fontSize="xl" color="white" p="4" fontWeight="semibold">
              Android Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="white" p="4" as={DiCodeigniter} w="24" h="24" />
            <Text fontSize="xl" color="white" p="4" fontWeight="semibold">
              FLutter Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon color="white" p="4" as={DiWebplatform} w="24" h="24" />
            <Text fontSize="xl" color="white" p="4" fontWeight="semibold">
              Android Apps
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
