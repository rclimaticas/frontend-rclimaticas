import React from 'react';
import {
    Stack,
    InputGroup,
    InputLeftElement,
    Input,
    Text,
    Center,
    Button
} from '@chakra-ui/react'
import { MdEmail } from "react-icons/md";

export default function Contribution() {
  return (
    <>
      <Center>
        <Text mb='8px'>Email:</Text>
      </Center>
      <Center>
      <Input
        width={'30%'}
        placeholder='Digite seu email'
        size='lg'
        mb={10}
      />
      <Button 
        bg={"black"}
        _hover={{ bg: "black" }}
        bottom={5}
        ml={5}>
        <Text
        color={'white'}
        >
            Enviar
        </Text>
      </Button>
      </Center>
      <Center>
        <Text mb='8px'>Nome</Text>
      </Center>
      <Center>
      <Input
        width={'30%'}
        placeholder='Digite seu nome'
        size='lg'
      />
      <Button 
        bg={"black"}
        _hover={{ bg: "black" }}
        ml={5}>
        <Text
        color={'white'}
        >
            Enviar
        </Text>
      </Button>
      </Center>
    </>
  )
}