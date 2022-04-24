import React, { useState } from 'react'
import axios from 'axios'
import { Button, Flex, Input, Textarea, Text} from '@chakra-ui/react'
import LeftPanel from '../components/LeftPanel'

const MainPage = () => {
    var [text, setText] = useState("")
    var [subject, setSubject] = useState("")
    const [receiver, setReceiver] = useState("")

    const handleSend = async(event) => {
        event.preventDefault();
        try{
          await axios.post('http://localhost:3001/send_mail', {
            receiver,
            subject,
            text
          })
        } catch (error) {
          console.log(error)
        }
      }
console.log(text)
    return (
        
        <React.Fragment>
            <LeftPanel/>
             
    {/* поменять h на 100%  */}
      <Flex w="80%" minH="100%" direction="column" alignItems="center">

        <Flex justifyContent="center" alignItems="center" mt="4%">
          <Text fontWeight='300' textAlign="center"
          fontSize="50px">Массовая рассылка</Text>
        </Flex>

          <Flex w="60%" direction="column" mt="9%">
      <form onSubmit={handleSend}>

        <Input focusBorderColor='teal.400' type="text" placeholder="Получатель (если несколько, то через запятую)"
        value={receiver} onChange={(event) => setReceiver(event.target.value)}/>
        <Input focusBorderColor='teal.400' type="text" placeholder="Тема"
         value={subject} onChange={(event) => setSubject(event.target.value)} />
         
         <Textarea focusBorderColor='teal.400' placeholder="Напишите адресатам всё, что Вы о них думаете!"
         value={text} onChange={(event) => setText(event.target.value)} spellCheck="false"/>
        <Button colorScheme='teal' type="submit">Отправить</Button>

      </form>
      </Flex>

      </Flex>
        </React.Fragment>
    )
}

export default MainPage