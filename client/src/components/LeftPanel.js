import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
const LeftPanel = () => {
    return (
        <React.Fragment>
            <Flex w="20%" minH="100%" bg='teal.200'>
        <Flex alignItems="center" direction="column" w="100%">
          <EmailIcon w="240px" h="120px"/>
          <Button w="95%" colorScheme='teal'>Button</Button>
          <Button w="95%" colorScheme='teal' mt="2px">Button</Button>
          <Button w="95%" colorScheme='teal' mt="2px">Button</Button>
        </Flex>
        </Flex>
        </React.Fragment>
    )
}

export default LeftPanel