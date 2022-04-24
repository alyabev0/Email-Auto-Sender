import React, {useState, useEffect, useRef} from 'react'
import { Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button, Textarea, Input, InputGroup, InputLeftAddon, Center} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import LeftPanel from '../components/LeftPanel'
import TemplateItems from '../components/TemplateItems'


const Templates = () => {
  var [mainTemplate, setMainTemplate] = useState("")
  const [value, setValue] = useState("")
  const [value1, setValue1] = useState("")

  var [data, setData] = useState({
    myName: "*Ваше имя*",
    receiverName: "*Имя получателя*",
    myPosition: "*Ваша должность*",
    rPosition: "*Предлагаемая должность*",
    myCompany: "*Название Вашей компании*",
    link: "*Ссылка*"
  
  })
  const dataChange = (e) => {setData({
    ...data,
    [e.target.name]: e.target.value
  })}

  var template = {
    firstContact: ` Здравствуйте, ${data.receiverName}!\r\n Я нашел ваш профиль на ${data.link} и хотел поговорить об отличной возможности.\r\n Я работаю в ${data.myCompany}, и мы ищем ${data.rPosition}. Я думаю, что Ваш опыт работы отлично подходит для этой позиции.\r\n Если вам интересно узнать больше, я буду рад пообщаться. Когда мы с Вами можем созвониться и обговорить детали?\r\n С нетерпением жду ответа от Вас в ближайшее время.\r\n С уважением,\r\n ${data.myName},\r\n ${data.myPosition}`,
    interviewInvite: ` Здравствуйте, ${data.receiverName}!\r\n Спасибо, что подали заявку на вакансию ${data.rPosition} в ${data.myCompany}.\r\n Мы рассмотрели Ваше резюме и будем рады продолжить общение.\r\n В качестве продолжения общения я бы хотел пригласить Вас на небольшое собеседование. Собеседование продлится примерно полтора-два часа. Когда Вам будет удобно? Буду ждать Вашего ответа!\r\n С уважением,\r\n ${data.myName},\r\n ${data.myPosition}`,
    jobOffer: ` Здравствуйте, ${data.receiverName}!\r\n От лица ${data.myCompany} спешу сообщить Вам о том, что Вы успешно прошли собеседование.\r\n Ваши профессиональные взгляды сходятся со взглядами нашей компании, поэтому мы рады предложить Вам должность ${data.receiverName} в ${data.myCompany}.\r\n Скажите, как скоро Вы будете готовы дать ответ на наше предложение? В любом случае, ждём Вашего ответа с нетерпением!\r\n С уважением,\r\n ${data.myName},\r\n ${data.myPosition}`,
    jobReject: ` Здравствуйте, ${data.receiverName}!\r\n Спасибо, что подали заявку на нашу вакансию ${data.rPosition} и рассказали нашей команде о своем опыте. C сожалением сообщаем, что мы решили выбрать более опытного кандидата на эту роль.\r\n Мы сохраним Ваше резюме в базе и свяжемся с Вами, если поймем, что Вы подходите для других вакансий, которые будут открыты в дальнейшем.\r\n Мы искренне ценим Ваше время и внимание к ${data.myCompany}.\r\n Всего наилучшего,\r\n Команда ${data.myCompany}`
}
useEffect((ew) => {
  console.log(ew)
  console.log(template.firstContact)
  setMainTemplate(template.firstContact)
  }, [template.firstContact]);
console.log(mainTemplate)
console.log(template.firstContact)
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

            <TemplateItems data={data} onChange={dataChange}/>

      <Menu>
  <MenuButton margin-left="60%" w="30%" as={Button} rightIcon={<ChevronDownIcon />}>
    Выбрать шаблон
  </MenuButton>
  <MenuList>
    <MenuItem onClick={() => setMainTemplate(template.firstContact)}>Первый контакт</MenuItem>
    <MenuItem onClick={() => setMainTemplate(template.interviewInvite)}>Приглашение на собеседование</MenuItem>
    <MenuItem onClick={() => setMainTemplate(template.jobOffer)}>Предложение о работе</MenuItem>
    <MenuItem onClick={() => setMainTemplate(template.jobReject)}>Письмо с отказом</MenuItem>
    <MenuItem>Письмо с ТЗ</MenuItem>
  </MenuList>
</Menu>

        </Flex>
        <Flex w="60%" minH="200px" minW="360px" direction="column" border='1px' borderColor='gray.200'
          boxShadow='sm' borderBottomRightRadius="7px" borderBottomLeftRadius="7px">
        <Textarea value={mainTemplate} minW="325px" maxH="100%" minH="100%" focusBorderColor='teal.400' borderTopRightRadius="none" borderTopLeftRadius="none"
        borderBottomRightRadius="7px" borderBottomLeftRadius="7px" spellCheck="false" />
        </Flex>
            </Flex>
        </React.Fragment>
    )
}

// var a = <p>Wassup, <br></br>homie!
// </p>
// String(a)
// console.log(a.props.children)



export default Templates