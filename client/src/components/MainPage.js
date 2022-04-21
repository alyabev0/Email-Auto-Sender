import React from 'react'
import { Button, Flex,} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const MainPage = () => {
    return (
        <React.Fragment>
             
    {/* поменять h на 100%  */}
      <Flex w="20%" minH="100%" bg='teal.200'>
        <Flex alignItems="center" direction="column" w="100%">
          <EmailIcon w="240px" h="120px"/>
          <Button w="95%" colorScheme='teal'>Button</Button>
          <Button w="95%" colorScheme='teal' mt="2px">Button</Button>
          <Button w="95%" colorScheme='teal' mt="2px">Button</Button>
        </Flex>
        </Flex>
      <Flex w="80%" minH="100%" direction="column">
          <Flex w="20px" h="20px" bg="black"/>
      </Flex>
        </React.Fragment>
    )
}

export default MainPage