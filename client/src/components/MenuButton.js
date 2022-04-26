import React from "react";
import { Box } from "@chakra-ui/react";

const MenuButton = ({ text, Click }) => {
  return (
    <React.Fragment>
      <Box
        onClick={Click}
        mt="5px"
        as="button"
        height="40px"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="2px"
        w="85%"
        borderRadius="7px"
        fontSize="md"
        fontWeight="semibold"
        bg="white"
        borderColor="#319795"
        color="#319795"
        _hover={{ bg: "#ebedf0" }}
        _active={{
          bg: "#319795",
          transform: "scale(0.98)",
          borderColor: "gray.200",
          color: "white",
        }}
      >
        {text}
      </Box>
    </React.Fragment>
  );
};

export default MenuButton;
