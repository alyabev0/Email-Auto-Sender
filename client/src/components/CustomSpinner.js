import React from "react";
import { Spinner, Text } from "@chakra-ui/react";

function CustomSpinner({ isSuccess }) {
  if (isSuccess === false)
    return <Text fontSize="xl">Ошибка: Попробуйте перезайти.</Text>;
  else if (isSuccess === true) return <Spinner />;
}

export default CustomSpinner;
