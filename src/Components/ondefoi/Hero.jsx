import React, { useState } from 'react';
import { Flex, Skeleton, Container, Grid, Box, Heading, Image, GridItem, Center, Stack, Button, Text } from '@chakra-ui/react';
import BackgroundOndeFoi from '../../assets/ondefoi/back.png'
import Gradient from '../../assets/ondefoi/gradient.png'
import Phone3d from '../../assets/ondefoi/phone3d.png'

export default function Hero() {
    const [imageLoad, setImageLoad] = useState(false);

    return (
        <>
            <Box
                h={{md: "700px"}}
                bgImg="https://iili.io/Jm1KCpj.md.png"
                bgSize="cover"
                bgRepeat={"no-repeat"}
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
                        pt={{ base: 20, md: 28 }}
                        pb={{ base: 24, md: 24 }}
                    >
                        <Box bg="" bgSize="cover" bgRepeat={"no-repeat"} py={6} display={{ base: "none", md: "block" }} order={{ md: 1 }}>

                            <Image
                                src={Phone3d}
                                alt="Phone 3D"
                                loading="eager"
                                htmlWidth={620}
                                position="relative"
                            />
                        </Box>
                        <Box textAlign={{ base: "center", md: "left" }} zIndex={2}>
                            <Heading
                                color={"white"}
                                as="h1"
                                fontSize={{ base: "2xl", lg: "6xl", xl: "6xl" }}
                                fontWeight="bold"
                                letterSpacing={{ lg: "tight", xl: "tighter" }}
                            >
                                Monitor de Ocorrências de Conflitos Socioambientais
                            </Heading>
                            <Text color="white" fontSize="lg" mt={4} maxW="xl">
                                <Text as="span" color="#31BB3E">OndeFoi</Text> é uma aplicação para registros de conflitos socioambientais e identificação de assessoria técnica.

                            </Text>
                            <Stack mt={6} direction={{ base: "column", sm: "row" }} spacing={3}>
                                <Button
                                    bgColor={"#018047"}
                                    _hover={{ bg: "#00703e" }}
                                    as="a"
                                    href="https://arcg.is/1mzbme"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Text color="white">
                                        Acessar OndeFoi
                                    </Text>
                                </Button>
                            </Stack>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    );
}