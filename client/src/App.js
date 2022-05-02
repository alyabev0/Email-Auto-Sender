/* eslint-disable eqeqeq */
import React from "react";
import MainPage from "./pages/MainPage";
import AuthForm from "./pages/AuthForm";
import Templates from "./pages/Templates";
import { Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Flex w="100%" h="100vh" bg="white">
        <Routes>
          <Route
            path="/"
            element={
              localStorage.getItem("isData") == "true" ? (
                <MainPage />
              ) : (
                <AuthForm />
              )
            }
          />
          <Route path="auth" element={<AuthForm />} />
          <Route
            path="templates"
            element={
              localStorage.getItem("isData") == "true" ? (
                <Templates />
              ) : (
                <AuthForm />
              )
            }
          />
        </Routes>
      </Flex>
    </div>
  );
}
export default App;
