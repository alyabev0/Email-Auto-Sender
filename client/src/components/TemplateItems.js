import React from 'react'
import { Flex, Text, Input} from '@chakra-ui/react'

const TemplateItems = ({onChange, data}) => {
    // console.log(onChange, data)
    return (
        <React.Fragment>
<Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%">
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Имя получателя:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400' onChange={onChange} value={data.receiverName} name="receiverName"
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>

      <Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%" >
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Ваша должность:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400' onChange={onChange} value={data.myPosition} name="myPosition"
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>

      <Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%" >
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Название компании:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400' onChange={onChange} value={data.myCompany} name="myCompany"
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>

      <Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%" >
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Ваше имя:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400' onChange={onChange} value={data.myName} name="myName"
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>

      <Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%" >
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Должность получателя:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400' onChange={onChange} value={data.rPosition} name="rPosition"
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>

      <Flex alignItems="center" justifyContent="center" maxH="40px" minW="171px" w="30%" >
                <Flex alignItems="center" justifyContent="center" border="1px" borderBottomLeftRadius="7px" borderTopLeftRadius="7px"
            borderTopRightRadius="none" borderBottomRightRadius="none" borderColor='gray.200' h="100%" w="40%" bgColor="#edf2f7">
            <Text textAlign="center" display="flex" alignItems="center" justifyContent="center" h="100%" fontSize='xs'>Ссылка:</Text>
            </Flex>
            <Input h="100%" w="60%" placeholder='Ввод...' size='xs' focusBorderColor='teal.400' onChange={onChange} value={data.link} name="link"
            borderBottomLeftRadius="none" borderTopLeftRadius="none" borderTopRightRadius="7px" borderBottomRightRadius="7px"/>
      </Flex>
        </React.Fragment>
    )
}

export default TemplateItems