import axios from "axios"
import React, {useState} from "react";
import MainPage from "./pages/MainPage"
import { Button, ButtonGroup, Input, Flex, Box, Center, Spacer } from '@chakra-ui/react'
import LeftPanel from "./components/LeftPanel";
import AuthForm from "./pages/AuthForm";
import Templates from "./pages/Templates";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  var [sent, setSent] = useState(false)
  var [text, setText] = useState("")
  var [subject, setSubject] = useState("")
  const [isData, setIsData] = useState(false)


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
  // console.log(isData)
  // if (isData === true){
  //   localStorage.setItem('isData', isData);
  // } 

  console.log(localStorage.getItem("isData"), typeof(localStorage.getItem("isData")))
return (
  <div className="App">
    
    {/* поменять h на 100%  */}
    <Flex w="100%" h="100vh" bg='white'>
    {/* <LeftPanel/> */}

    {/* { (localStorage.getItem('isData') == "false" ) ? (<AuthForm setIsData={setIsData}/>) : (
      <React.Fragment>

    <MainPage/>
    </React.Fragment>
    )} */}
    <Routes>        
        <Route path="/" element={(localStorage.getItem('isData') == "true" ) ? <MainPage /> : <AuthForm/> }/>
        <Route path="auth" element={<AuthForm />} />
        <Route path="templates" element={(localStorage.getItem('isData') == "true" ) ? <Templates /> : <AuthForm/> } />
      </Routes>
      </Flex>

    
    
    
    
    
    
    
    {/* {!sent ? (
      <form onSubmit={handleSend}>
        <Input focusBorderColor='purple.900' type="text" placeholder="subject" value={subject} onChange={(event) => setSubject(event.target.value)} />
        <Input focusBorderColor='purple.900' type="text" placeholder="text" value={text} onChange={(event) => setText(event.target.value)} />
        <Button colorScheme='purple' type="submit">Send Email</Button>
      </form>
    ) : (
      <h1>Email Sent</h1>
    )} */}
  </div>
)
}
export default App;
