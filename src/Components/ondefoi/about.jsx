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
                            <Text opacity={0.7} fontSize={"20px"}>
                                O OndeFoi surge como uma ferramenta essencial para o registro de < br/>
                                <Text as={"span"} color={"#31BB3E"}>conflitos socioambientais </Text>e climáticos para direcionamento de <br/>
                                assessoria aos povos, comunidades e natureza.
                            </Text>

                            <Stack mt={"2rem"}>
                                <Heading fontSize={"28px"}>Nossa estrutura</Heading>
                                <Text opacity={0.7} fontSize={"20px"}>
                                    Nosso processo de registro é estruturado com a finalidade de <br/>
                                    <Text as={"span"} color={"#31BB3E"}>coletar informações </Text>
                                    abragentes e detalhadas em seções <br/> estratégicas, que incluem:
                                </Text>
                            </Stack>
                        </Stack>

                    </Box>
                    <Box
                    h="400px"
                    w="300px"
                    _hover={{ filter: "brightness(1.2)" }}
                    >
                        <Image src={Logo} />
                        <Center mt={"1rem"}>
                            <Heading color="white" fontFamily={"Alfa Slab One"} fontSize={"50px"} letterSpacing={"5px"}>ondefoi</Heading>
                        </Center>
                    </Box>
                </HStack>
            </Center>
        </>
    );
}