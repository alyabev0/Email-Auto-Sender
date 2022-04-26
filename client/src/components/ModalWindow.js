import React from 'react'
import CustomSpinner from './CustomSpinner'
import { Button, Text, Modal, ModalOverlay, ModalFooter, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Spinner} from '@chakra-ui/react'
const ModalWindow = ({isOpen, onClose, isSent, isSuccess}) => {
 //console.log(isSent)
// setIsSent(true)
//   console.log(isSent)
// const onCloseFunc = () =>{
//   onClose()
// }
if (isSent == null){
  var text1 = <p>Неудача:(</p>
} else if (isSent === false){
  var text1 = <Spinner />
}
// const text = <p>Успешно!</p>
// const spinner = {isSent} ? <text/> : <Spinner />

    return (
        <React.Fragment>
            <Modal size={"xs"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader minH="50px"></ModalHeader>
          <ModalCloseButton onClick={()=>{console.log("hi")}}/>
          <ModalBody>
            <Text fontSize="3xl" textAlign="center">
              {isSent
              ? "Успешно!"
              : <CustomSpinner isSuccess={isSuccess}/>
              }

              </Text>
          </ModalBody>
          <ModalFooter alignItems="center" justifyContent="flex-end">
          <Button colorScheme='teal' onClick={onClose}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </React.Fragment>
    )
}

export default ModalWindow