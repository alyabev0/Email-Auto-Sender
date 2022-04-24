import React from 'react'
import { Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button, Textarea, Input, InputGroup, InputLeftAddon, Center} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import LeftPanel from '../components/LeftPanel'
import TemplateItems from '../components/TemplateItems'

const Templates = () => {
    return (
        <React.Fragment>
            <LeftPanel />
            <Flex w="80%" minH="100%" direction="column" alignItems="center">
            <Flex justifyContent="center" alignItems="center" mt="4%">
          <Text fontWeight='300'
          fontSize="50px" textAlign="center">Шаблоны писем</Text>
        </Flex>
        
        <Flex w="60%" minH="120px" h="20%"  minW="360px" direction="row" mt="5%" border='1px' borderColor='gray.200'
        boxShadow='sm' borderTopRightRadius="7px" borderTopLeftRadius="7px" flexWrap="wrap" justifyContent="space-between">

            <TemplateItems/>

      <Menu>
  <MenuButton margin-left="60%" w="30%" as={Button} rightIcon={<ChevronDownIcon />}>
    Выбрать шаблон
  </MenuButton>
  <MenuList>
    <MenuItem>Первый контакт</MenuItem>
    <MenuItem>Приглашение на собеседование</MenuItem>
    <MenuItem>Feedback после собеседования</MenuItem>
    <MenuItem>Письмо с отказом</MenuItem>
    <MenuItem>Письмо с ТЗ</MenuItem>
  </MenuList>
</Menu>
        </Flex>
        <Flex w="60%" minH="150px" minW="360px" direction="column" border='1px' borderColor='gray.200'
          boxShadow='sm' borderBottomRightRadius="7px" borderBottomLeftRadius="7px">
        <Textarea value={template.firstContact} minW="325px" maxH="100%" minH="100%" focusBorderColor='teal.400' borderTopRightRadius="none" borderTopLeftRadius="none"
        borderBottomRightRadius="7px" borderBottomLeftRadius="7px" spellCheck="false" />
        </Flex>
            </Flex>
        </React.Fragment>
    )
}

var template = {
    firstContact:
     ""
}

export default Templates