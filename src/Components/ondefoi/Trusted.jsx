import React from 'react';
import { Box, Button, Center, Heading, HStack, Image } from '@chakra-ui/react';
import Trusted from '../../assets/trusted.png'
import Financiadores from '../../assets/financiadores.png'
export default function About() {
    return (
        <>
            <Box
                h={{ md: "900px" }}
                bgImg="https://iili.io/Jm1ctx2.md.png"
                style={{
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <Box
                    id="dashboard"
                    minH="100vh"
                    height="full"
                    width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
                    maxW="7xl"
                    mx="auto"
                    pt={{ base: '28', sm: '14', md: '16', xl: '28' }}
                >

                    <Center>
                        <HStack spacing={"5rem"} >

                            <Box
                                w="30rem"
                                h="320px"

                            >
                                <Heading color="white" fontFamily={"Chiller"} fontSize={"50px"} textAlign={"left"} mb={5}>TrustedBy</Heading>
                                <Image borderRadius={"2rem"} boxShadow={"-10px 10px 0px #40EC51"} src={Trusted} />
                            </Box>
                            <Box
                                mt="4rem"
                                w="40rem"
                                h="200px"
                            >
                                <Heading color="white" fontFamily={"Alata"} textAlign={"center"}>Colabore</Heading>
                                <Box boxShadow={"-10px 10px 0px #40EC51"} borderRadius={"20rem"} bg="white">
                                    <Image mt={6} src={Financiadores} p={5} />
                                    <Center>
                                    <Button mb={5} as='a' target="_blank" rel="noopener noreferrer" href='https://www.espiralds.com/doe'>Contribua</Button>
                                    </Center>
                                </Box>
                            </Box>
                        </HStack>
                    </Center>
                </Box>
            </Box>

        </>
    );
}