import React from 'react';
import { Box, Center, HStack, Heading, Image, Text } from '@chakra-ui/react';
import Sharing from '../../assets/ondefoi/sharing.png'
import Security from '../../assets/ondefoi/security.png'
import Spokesperson from '../../assets/ondefoi/spokesperson.png'

export default function About() {
    return (
        <>
            <Center>
                <HStack spacing={"8rem"} mt={"10rem"}>
                    <Box
                    bg={"#202020"}
                    h="300px"
                    w="300px"
                    borderRadius={"20px"}
                    boxShadow={"-10px 10px 0px #40EC51"}
                    transition="transform 1s"
                    _hover={{ transform: "scale(1.05)" }}
                    >
                            <Text color="white" fontFamily={"Alata"} fontSize={"25px"} textAlign={"center"} mt={"1rem"}>
                                Compartilhamento <br/>de dados
                            </Text>
                            <Center>
                                <Image mt={2} w={"60%"} src={Sharing}/>
                            </Center>
                    </Box>
                    <Box
                    bg={"#202020"}
                    h="300px"
                    w="300px"
                    borderRadius={"20px"}
                    boxShadow={"-10px 10px 0px #40EC51"}
                    transition="transform 1s"
                    _hover={{ transform: "scale(1.05)" }}
                    >
                        <Text color="white" fontFamily={"Alata"} fontSize={"25px"} textAlign={"center"} mt={"1rem"}>
                                Segurança de dados <br/>Pessoais
                            </Text>
                            <Center>
                                <Image mt={2} w={"60%"} src={Security}/>
                            </Center>
                    </Box>
                    <Box
                    bg={"#202020"}
                    h="300px"
                    w="300px"
                    borderRadius={"20px"}
                    boxShadow={"-10px 10px 0px #40EC51"}
                    transition="transform 1s"
                    _hover={{ transform: "scale(1.05)" }}
                    >
                            <Text color="white" fontFamily={"Alata"} fontSize={"25px"} textAlign={"center"} mt={"1rem"}>
                                Porta Voz <br/>Comunitário
                            </Text>
                            <Center>
                                <Image mt={2} w={"60%"} src={Spokesperson}/>
                            </Center>
                    </Box>
                </HStack>
            </Center>
        </>
    );
}