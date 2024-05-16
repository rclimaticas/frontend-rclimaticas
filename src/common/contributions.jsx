import React from 'react';
import { Text, Container, Box, Wrap, HStack, Heading, Image, Stack, InputGroup, InputLeftAddon, Input, Button } from '@chakra-ui/react';
import Trusted from '../assets/trusted.png'
import Financiadores from '../assets/financiadores.png'

export default function Contribution() {
    return (
        <>
            <HStack spacing={20}>
                <Box w="500px" h="400px">
                    <Stack
                        spacing={4}>
                        <Text
                            fontSize={"18px"}
                            fontFamily={"Arial"}
                        >Receba Atualizações</Text>
                        <InputGroup>
                            <InputLeftAddon>
                                🫵
                            </InputLeftAddon>
                            <Input
                                border="1px solid"
                                bg={"#eced95"}
                                type='tel' placeholder='Digite seu nome' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon>
                                📫
                            </InputLeftAddon>
                            <Input
                                border="1px solid"
                                bg={"#eced95"}
                                type='tel' placeholder='Email' />
                        </InputGroup>
                    </Stack>
                    <Button
                        mt={5}
                        w={"30%"}
                    >
                        <Text
                            fontSize={"18px"}
                        >
                            Enviar
                        </Text>
                    </Button>
                    <Stack p={10}>
                        <Text p={10} fontSize={"18px"} fontFamily={"Arial"} textAlign={"center"}>
                                <u>
                                    Contribua com o projeto financiando
                                </u>
                        </Text>
                        <Box
                        w={"100%"}
                        h="100px"
                        >
                            <Image src={Financiadores}/>

                        </Box>
                    </Stack>
                </Box>
            </HStack>
        </>
    )
}