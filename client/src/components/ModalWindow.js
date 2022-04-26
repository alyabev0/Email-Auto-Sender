import React from "react";
import CustomSpinner from "./CustomSpinner";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const ModalWindow = ({ isOpen, onClose, isSent, isSuccess }) => {
  return (
    <React.Fragment>
      <Modal size={"xs"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader minH="50px"></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="3xl" textAlign="center">
              {isSent ? "Успешно!" : <CustomSpinner isSuccess={isSuccess} />}
            </Text>
          </ModalBody>
          <ModalFooter alignItems="center" justifyContent="flex-end">
            <Button colorScheme="teal" onClick={onClose}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default ModalWindow;
