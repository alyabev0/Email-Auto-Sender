import React from 'react'
import { Button, Text, Modal, ModalOverlay, ModalFooter, ModalContent, ModalHeader, ModalCloseButton, ModalBody} from '@chakra-ui/react'
const ModalWindow = ({isOpen, onClose}) => {
    return (
        <React.Fragment>
            <Modal size={"xs"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader minH="50px"></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="3xl" textAlign="center">Успешно!</Text>
            
          </ModalBody>

          <ModalFooter alignItems="center" justifyContent="flex-end">
          <Button colorScheme='teal' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </React.Fragment>
    )
}

export default ModalWindow