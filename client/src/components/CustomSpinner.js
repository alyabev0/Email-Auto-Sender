import React from 'react'
import { Spinner, Text } from '@chakra-ui/react'

function CustomSpinner({isSuccess}){
    console.log(isSuccess)
    if (isSuccess === false) return <Text fontSize="xl">Ошибка авторизации: Перелогиньтесь.</Text>
    else if (isSuccess === true) return <Spinner/>
  }
  
export default CustomSpinner