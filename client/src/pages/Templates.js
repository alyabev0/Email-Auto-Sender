import React, {useState, useEffect} from 'react'
import { Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button, Textarea, Input, InputGroup, InputLeftAddon, Center} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import LeftPanel from '../components/LeftPanel'
import TemplateItems from '../components/TemplateItems'

const Templates = () => {
  var [mainTemplate, setMainTemplate] = useState("")
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
    firstContact: `Здравствуйте, ${data.receiverName}!\r\nЯ нашел ваш профиль на ${data.link} и хотел поговорить об отличной возможности.\r\nЯ работаю в ${data.myCompany}, и мы ищем ${data.rPosition}. Я думаю, что Ваш опыт работы отлично подходит для этой позиции.\r\nЕсли вам интересно узнать больше, я буду рад пообщаться. Когда мы с Вами можем созвониться и обговорить детали?\r\nС нетерпением жду ответа от Вас в ближайшее время.\r\nС уважением,\r\n${data.myName},\r\n${data.myPosition}`,
    interviewInvite: `Здравствуйте, ${data.receiverName}!\r\nСпасибо, что подали заявку на вакансию ${data.rPosition} в ${data.myCompany}.\r\nМы рассмотрели Ваше резюме и будем рады продолжить общение.\r\nВ качестве продолжения общения я бы хотел пригласить Вас на небольшое собеседование. Собеседование продлится примерно полтора-два часа. Когда Вам будет удобно? Буду ждать Вашего ответа!\r\nС уважением,\r\n${data.myName},\r\n${data.myPosition}`,
    jobOffer: `Здравствуйте, ${data.receiverName}!\r\nОт лица ${data.myCompany} спешу сообщить Вам о том, что Вы успешно прошли собеседование.\r\nВаши профессиональные взгляды сходятся со взглядами нашей компании, поэтому мы рады предложить Вам должность ${data.receiverName} в ${data.myCompany}.\r\nСкажите, как скоро Вы будете готовы дать ответ на наше предложение? В любом случае, ждём Вашего ответа с нетерпением!\r\nС уважением,\r\n${data.myName},\r\n${data.myPosition}`,
    jobReject: `Здравствуйте, ${data.receiverName}!\r\nСпасибо, что подали заявку на нашу вакансию ${data.rPosition} и рассказали нашей команде о своем опыте. C сожалением сообщаем, что мы решили выбрать более опытного кандидата на эту роль.\r\nМы сохраним Ваше резюме в базе и свяжемся с Вами, если поймем, что Вы подходите для других вакансий, которые будут открыты в дальнейшем.\r\nМы искренне ценим Ваше время и внимание к ${data.myCompany}.\r\nВсего наилучшего,\r\nКоманда ${data.myCompany}`,
    requestTA: `Здравствуйте, ${data.receiverName}!\r\nЕще раз благодарим Вас за заявку на вакансию ${data.link}. Мы рассматриваем Ваше резюме и хотели бы увидеть примеры работ, чтобы лучше оценить ваши способности. Пожалуйста, ответьте на это письмо, приложив примеры Ваших работ.\r\nВсе файлы должны быть представлены в определённом формате. Если у Вас есть какие-либо вопросы, пожалуйста, дайте мне знать.\r\nС уважением,\r\n${data.myName},\r\n${data.myPosition}`
}
useEffect(() => {
  // console.log(template.firstContact)
  setMainTemplate(template.firstContact)
  }, [template.firstContact]);
useEffect(() => {
  setMainTemplate(template.interviewInvite)
  }, [template.interviewInvite]);
useEffect(() => {
  setMainTemplate(template.jobOffer)
  }, [template.jobOffer]);
useEffect(() => {
  setMainTemplate(template.jobReject)
  }, [template.jobReject]);
useEffect(() => {
  setMainTemplate(template.requestTA)
  }, [template.requestTA]);

    return (
        <React.Fragment>
            <LeftPanel />
            <Flex w="80%" minH="100%" direction="column" alignItems="center">
            <Flex justifyContent="center" alignItems="center" mt="4%">
          <Text fontWeight='300'
          fontSize="50px" textAlign="center">Шаблоны писем</Text>
        </Flex>
        <Flex w="60%" minH="170px" h="20%"  minW="360px" direction="row" mt="5%"
        boxShadow='sm' borderTopRightRadius="7px" borderTopLeftRadius="7px" flexWrap="wrap" justifyContent="space-between">
            <TemplateItems data={data} onChange={dataChange}/>
      <Menu>
  <MenuButton minW="220px" w="30%" as={Button} rightIcon={<ChevronDownIcon />}>
    Выбрать шаблон
  </MenuButton>
  <MenuList>
    <MenuItem onClick={() => setMainTemplate(template.firstContact)}>Первый контакт</MenuItem>
    <MenuItem onClick={() => setMainTemplate(template.interviewInvite)}>Приглашение на собеседование</MenuItem>
    <MenuItem onClick={() => setMainTemplate(template.jobOffer)}>Предложение о работе</MenuItem>
    <MenuItem onClick={() => setMainTemplate(template.jobReject)}>Письмо с отказом</MenuItem>
    <MenuItem onClick={() => setMainTemplate(template.requestTA)}>Письмо с ТЗ</MenuItem> 
  </MenuList>
</Menu>

        </Flex>
        <Flex w="60%" minH="200px" minW="360px" direction="column" 
          boxShadow='sm' borderBottomRightRadius="7px" borderBottomLeftRadius="7px">
        <Textarea value={mainTemplate} minW="325px" maxH="100%" minH="100%" border='2px' focusBorderColor='teal.400' borderTopRightRadius="7px" borderTopLeftRadius="7px"
        borderBottomRightRadius="7px" borderBottomLeftRadius="7px" spellCheck="false" />
        </Flex>
            </Flex>
        </React.Fragment>
    )
}

export default Templates