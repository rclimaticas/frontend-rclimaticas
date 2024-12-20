import React, { useState, useContext } from 'react';
import { Container, Card, CardHeader, CardBody, CardFooter, Box, Heading, Text, Image, Center, SimpleGrid, Stack, Input, Divider, Button, InputGroup, InputRightElement, useToast, HStack } from '@chakra-ui/react';
import { GoEye, GoEyeClosed } from "react-icons/go";
import Layout from '../layout.jsx';
import i18n from '../i18n/i18n.json';
import { GoogleLogin } from '@react-oauth/google';
import { AuthContext } from '../context/authcontext.jsx';
import axios from 'axios';
import  { jwtDecode }  from "jwt-decode";
import { GoogleAuthContext } from '../context/GoogleAuthContext.jsx';
import { AccountSettingsContext } from '../context/AccountSettingsContext';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const toast = useToast();

    const { setAuth, auth, login } = useContext(AuthContext);
    const { setGoogleAuth, googleAuth, googleLogin } = useContext(GoogleAuthContext);
    const { updateUserData } = useContext(AccountSettingsContext);
    console.log('auth', auth);

    const handleSuccessAuth = async (response) => {
        try {
            const decoded = jwtDecode(response.credential);
            const userEmail = decoded.email;
            const userName = decoded.name;
            const password = 'scorpit123';

            try {
                const loginResponse = await axios.post('https://backend-rclimaticas-2.onrender.com/login', { email: userEmail, password: password });

                if (loginResponse.status === 200) {
                    const { token, user } = loginResponse.data;
                    const id = user.id;

                    localStorage.setItem('auth', 'true');
                    login(token, id);
                    localStorage.setItem('token', token);
                    toast({
                        title: "Login bem-sucedido",
                        description: "Seja bem-vindo(a)!",
                        status: "success",
                        position: "top",
                    });
                    googleLogin(response.credential, decoded);
                    window.location.href = "/";
                    return;
                }
            } catch (loginError) {
                console.error('Erro ao tentar fazer login:', loginError.message);
            }

            try {
                const registerResponse = await axios.post('https://backend-rclimaticas-2.onrender.com/register', { email: userEmail, password: password, username: userName });
                googleLogin(response.credential, decoded);

                if (registerResponse.status === 201 || registerResponse.status === 200) {
                    if (registerResponse.data.error) {
                        console.error('Erro de registro:', registerResponse.data.error);
                        toast({
                            title: "Erro de registro",
                            description: registerResponse.data.error,
                            status: "error",
                            duration: 5000,
                            isClosable: true,
                            position: "top",
                        });
                    } else {
                        console.log('Registro bem-sucedido:', registerResponse.data);
                        toast({
                            title: "Registro bem-sucedido",
                            description: "Seja bem-vindo(a)!",
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                            position: "top",
                        });
                    }
                }
            } catch (registerError) {
                console.error('Erro ao registrar:', registerError.message);
                toast({
                    title: "Erro",
                    description: "Ocorreu um erro ao tentar registrar. Por favor, tente novamente.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "top",
                });
            }

            try {
                const loginResponse = await axios.post('https://backend-rclimaticas-2.onrender.com/login', { email: userEmail, password: password });

                if (loginResponse.status === 200) {
                    const { token, user } = loginResponse.data;
                    const id = user.id;

                    localStorage.setItem('auth', 'true');
                    login(token, id);
                    localStorage.setItem('token', token);
                    toast({
                        title: "Login bem-sucedido",
                        description: "Seja bem-vindo(a)!",
                        status: "success",
                        position: "top",
                    });
                    googleLogin(response.credential, decoded);
                    window.location.href = "/";

                } else {
                    throw new Error('Erro ao tentar fazer login com conta existente.');
                }
            } catch (loginErrorAfterRegister) {
                console.error('Erro ao tentar registrar ou logar:', loginErrorAfterRegister);
                toast({
                    title: "Falha ao se logar",
                    description: loginErrorAfterRegister.message || "Ocorreu um erro ao tentar fazer o login!",
                    status: "error",
                    position: "top",
                });
            }

        } catch (error) {
            console.error('Erro ao tentar registrar ou logar:', error);
            toast({
                title: "Falha ao se logar",
                description: error.message || "Ocorreu um erro ao tentar fazer o login!",
                status: "error",
                position: "top",
            });
        }
    };

    const handleErrorAuth = (error) => {
        console.error('Falha na autenticação:', error);
        toast({
            title: "Falha ao se logar",
            description: "Ocorreu um erro ao tentar fazer o login!",
            status: "error",
            position: "top",
        });
    };

    const handleLogin = async () => {
        try {
            const userData = {
                email: email,
                password: password
            };

            const response = await axios.post('https://backend-rclimaticas-2.onrender.com/login', userData);

            if (response.status === 200) {
                if (response.data.error) {
                    console.error('Falha ao fazer login:', response.data.error);
                    toast({
                        title: "Erro de login",
                        description: "Ocorreu um erro ao tentar fazer login. Por favor, verifique sua senha ou email.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                        position: "top",
                    });
                } else {
                    const { token, user } = response.data;
                    const id = user.id;
                    console.log('Login bem-sucedido:', token, id);
                    localStorage.setItem('auth', 'true');
                    login(token, id);
                    localStorage.setItem('token', token);
                    toast({
                        title: "Login bem-sucedido",
                        description: "Seja bem-vindo(a)!",
                        status: "success",
                        position: "top",
                    });
                    window.location.href = '/';
                }
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <Container maxW="full" h="100vh" bgImage={i18n.form.bg} bgSize={"cover"} alignItems={"center"} display="flex" justifyContent={"center"}>
            <SimpleGrid columns={2} spacingX='90px' spacingY='60px'>
                <Box alignItems={"center"} display="flex">
                    <Image w={"50%"} src={i18n.form.image.logo} />
                </Box>
                <Box>
                    <Layout maxW={"container.xl"}>
                        <Card maxW='md' borderRadius={"50px"} boxShadow={"0px 0px 20px rgba(8, 0, 0, 0.5)"}>
                            <CardHeader>
                                <Center>
                                    <Heading size='xl'>{i18n.form.title.login}</Heading>
                                </Center>
                            </CardHeader>
                            <CardBody>
                                <Stack fontFamily={"Alata"} fontSize={"14px"} opacity={0.7} spacing={5}>
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
                                        ></Input>
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
                                            ></Input>
                                            <InputRightElement>
                                                <Box onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? <GoEyeClosed /> : <GoEye />}
                                                </Box>
                                            </InputRightElement>
                                        </InputGroup>
                                    </Box>
                                    <Box>
                                        <Button onClick={handleLogin} _hover={{ bg: "#30806e" }} bg={"#399984"}>
                                            <Text color="white" fontWeight={"light"}>Entrar</Text>
                                        </Button>
                                    </Box>
                                    <Box size="xl" display="flex" justifyContent={"center"} alignItems={"center"}>
                                        <Text>
                                            Caso ainda não tenha feito o cadastro,
                                            <a href="/register">
                                                <Text as="span" _hover={{ textDecoration: "underline" }} cursor={"pointer"} color={"#1485E8"}> clique aqui.</Text>
                                            </a>
                                        </Text>
                                    </Box>
                                    <Box size="xl" display="flex" justifyContent={"center"} alignItems={"center"}>
                                        <Text>
                                            Login para{' '}
                                            <a href="/validators">
                                                <Text as='span' _hover={{ textDecoration: "underline" }} cursor={"pointer"} color={"#1485E8"}>
                                                    Validadores
                                                </Text>
                                            </a>
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
                                    <a href="/privacy">
                                        <Text as="span" cursor={"pointer"} color={"#1485E8"}> política de privacidade.</Text>
                                    </a>
                                </Text>
                            </CardFooter>
                        </Card>
                    </Layout>
                </Box>
            </SimpleGrid>
        </Container>
    );
}
