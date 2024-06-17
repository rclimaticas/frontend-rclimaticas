// src/Components/404page/NotFound.jsx
import React from 'react';
import { Box, Heading, Text, Flex, Button, Stack } from "@chakra-ui/react";
import FoundPage from "../../assets/404page/404page.png";

const NotFound = () => {
    return (
        <Flex
            height="100vh"
            width="100vw"
            backgroundImage={FoundPage}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            overFlow={"hidden"}

        >
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
                        <Stack gap={5} textColor={"white"} style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }} p={10}>
                            <Heading
                                fontStyle={"Alata"}
                                fontSize={"90px"}
                                filter=" drop-shadow(xl)"
                                color="white"
                            >
                                Olá, está perdido?
                            </Heading>
                            <Text>
                                Para acessar outras rotas da plataforma, te convidamos a se logar na nossa plataforma para conhecer mais sobre
                                nosso projeto.
                            </Text>
                            <Button as="a" href="/register" width={"50%"} textColor={'black'}>
                                Clique aqui para se cadastrar :)
                            </Button>
                        </Stack>
                    </Box>
                    <Box bg="" bgSize="cover" bgRepeat={"no-repeat"} py={6} display={{ base: "none", md: "block" }} order={{ md: 2 }}>
                        {" "}
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};

export default NotFound;
