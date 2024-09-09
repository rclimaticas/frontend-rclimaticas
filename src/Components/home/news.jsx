import React, { useState } from 'react';
import { Container, Grid, GridItem, Image, SimpleGrid, Box, InputGroup, InputLeftAddon, Input, Stack, Heading, Center, Button, Text, HStack, useDisclosure } from '@chakra-ui/react';
import Fundo from '../../assets/fundo.png'
import GoogleNews from '../../assets/news.png'
import Ekonavi from '../../assets/ekonavi.png'
import TrustedBy from '../../assets/trusted.png'
import Article1 from '../../assets/article1.png'
import Article2 from '../../assets/article2.png'
import Financiadores from '../../assets/financiadores.png'
import IBGE from './ibge'
import MapBiomas from './mapbiomas.jsx'
import axios from 'axios';
import GlobalConfirmationModal from '../../common/ConfirmationModal.jsx';
import { Link } from "react-router-dom";

export default function News() {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleConfirm = async () => {
        setIsLoading(true);
        try {
            await axios.post('https://backend-rclimaticas-2.onrender.com/newsletter', formData);
            setFormData({ name: '', email: '' });
            return "Your information has been submitted successfully.";
        } catch (error) {
            return "There was an error submitting your information. Please try again.";
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = () => {
        onOpen();
    };


    return (
        <>
            {/* tela desktop com fundo */}

            <Container mt={{ sm: "15rem", md: "20rem", lg: "20rem", xl: "20rem" }} maxW="full" 
                style={{
                    backgroundImage: "url('https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/fundo.png')",
                    backgroundSize: "cover",
                    height: "100%",
                    width: "100%",
                }}
            >
                    <Container maxW="container.xl" maxH={"container.xs"}>
                        <SimpleGrid columns={2} spacing={2}>
                            <Box mt={{ base: 5, sm: "-14rem", md: "-20rem", lg: "-20rem", xl: "-20rem" }}>
                                <MapBiomas />
                                <Stack spacing={5}>
                                    <Heading mt={5} fontSize={{ sm: "25px", md: "35px", lg: "30px", xl: "30px" }}><u>Publicações Recentes</u></Heading>
                                    <SimpleGrid columns={2} w={{ sm: "80%", md: "50%", lg: "50%" }} spacing={5}>
                                        <a
                                            href="/datarc"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                transition="transform 0.3s"
                                                _hover={{ transform: "scale(1.05)" }}
                                                src={Article1}
                                                filter="drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5))"
                                            />
                                        </a>
                                        <a
                                            href="/datarc"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                transition="transform 0.3s"
                                                _hover={{ transform: "scale(1.05)" }}
                                                w={"97%"} src={Article2}
                                                filter="drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5))"
                                            />

                                        </a>
                                    </SimpleGrid>
                                    <Stack spacing={4}>
                                        <Text fontSize={"18px"} fontFamily={"Arial"}>Receba Atualizações</Text>
                                        <InputGroup>
                                            <InputLeftAddon>🫵</InputLeftAddon>
                                            <Input
                                                border="1px solid"
                                                bg={"#eced95"}
                                                type='text'
                                                placeholder='Digite seu nome'
                                                name='name'
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputLeftAddon>📫</InputLeftAddon>
                                            <Input
                                                border="1px solid"
                                                bg={"#eced95"}
                                                type='email'
                                                placeholder='Email'
                                                name='email'
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </InputGroup>
                                    </Stack>
                                    <Button mt={5} w={"30%"} onClick={handleSubmit}>
                                        <Text fontSize={"18px"}>Enviar</Text>
                                    </Button>
                                </Stack>
                            </Box>
                            <Box >
                                <Heading
                                    fontSize={{ sm: "28px", md: "30px", lg: "30px" }}
                                    textAlign={"right"}
                                >
                                    Faça parte da Ekonavi, uma rede
                                    social colaborativa que te paga
                                    por impacto gerado.
                                </Heading>
                                <Box display={"flex"} justifyContent={"flex-end"}>
                                    <Link href="https://ekonavi.com/regen?r=r4f4.eu" target="_blank" rel="noopener noreferrer">
                                        <Image
                                            transition="transform 0.3s, filter 0.3s"
                                            _hover={{
                                                transform: "scale(1.05)",
                                                filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))" // Sombra ao passar o mouse
                                            }}
                                            filter="drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5))" // Sombra padrão
                                            src={"https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/ekonavi.png"}
                                            alt="Ekonavi"
                                        />
                                    </Link>
                                </Box>

                            </Box>
                        </SimpleGrid>

                        <HStack>
                            <SimpleGrid columns={2}>
                                <Box w="xl" mt={{ sm: "5rem", md: "5rem", lg: "5rem", xl: "3rem" }}>
                                    <Center flexDirection={"column"} gap={5}>
                                        <Heading fontSize={"27px"}>Como você pode contribuir?</Heading>
                                        <Text>
                                            Nosso projeto não possui financiamento permanente e conta com doações e
                                            prestações de serviços para seguir contribuindo com os povos, culturas e natureza
                                        </Text>
                                        <Text>
                                            Inclua em seus projetos uma % para contratar nossos estudos de impacto nos ODS, diagnósticos socioambientais,
                                            estudos de gênero, vulnerabilidade e resiliência climática, dentre outros.
                                        </Text>
                                        <Button as='a' target="_blank" rel="noopener noreferrer" href='https://www.espiralds.com/doe'>Contribua</Button>
                                        <Image w={"80%"} src={Financiadores} />
                                    </Center>
                                </Box>
                                {/* <Box mt={{ sm: "-10rem", md: "-12rem", lg: "-18rem", xl: "-30rem" }}>
                                <Heading fontSize={{ sm: "30px", md: "30px", lg: "40px" }} textAlign="right" fontFamily={"Chiller"}>TrustedBy</Heading>
                                <Center>
                                    <Image w={{ sm: "98%", md: "90%", lg: "90%", xl: "90%" }} src={TrustedBy} />
                                </Center>
                            </Box> */}
                            </SimpleGrid>
                            <SimpleGrid>
                                <Box w="xl">
                                    <Heading fontSize={{ sm: "30px", md: "30px", lg: "40px" }} textAlign="right" fontFamily={"Chiller"}>TrustedBy</Heading>
                                    <Image src={TrustedBy} />
                                </Box>

                            </SimpleGrid>
                        </HStack>


                    </Container>
            </Container>
            <GlobalConfirmationModal
                isOpen={isOpen}
                onClose={onClose}
                onConfirm={handleConfirm}
                isLoading={isLoading}
                description="Tem certeza de que deseja enviar suas informações?"
                toastMessage="Dados enviados com sucesso"
                toastStatus="success"
            />

            {/* tela md e sm sem fundo */}
            {/* <Container display={{ base: "none",sm: "none", md: "block", lg: "none", "2xl": "none" }} mt={"20rem"} maxW="full" maxH="container.xs">
                <Container maxW="container.xl" maxH={"container.xs"}>
                    <SimpleGrid columns={2} spacing={2}>
                        <Box >
                            <Image src={GoogleNews} />
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
                            <Box><Heading>asdasd</Heading></Box>
                        </Box>
                        <Box>ajfjaf</Box>
                    </SimpleGrid>
                    
                </Container>
            </Container> */}
        </>
    );
};