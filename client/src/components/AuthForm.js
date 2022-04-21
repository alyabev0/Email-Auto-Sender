import React, {useState} from 'react'
import { Flex, Button, Input, Text, Center, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'

const AuthForm = () => {
    const [data, setData] = useState({email: "", pass: ""})
    const validateMail = (mail) => {
        if (mail == ""){
            return alert("error")
        }
        return mail
    }
    const validatePass = (pass) => {
        if (pass == ""){
            return alert("error")
        }
        return pass
    }
    const mailChange = (e) => {
        var val = e.target.value;
        console.log(val);
        var valid = validateMail(val);
        console.log(valid)
        setData({
            ...data,
            [e.target.name]: valid
          });
    }
    const passChange = (e) => {
        var val = e.target.value;
        console.log(val);
        var valid = validatePass(val);
        console.log(valid)
        setData({
            ...data,
            [e.target.name]: valid
          });
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        data.email = validateMail(data.email)
        alert(data.email)
    }
      console.log(data)
    return (
        <React.Fragment>
            <Flex w="80%" minH="100%" direction="column" justifyContent="center" alignItems="center" bg="white">
                <Center w="30%" h="40px" fontSize="5xl">
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
        <input style={{border: "2px solid #319795", borderRadius: "5px"}} type="text" placeholder="Тут почта..." name="email" value={data.email}
         onChange={(event) => mailChange(event)}/>
         
        <input style={{marginTop: "10px", border: "2px solid #319795", borderRadius: "5px"}} type="text" placeholder="А вот тут пароль..."
         name="pass"
         value={data.pass} onChange={(event) => passChange(event)}/>
        <Button m="auto" mt="10px" w="100%" colorScheme='teal' type="submit">Войти</Button>
      </form>









            </Flex>
            </Flex>
        </React.Fragment>
    )
}

export default AuthForm