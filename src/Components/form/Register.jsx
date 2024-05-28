import React, { useState } from 'react';
import {
    Container, Card, CardHeader, CardBody, CardFooter, Box, Heading, Text, Image, Center, SimpleGrid, Stack, Input, Divider, Button, InputGroup, InputRightElement, useToast, HStack
} from '@chakra-ui/react';
import { GoEye, GoEyeClosed } from "react-icons/go";
import Layout from '../layout.jsx';
import i18n from '../i18n/i18n.json';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const toast = useToast();

    const handleSuccessAuth = (response) => {
        console.log(response);
        toast({
            title: "Registro feito com sucesso!",
            description: "Seja bem-vindo(a)!",
            status: "success",
            position: "top",
            duration: 5000,
            isClosable: true,
        });
        window.location.href = '/login';
    };

    const handleErrorAuth = (error) => {
        console.error('Falha na autenticação:', error);
        toast({
            title: "Falha ao se registrar",
            description: "Ocorreu um erro ao tentar fazer o registro!",
            status: "error",
            position: "top",
            duration: 5000,
            isClosable: true,
        });
    };

    const handleRegister = async () => {
        if (!email || !username || !password) {
            toast({
                title: "Erro",
                description: "Por favor, preencha todos os campos.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            return;
        }

        try {
            const userData = {
                email: email,
                username: username,
                password: password
            };

            const response = await axios.post('https://backend-rclimaticas.onrender.com/register', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 201 || response.status === 200) {
                if (response.data.error) {
                    console.error('Erro de registro:', response.data.error);
                    toast({
                        title: "Erro de registro",
                        description: response.data.error,
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                        position: "top",
                    });
                } else {
                    console.log('Registro bem-sucedido:', response.data);
                    toast({
                        title: "Registro bem-sucedido",
                        description: "Seja bem-vindo(a)!",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                        position: "top",
                    });
                    window.location.href = '/login';
                }
            }
        } catch (error) {
            console.error('Erro ao registrar:', error.response ? error.response.data : error.message);
            toast({
                title: "Erro",
                description: error.response?.data?.message || "Ocorreu um erro ao tentar registrar. Por favor, tente novamente.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        }
    };

    return (
        <Container maxW="full" h="100vh" bgImage={i18n.form.bg} bgSize={"cover"} alignItems={"center"} display="flex" justifyContent={"center"}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacingX='90px' spacingY='60px'>
                <Box>
                    <Layout maxW={"container.xl"}>
                        <Card maxW='md' borderRadius={"50px"} boxShadow={"0px 0px 20px rgba(8, 0, 0, 0.5)"}>
                            <CardHeader>
                                <Center>
                                    <Heading size='xl'>{i18n.form.title.register}</Heading>
                                </Center>
                            </CardHeader>
                            <CardBody>
                                <Stack fontFamily={"Alata"} fontSize={"14px"} opacity={0.7} spacing={5}>
                                    <Box>
                                        <Text>Nome</Text>
                                        <Input
                                            mb={5}
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            focusBorderColor='white'
                                            _focus={{
                                                borderBottomColor: "#1485E8",
                                                borderBottomWidth: "2px",
                                            }}
                                            borderBlock={"0px solid black"}
                                            borderBottom={"1px solid black"}
                                            borderRight={"0px solid white"}
                                            borderLeft={"0px solid black"}
                                            borderRadius={"0px"}
                                            paddingLeft={0}
                                            required
                                        />
                                    </Box>
                                    <Box>
                                        <Text>Email</Text>
                                        <Input
                                            type='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            focusBorderColor='white'
                                            _focus={{
                                                borderBottomColor: "#1485E8",
                                                borderBottomWidth: "2px",
                                            }}
                                            borderBlock={"0px solid black"}
                                            borderBottom={"1px solid black"}
                                            borderRight={"0px solid white"}
                                            borderLeft={"0px solid black"}
                                            borderRadius={"0px"}
                                            paddingLeft={0}
                                            required
                                        />
                                    </Box>
                                    <Box>
                                        <Text>Senha</Text>
                                        <InputGroup>
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                focusBorderColor='white'
                                                _focus={{
                                                    borderBottomColor: "#1485E8",
                                                    borderBottomWidth: "2px",
                                                }}
                                                borderBlock={"0px solid black"}
                                                borderBottom={"1px solid black"}
                                                borderRight={"0px solid white"}
                                                borderLeft={"0px solid black"}
                                                borderRadius={"0px"}
                                                paddingLeft={0}
                                                required
                                            />
                                            <InputRightElement>
                                                <Box onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? <GoEyeClosed /> : <GoEye />}
                                                </Box>
                                            </InputRightElement>
                                        </InputGroup>
                                    </Box>
                                    <Box>
                                        <Button onClick={handleRegister} _hover={{ bg: "#30806e" }} bg={"#399984"}>
                                            <Text color="white" fontWeight={"light"}>Cadastrar</Text>
                                        </Button>
                                    </Box>
                                    <Box size="xl" display="flex" justifyContent={"center"} alignItems={"center"}>
                                        <Text>
                                            Já tem uma conta?<a href="/login"> <Text as="span" _hover={{ textDecoration: "underline" }} cursor={"pointer"} color={"#1485E8"}> clique aqui.</Text></a>
                                        </Text>
                                    </Box>
                                    <Box size="xl">
                                        <HStack>
                                            <Divider opacity={1} />
                                            <Text fontFamily={"Alata"} fontSize={"14px"} whiteSpace={"nowrap"}>Ou</Text>
                                            <Divider opacity={1} />
                                        </HStack>
                                    </Box>
                                    <Box size="xl" display="flex" justifyContent={"center"} alignItems={"center"}>
                                        <GoogleLogin
                                            onSuccess={handleSuccessAuth}
                                            onError={handleErrorAuth}
                                        />
                                    </Box>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <Text textAlign={"center"} p={5} fontFamily={"Alata"} fontSize={"12px"}>Ao continuar você concorda com nossa
                                    <a href="/register">
                                        <Text as="span" cursor={"pointer"} color={"#1485E8"}> política de privacidade.</Text>
                                    </a>
                                </Text>
                            </CardFooter>
                        </Card>
                    </Layout>
                </Box>
                <Box alignItems={"center"} display="flex" justifyContent={"right"}>
                    <Image w={"50%"} src={i18n.form.image.logo} />
                </Box>
            </SimpleGrid>
        </Container>
    );
}
