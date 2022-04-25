import React from 'react'
import { Flex, Button, Text, Box } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import MenuButton from './MenuButton'
const LeftPanel = () => {
    const logOut = () => {
        localStorage.setItem('isData', "false");
        document.location='/'
        // window.location.reload()

    }
    return (
        <React.Fragment>
            <Flex w="20%" minH="100%" borderRadius="5px" boxShadow='md' rounded='md' bg='white'>
        <Flex alignItems="center" direction="column" w="100%">
          <EmailIcon w="240px" h="120px" mt="50px"/>
          <Text color="black" fontSize='3xl' textAlign="center">Email Auto Sender</Text>
          <Flex direction="column" w="100%" alignItems="center" mt="5rem">

          {/* <Button w="75%"  colorScheme='teal'
           mt="70px" onClick={()=>{document.location='/'}}>
               Главная
               </Button> */}
<MenuButton text={"Главная"} Click={()=>{document.location='/'}}/>
<MenuButton text={"Шаблоны"} Click={()=>{document.location='templates'}}/>
<MenuButton text={"Выйти"} Click={()=>logOut()}/>
</Flex>
          {/* <Button w="75%" colorScheme='teal' 
        mt="2px" onClick={()=>{document.location='templates'}}>
            Шаблоны
            </Button>
          
          <Button  w="75%" colorScheme='teal' mt="2px" onClick={() => logOut()}>Выйти</Button> */}
        </Flex>
        </Flex>
        </React.Fragment>
    )
}

export default LeftPanel