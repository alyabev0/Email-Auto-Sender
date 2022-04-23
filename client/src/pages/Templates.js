import React from 'react'
import { Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button, Textarea, Input, InputGroup, InputLeftAddon, Center} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import LeftPanel from '../components/LeftPanel'
const Templates = () => {
    return (
        <React.Fragment>
            <LeftPanel />
            <Flex w="80%" minH="100%" direction="column" alignItems="center">
            <Flex justifyContent="center" alignItems="center" mt="4%">
          <Text fontWeight='300'
          fontSize="50px" textAlign="center">Шаблоны писем</Text>
        </Flex>
        
        <Flex w="60%" minH="120px" maxH="30%" minW="360px" direction="row" mt="9%" border='1px' borderColor='gray.200'
        boxShadow='sm' borderTopRightRadius="7px" borderTopLeftRadius="7px" flexWrap="wrap" justifyContent="space-between">

            <Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%" >
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Имя получателя:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400'
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>

      <Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%" >
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Имя получателя:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400'
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>

      <Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%" >
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Имя получателя:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400'
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>

      <Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%" >
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Имя получателя:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400'
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>

      <Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%" >
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Имя получателя:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400'
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>

      <Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%" >
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Имя получателя:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400'
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>

        </Flex>

        <Flex w="60%" minH="150px" minW="360px" direction="column" border='1px' borderColor='gray.200'
          boxShadow='sm' borderBottomRightRadius="7px" borderBottomLeftRadius="7px">



        <Textarea minW="325px" maxH="100%" minH="100%" focusBorderColor='teal.400' borderTopRightRadius="none" borderTopLeftRadius="none"
        borderBottomRightRadius="7px" borderBottomLeftRadius="7px" spellCheck="false" />
        </Flex>


        {/* <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Close' : 'Open'}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu> */}

            </Flex>
        </React.Fragment>
    )
}

export default Templates