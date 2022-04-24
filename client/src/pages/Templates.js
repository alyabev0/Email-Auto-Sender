import React, {useState} from 'react'
import { Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button, Textarea, Input, InputGroup, InputLeftAddon, Center} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import LeftPanel from '../components/LeftPanel'
import TemplateItems from '../components/TemplateItems'


const Templates = () => {
  var [data, setData] = useState({name: "", receiverName: ""})
  const increment = (e) => {setData({
    ...data,
    [e.target.name]: e.target.value
  })}
  var template = {
    firstContact: ` Здравствуйте, ${data.name}!\r\n Я нашел ваш профиль на [ГДЕ / КАК ВЫ ЕГО НАШЛИ] и хотел поговорить об отличной возможности.\r\n Я работаю в [НАЗВАНИЕ КОМПАНИИ], и мы ищем сотрудника [НАЗВАНИЕ ВАКАНСИИ]. Я думаю, что ваш опыт работы отлично подходит для этой позиции.\r\n Если вам интересно узнать больше, я буду рад пообщаться. Когда мы с Вами можем созвониться и обговорить детали?\r\n С нетерпением жду ответа от Вас в ближайшее время.\r\n С уважением,\r\n [ВАШЕ ИМЯ],\r\n [ВАША ПОДПИСЬ]`,
    interviewInvite: " Здравствуйте, [ИМЯ]!\r\n Спасибо, что подали заявку на вакансию [НАЗВАНИЕ ВАКАНСИИ] в [НАЗВАНИЕ КОМПАНИИ].\r\n Мы рассмотрели ваше резюме и будем рады продолжить общение с вами.\r\n Мы хотели бы запланировать техническое собеседование с Вами. Собеседование продлится примерно полтора-два часа. Будет ли Вам удобно в ближайшее время?\r\n Вы можете ответить прямо на это письмо и дать мне знать, свободны ли Вы в это время.\r\n С уважением,\r\n [ВАШЕ ИМЯ]\r\n [ВАША ПОДПИСЬ]"
}
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

            <TemplateItems data={data} onChange={increment}/>

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
        <Flex w="60%" minH="200px" minW="360px" direction="column" border='1px' borderColor='gray.200'
          boxShadow='sm' borderBottomRightRadius="7px" borderBottomLeftRadius="7px">
        <Textarea value={template.firstContact} minW="325px" maxH="100%" minH="100%" focusBorderColor='teal.400' borderTopRightRadius="none" borderTopLeftRadius="none"
        borderBottomRightRadius="7px" borderBottomLeftRadius="7px" spellCheck="false" />
        </Flex>
            </Flex>
        </React.Fragment>
    )
}

var a = <p>Wassup, <br></br>homie!
</p>
String(a)
console.log(a.props.children)



export default Templates