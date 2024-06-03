import React, { useState } from 'react';
import { Flex, Skeleton, Container, Grid, Box, Heading, Image, GridItem, Center, Stack, Button, Text, HStack, SimpleGrid } from '@chakra-ui/react';
import BackgroundOndeFoi from '../../assets/ondefoi/back.png'
import Gradient from '../../assets/ondefoi/gradient.png'
import Phone3d from '../../assets/ondefoi/phone3d.png'
import Sharing from '../../assets/ondefoi/sharing.png'
import Security from '../../assets/ondefoi/security.png'
import Spokesperson from '../../assets/ondefoi/spokesperson.png'

export default function Hero() {
    const [imageLoad, setImageLoad] = useState(false);

    return (
        <>
            <Box
                h="500px"
                bgImg="https://iili.io/Jm1ctx2.md.png"
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
                    pt={{ base: '28', sm: '14', md: '16', xl: '28' }}

                >
                    <SimpleGrid pl={3} display="flex" justifyContent="space-between" gap={2} columns={{ base: 1, md: 3 }}>

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
                                Compartilhamento <br />de dados
                            </Text>
                            <Center>
                                <Image mt={2} w={"60%"} src={Sharing} />
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
                                Segurança de dados <br />Pessoais
                            </Text>
                            <Center>
                                <Image mt={2} w={"60%"} src={Security} />
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
                                Porta Voz <br />Comunitário
                            </Text>
                            <Center>
                                <Image mt={2} w={"60%"} src={Spokesperson} />
                            </Center>
                        </Box>

                    </SimpleGrid>
                </Box>
            </Box >
        </>
    );
}