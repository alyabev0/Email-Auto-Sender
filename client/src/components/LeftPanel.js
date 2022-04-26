import React from "react";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import MenuButton from "./MenuButton";
const LeftPanel = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  const logOut = () => {
    localStorage.setItem("isData", "false");
    document.location = "/";
  };
  return (
    <React.Fragment>
      <Flex
        w="20%"
        minH="100%"
        borderRadius="5px"
        boxShadow="md"
        rounded="md"
        bg="white"
      >
        <Flex alignItems="center" direction="column" w="100%">
          <EmailIcon minW="80px" w="50%" h="18%" />
          {isLargerThan1280 ? (
            <Text color="black" fontSize="3xl" textAlign="center">
              Email Auto Sender
            </Text>
          ) : (
            <Text color="black" fontSize="xl" textAlign="center">
              Email Auto Sender
            </Text>
          )}
          <Flex direction="column" w="100%" alignItems="center" mt="10%">
            <MenuButton
              text={"Главная"}
              Click={() => {
                document.location = "/";
              }}
            />
            <MenuButton
              text={"Шаблоны"}
              Click={() => {
                document.location = "templates";
              }}
            />
            <MenuButton text={"Выйти"} Click={() => logOut()} />
          </Flex>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default LeftPanel;
