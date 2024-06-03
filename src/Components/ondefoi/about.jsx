import React, { useState } from 'react';
import { Flex, Skeleton, Container, Grid, Box, Heading, Image, GridItem, Center, Stack, Button, Text } from '@chakra-ui/react';
import BackgroundOndeFoi from '../../assets/ondefoi/back.png'
import Gradient from '../../assets/ondefoi/gradient.png'
import Phone3d from '../../assets/ondefoi/phone3d.png'
import Logo from '../../assets/ondefoi/logo.png'

export default function About() {
    const [imageLoad, setImageLoad] = useState(false);

    return (
        <>
            <Box
                h={{base: "800", md: "500px"}}
                bgImg="https://iili.io/Jm1ctx2.md.png"
                color="white"
                style={{
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                {/* esse código serve para movimentar a imagem dentro do box sem movimentar os items dentro do box */}
                {/* <div
                    style={{
                        backgroundImage: "url('https://iili.io/Jm0TYCJ.md.png')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                />*/}
                <Box
                    minH="100vh"
                    height="full"
                    width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
                    maxW="7xl"
                    mx="auto"
                    pt={{ base: '28', sm: '14', md: '16', xl: '5' }}

                >
                    <Box
                        as="main"
                        display="grid"
                        gridTemplateColumns={{ lg: "1fr 1fr" }}
                        placeItems="center"
                        pt={{ base: 16, md: 12 }}
                        pb={{ base: 8, md: 24 }}
                    >

                        <Box py={6} borderRadius="20px" display={{ base: "none", md: "block" }} >
                            <Center>
                                <Image
                                    src={Logo}
                                    borderRadius="80px"
                                    alt="Phone 3D"
                                    loading="eager"
                                    htmlWidth={300}
                                    boxShadow="0px 4px 20px rgba(0, 0, 0, 1)"
                                    
                                />
                            </Center>
                        </Box>
                        <Box textAlign={{ base: "center", md: "left" }} zIndex={2} order={{ md: 2 }}>
                            <Stack fontFamily={"Alata"} color="black">
                                <Heading fontSize={"28px"}>Sobre a plataforma</Heading>
                                <Text opacity={0.7} fontSize={"20px"}>
                                    O OndeFoi surge como uma ferramenta essencial para o registro de
                                    <Text as={"span"} color={"#31BB3E"} boxShadow={"0px 5px 0px #40EC51"}> conflitos socioambientais </Text>e climáticos para direcionamento de <br />
                                    assessoria aos povos, comunidades e natureza.
                                </Text>

                                <Stack mt={"2rem"}>
                                    <Heading fontSize={"28px"}>Nossa estrutura</Heading>
                                    <Text opacity={0.7} fontSize={"20px"}>
                                        Nosso processo de registro é estruturado com a finalidade de
                                        <Text as={"span"} color={"#31BB3E"} boxShadow={"0px 5px 0px #40EC51"}> coletar informações </Text>
                                        abragentes e detalhadas em seções <br /> estratégicas, que incluem:
                                    </Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    );
}