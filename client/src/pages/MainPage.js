import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDisclosure, Button, Flex, Input, Textarea, Text } from '@chakra-ui/react'
import LeftPanel from '../components/LeftPanel'
import ModalWindow from '../components/ModalWindow'

const MainPage = () => {
  // let eventSource = new EventSource("http://localhost:3001/send_mail");
  
    var [text, setText] = useState("")
    var [subject, setSubject] = useState("")
    const [receiver, setReceiver] = useState("")
    const [isSent, setIsSent] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleSend = async(event) => {
        event.preventDefault();
        try{
          await axios.post('http://localhost:3001/send_mail', {
            receiver,
            subject,
            text
          })
        } catch (error) {
          // eventSource.onerror = function(event) {
          //   alert(event)
          //   console.log("Новое сообщение", event);
          //   // этот код выведет в консоль 3 сообщения, из потока данных выше
          // };
          console.log(error)
        }
      }

      useEffect(()=>{
        subscribe()
    }, [])
        const subscribe = async() => {
            const eventSource = new EventSource('http://localhost:3001/connect')
            eventSource.onmessage = function(event){
                console.log(event)
                setIsSent(true)
            }
        }








    return (
        
        <React.Fragment>
            <LeftPanel/>
             
    {/* поменять h на 100%  */}
      <Flex w="80%" minH="100%" direction="column" alignItems="center">

        <Flex direction="column" justifyContent="center" alignItems="center" mt="4%">
          <Text fontWeight='300' textAlign="center"
          fontSize="50px">Рассылка</Text>
        </Flex>
        <Flex minW="350px" w="60%" boxShadow="md" mt="15px" p="5px" borderRadius="7px">
            <Flex w="100%" bgColor="gray.100" borderRadius="7px" direction="column">
              <Text fontWeight="300">На данной странице доступны 2 опции:</Text>
              <Text fontWeight="300">1.Массовая рассылка. Просто впишите нужное количество email-ов в графу "Получатель". Иногда письма попадают в "Спам".</Text>
              <Text fontWeight="300">2.Шаблонное сообщение. Зайдите на страницу "Шаблоны", выберите нужный и вставьте сюда.</Text>
            </Flex>
          </Flex>

          <Flex w="60%" direction="column" mt="3%" minW="350px">
      <form onSubmit={handleSend}>

        <Input focusBorderColor='teal.400' type="text" placeholder="Получатель (если несколько, то через запятую)"
        value={receiver} onChange={(event) => setReceiver(event.target.value)}/>
        <Input focusBorderColor='teal.400' type="text" placeholder="Тема"
         value={subject} onChange={(event) => setSubject(event.target.value)} />
         
         <Textarea minH="200px" focusBorderColor='teal.400' placeholder="Напишите адресатам всё, что Вы о них думаете!"
         value={text} onChange={(event) => setText(event.target.value)} spellCheck="false"/>
        <Button colorScheme='teal' onClick={onOpen} type="submit">Отправить</Button>

      </form>

      <ModalWindow isOpen={isOpen} isSent={isSent} onClose={onClose}/>

      </Flex>

      </Flex>
        </React.Fragment>
    )
}

export default MainPage