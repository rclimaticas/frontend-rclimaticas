import React from 'react';
import { Center, Box, HStack, Image, Heading, Stack, Text } from '@chakra-ui/react';
import Logo from '../../assets/ondefoi/logo.png'

export default function About() {
    return (
        <>
            <Center>
                <HStack
                mt="2rem"
                spacing={"23rem"}
                >
                    <Box>
                        <Stack fontFamily={"Alata"} color="white" mt={"3.5rem"}>
                            <Heading fontSize={"28px"}>Sobre a plataforma</Heading>
                            <Text opacity={0.7}>
                                O OndeFoi como surge ferramenta essencial para o registro de < br/>
                                <Text as={"span"} color={"#31BB3E"}>incidentes climáticos, </Text>como agressões ou violações ocorridas em <br/>
                                Terras Indígenas e Comunidades e etc.
                            </Text>

                            <Stack mt={"2rem"}>
                                <Heading fontSize={"28px"}>Nossa estrutura</Heading>
                                <Text opacity={0.7}>
                                    Nosso processo de registro é estruturado com a finalidade de <br/>
                                    <Text as={"span"} color={"#31BB3E"}>coletar informações </Text>
                                    abragentes e detalhadas em seções <br/> estratégicas, que incluem:
                                </Text>
                            </Stack>
                        </Stack>

                    </Box>
                    <Box
                    h="370px"
                    w="300px"
                    _hover={{ filter: "brightness(1.2)" }}
                    >
                        <Image mt="3rem" src={Logo} />
                        <Center mt={"1rem"}>
                            <Heading color="white" fontFamily={"Alfa Slab One"} fontSize={"50px"} letterSpacing={"5px"}>ondefoi</Heading>
                        </Center>
                    </Box>
                </HStack>
            </Center>
        </>
    );
}