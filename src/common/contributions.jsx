import React from 'react';
import { Text, Container, Box, Wrap, HStack, Heading, Image, Stack, InputGroup, InputLeftAddon, Input, Button, Center, Flex } from '@chakra-ui/react';
import TrustedBy from '../assets/trusted.png'
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
                    <Stack p={10} textAlign={"center"} >
                        <Heading fontSize={"27px"}>Como você pode contribuir?</Heading>
                        <Box>
                            <Flex flexDirection={"column"} gap={5}>
                                <Text>
                                    Nosso projeto não possui financiamento permanente e conta com doações e
                                    prestações de serviços para seguir contribuindo com os povos, culturas e natureza
                                </Text>
                                <Text>
                                    Inclua em seus projetos uma % para contratar nossos estudos de impacto nos ODS, diagnósticos socioambientais,
                                    estudos de gênero, vulnerabilidade e resiliência climática, dentre outros.
                                </Text>
                                <Center flexDirection={"column"} gap={5}>
                                    <Button as='a' target="_blank" rel="noopener noreferrer" href='https://www.espiralds.com/doe'>Contribua</Button>
                                    <Image w={"80%"} src={Financiadores} />
                                </Center>
                            </Flex>

                        </Box>
                    </Stack>
                </Box>
            </HStack>
        </>
    )
}