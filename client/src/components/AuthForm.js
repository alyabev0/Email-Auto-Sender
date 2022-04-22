import React, {useState} from 'react'
import axios from "axios"
import { Flex, Button, Input, Text, Center, InputGroup, InputRightElement} from '@chakra-ui/react'



const AuthForm = ({setIsData}) => {
    const [data, setData] = useState({email: "", pass: ""})
    const [valid, setValid] = useState(true)

    const [show, setShow] = React.useState(false)
    // const [isData, setIsData] = useState(false)
    // const validateMail = (mail) => {
    //     if ((mail == "")&(mail === undefined)){
    //         setValid(false)
    //         // return alert("error")
    //     }
    //     return mail
    // }
    // const validatePass = (pass) => {
    //     if ((pass == "")&(pass === undefined)){
    //         setValid(false)
    //         // return alert("error")
    //     }
    //     return pass
    // }
    const mailChange = (e) => {
        setValid(true)
        var val = e.target.value;
        setData({
            ...data,
            [e.target.name]: val
          });
    }
    const passChange = (e) => {
        setValid(true)
        var val = e.target.value;
        setData({
            ...data,
            [e.target.name]: val
          });
    }
    const handleSubmit = async(event)=>{
        event.preventDefault();
        // data.email = validateMail(data.email)
        // data.pass = validatePass(data.pass)
        console.log("finally: ", data.email, data.pass)
        // console.log(valid)
        if ((data.email != ("")||(undefined))&(data.pass != ("")||(undefined))) {
            setIsData(true)
        try{
            await axios.post('http://localhost:3001/auth', {
              email: data.email,
              pass: data.pass
            })
          } catch (error) {
            console.log(error)
          }

    } else {
        setValid(false)
        setIsData(false)
    }
}
    //   console.log(data)
// console.log(isData)
      var validColor = (valid===true?"#319795":"red")
      
    return (
        <React.Fragment>
            <Flex w="80%" minH="100%" direction="column" alignItems="center" bg="white">
                <Center w="30%" h="40px" mt="10%" fontSize="5xl">
                    <h1>Авторизуйтесь</h1>
                </Center>
                <Flex w="25%" h="150px" mt="20px">

                 {/* <FormControl w="100%" colorScheme="teal">
                    <FormLabel colorScheme="teal" htmlFor='email'>Email address</FormLabel>
                    <Input focusBorderColor='teal.600' colorScheme="teal" id='email' type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    </Flex> */}

                    <form onSubmit={handleSubmit}>
        <input style={{border: "2px solid", borderRadius: "5px", width: "100%", borderColor: validColor}} type="text" placeholder="Тут почта..." name="email" value={data.email}
         onChange={(event) => mailChange(event)}/>
         
        <input style={{marginTop: "10px", border: "2px solid", borderRadius: "5px", width: "100%", borderColor: validColor}} type="password" placeholder="А вот тут пароль..."
         name="pass"
         value={data.pass} onChange={(event) => passChange(event)}/>


{/* <InputGroup mt="10px" w="100%">
      <Input
        type={show ? 'text' : 'password'}
        placeholder='А вот тут пароль...'
        style={{border: "2px solid", borderColor: validColor}}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup> */}


        <Button m="auto" mt="10px" w="100%" colorScheme='teal' type="submit">Войти</Button>
      </form>









            </Flex>
            </Flex>
        </React.Fragment>
    )
}

export default AuthForm