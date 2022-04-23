import React from 'react'
import { Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button, Textarea, EditableTextarea  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import LeftPanel from '../components/LeftPanel'
const Templates = () => {
    return (
        <React.Fragment>
            <LeftPanel />
            <Flex w="80%" minH="100%" direction="column" alignItems="center">
            <Flex justifyContent="center" alignItems="center" mt="4%">
          <Text fontWeight='300'
          fontSize="50px">Шаблоны писем</Text>
        </Flex>
        
        <Flex w="60%" minH="100px" direction="column" mt="9%" border='1px' borderColor='gray.200'
        boxShadow='sm' borderTopRightRadius="7px" borderTopLeftRadius="7px">
            {/* <Flex w="100%" minH="20%" border='1px' borderColor='gray.200'></Flex>
            <Flex w="100%" minH="80%" border='1px' borderColor='gray.200'>
                <Textarea h="100%" maxH="100%" focusBorderColor='teal.500'></Textarea>
            </Flex> */}


        </Flex>

        <Flex w="60%" minH="150px" direction="column" border='1px' borderColor='gray.200'
          boxShadow='sm'
          borderBottomRightRadius="7px" borderBottomLeftRadius="7px">
        <Textarea maxH="100%" minH="100%" focusBorderColor='teal.500' borderTopRightRadius="none" borderTopLeftRadius="none"
        borderBottomRightRadius="7px" borderBottomLeftRadius="7px" spellCheck="false">

        </Textarea>
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