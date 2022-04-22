import React from 'react'
import { Flex, Button, Text } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
const LeftPanel = () => {
    const logOut = () => {
        localStorage.setItem('isData', "false");
        window.location.reload()
    }
    return (
        <React.Fragment>
            <Flex w="20%" minH="100%" border='7px solid' borderColor='teal.200' borderRadius="10px">
        <Flex alignItems="center" direction="column" w="100%">
          <EmailIcon w="240px" h="120px" mt="30px"/>
          <Text color="black" fontSize='3xl'>Email Auto Sender</Text>
          <Button w="95%" colorScheme='teal' mt="70px">Button</Button>
          <Button w="95%" colorScheme='teal' mt="2px">Button</Button>
          <Button w="95%" colorScheme='teal' mt="2px" onClick={() => logOut()}>Выйти</Button>
        </Flex>
        </Flex>
        </React.Fragment>
    )
}

export default LeftPanel