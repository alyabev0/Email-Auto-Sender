import React, { useState } from 'react'
import axios from 'axios'
import { Button, Flex, Input, Textarea} from '@chakra-ui/react'

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

    return (
        <React.Fragment>
             
    {/* поменять h на 100%  */}
      <Flex w="80%" minH="100%" direction="column" alignItems="center">

          <Flex w="30%" direction="column" mt="15%">
      <form onSubmit={handleSend}>

        <Input focusBorderColor='teal.500' type="text" placeholder="Получатель"
        value={receiver} onChange={(event) => setReceiver(event.target.value)}/>
        <Input focusBorderColor='teal.500' type="text" placeholder="Тема"
         value={subject} onChange={(event) => setSubject(event.target.value)} />
         <Textarea focusBorderColor='teal.500' placeholder="Текст письма"
         value={text} onChange={(event) => setText(event.target.value)} />
        <Button colorScheme='teal' type="submit">Отправить</Button>

      </form>
      </Flex>

      </Flex>
        </React.Fragment>
    )
}

export default MainPage