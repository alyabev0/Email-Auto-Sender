import axios from "axios"
import React, {useState} from "react";
import './App.css';
import { Button, ButtonGroup, Input } from '@chakra-ui/react'

function App() {
  var [sent, setSent] = useState(false)
  var [text, setText] = useState("")
  var [subject, setSubject] = useState("")

  const handleSend = async() => {
    
    try{
      await axios.post('http://localhost:3001/send_mail', {
        text,
        subject
      })
      setSent(true)
    } catch (error) {
      console.log(error)
    }
  }

return (
  <div className="App">
    {!sent ? (
      <form onSubmit={handleSend}>

        
        <Input focusBorderColor='purple.900' type="text" placeholder="subject" value={subject} onChange={(event) => setSubject(event.target.value)} />

        <Input focusBorderColor='purple.900' type="text" placeholder="text" value={text} onChange={(event) => setText(event.target.value)} />

        <Button colorScheme='purple' type="submit">Send Email</Button>
      </form>
    ) : (
      <h1>Email Sent</h1>
    )}
  </div>
)
}
export default App;
