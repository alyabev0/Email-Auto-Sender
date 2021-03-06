/* eslint-disable eqeqeq */
import React, { useState } from "react";
import axios from "axios";
import { Flex, Button, Input, Text, Spinner } from "@chakra-ui/react";
const AuthForm = () => {
  const [data, setData] = useState({ email: "", pass: "" });
  const [valid, setValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const mailChange = (e) => {
    setValid(true);
    let val = e.target.value;
    setData({
      ...data,
      [e.target.name]: val,
    });
  };
  const passChange = (e) => {
    setValid(true);
    let val = e.target.value;
    val = val.replace(/\s/g, "");
    setData({
      ...data,
      [e.target.name]: val,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("finally: ", data.email, data.pass);
    if (
      (data.email != "" || undefined) &
      ((data.pass != "" || undefined) & data.email.includes("@"))
    ) {
      let service = data.email.substring(
        data.email.lastIndexOf("@") + 1,
        data.email.lastIndexOf(".")
      );
      try {
        await axios
          .post("http://localhost:3001/auth", {
            email: data.email,
            pass: data.pass,
            service: service,
          })
          .then(localStorage.setItem("isData", "true"))
          .then(
            setTimeout(() => {
              window.location.reload();
            }, "3000")
          );
      } catch (error) {
        console.log(error);
      }
    } else {
      setValid(false);
      localStorage.setItem("isData", "false");
    }
    setIsLoading(false);
  };
  var validBorder = valid === true ? "3px solid #38B2AC" : "3px solid red";
  return (
    <React.Fragment>
      <Flex
        w="100%"
        minH="100%"
        direction="column"
        alignItems="center"
        bg="white"
      >
        <Flex
          w="30%"
          mt="10%"
          fontSize="5xl"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize="6xl"
            bgGradient="linear(to-t, teal.300, teal.600)"
            lineHeight="66px"
            bgClip="text"
            fontWeight="semibold"
          >
            ??????????????????????
          </Text>
          {valid ? (
            <Text fontSize="xs" mt="10px" color="gray">
              ????????????????????, ?????????????? ???????????? ???? ?????????? ?????? ????????????????.
              <br />
            </Text>
          ) : (
            <Text fontSize="xs" mt="10px" color="red.500">
              ???? ?????????? ???????????????????????? ????????????.
              <br />
              ?????????????????? ???????????? ?????????????????? ????????????????.
            </Text>
          )}
        </Flex>
        <Flex w="25%" h="150px" mt="10px" minW="360px">
          <form onSubmit={handleSubmit}>
            <Input
              style={{ border: validBorder }}
              type="text"
              placeholder="?????? ??????????..."
              name="email"
              value={data.email}
              focusBorderColor="teal.400"
              mt="10px"
              onChange={(event) => mailChange(event)}
            />
            <Input
              style={{ border: validBorder }}
              type="password"
              placeholder="?? ?????? ?????? ????????????..."
              name="pass"
              value={data.pass}
              focusBorderColor="teal.400"
              mt="10px"
              onChange={(event) => passChange(event)}
            />
            <Button
              m="auto"
              mt="20px"
              w="100%"
              colorScheme="teal"
              bgGradient="linear(to-r, teal.300, teal.600)"
              type="submit"
            >
              {isLoading ? <Spinner></Spinner> : "??????????"}
            </Button>
          </form>
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default AuthForm;
