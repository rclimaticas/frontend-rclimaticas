import React, { useState } from 'react';
import { Center, Container, Box, Image, HStack, Heading, VStack, Input, Text, Stack, Divider, Button, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import { GoogleLogin } from '@react-oauth/google';
import { GoEye, GoEyeClosed } from "react-icons/go";
import axios from "axios";
import { useAuth } from '../hooks/authcontext';
import { useUser } from '../hooks/userContext';
import LogoProject from '../../assets/logoProject.png';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { login } = useAuth();
    const { user, setUser } = useUser();
    const toast = useToast();

    const handleSuccessAuth = (response) => {
        console.log(response) // atualiza o estado global com os dados do usuário
      };
    
      const handleErrorAuth = (error) => {
        console.error('Falha na autenticação:', error);
      };


    const handleLogin = async () => {
      try {
        const userData = {
          email: email,
          password: password
        };
  
        const response = await axios.post('http://localhost:3333/login', userData);
  
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
            
            console.log('Login bem-sucedido:', response.data);
            const token = response.data.token; 
            localStorage.setItem('token', token)
            console.log('Login bem-sucedido:', token); 
            login(token)
            toast({
              title: "Login bem-sucedido",
              description: "Seja bem-vindo(a)!",
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
        <Center>
            <Box w={"100%"} h="100vh" overflow={"hidden"} >
                <Image
                    style={{ backgroundAttachment: "fixed", objectFit: "cover" }}
                    w={"100%"}
                    h="100vh"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f51858128024169.614d9da8acd37.jpg" />

            </Box>
            <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="rgba(0, 0, 0, 0.8)"
            />

            <HStack pos="absolute" spacing={"20rem"}>
                <Box
                w="500px"
                h="200px"
                bgImage={LogoProject}
                bgSize="cover"
                ></Box>
                <Box bg={"white"}
                    w={"500px"}
                    h={"600px"}
                    borderRadius={"50px"}
                    boxShadow={"0px 0px 20px rgba(8, 0, 0, 0.5)"}
                    p={6}
                >
                    <VStack spacing={"5rem"}>

                        <Heading fontFamily={"Alata"} >Entrar na conta</Heading>
                        <Container maxW={"md"}>

                            <Stack
                                fontFamily={"Alata"}
                                fontSize={"14px"}
                                opacity={0.7}
                                spacing={5}
                            >
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
                                    <Text >Senha</Text>
                                    <InputGroup>
                                    <Input
                                        type={showPassword ? "text" : "password"} // alternar entre texto e senha
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
                                        <Button size="sm" _hover={{ bg: "transparent" }} bg="transparent" _focus={{ bg: "transparent" }} onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <GoEyeClosed /> : <GoEye />}
                                        </Button>
                                    </InputRightElement>
                                    </InputGroup>
                                </Box>
                                <Button  onClick={handleLogin} _hover={{ bg: "#30806e" }} bg={"#399984"}>
                                    <Text color="white" fontWeight={"light"}  >Entrar</Text>
                                </Button>
                                <Text textAlign={"center"}>Caso ainda não tenha feito o cadastro,
                                    <a href="/register">
                                        <Text as="span" cursor={"pointer"} color={"#1485E8"} href="/register"> clique aqui.</Text>
                                    </a>
                                </Text>


                            </Stack>
                            <HStack
                                display={"flex"}
                                justifyContent={"center"}
                                mt={10}

                            >
                                <Divider opacity={1} />
                                <Text fontFamily={"Alata"} fontSize={"14px"} whitespace={"nowrap"}>Ou</Text>
                                <Divider opacity={1} />
                            </HStack>
                            <HStack
                                mt={5}
                                display={"flex"}
                                justifyContent={"center"}
                            >
                                <GoogleLogin
                                onSuccess={credentialResponse => {
                                  // Verificar se credentialResponse.profile existe antes de acessar suas propriedades
                                  if (credentialResponse && credentialResponse.profile) {
                                    // Acessando o email e o nome do usuário
                                    const email = credentialResponse.profile.email;
                                    const name = credentialResponse.profile.name;
                              
                                    console.log('Email:', email);
                                    console.log('Name:', name);
                                  } else {
                                    console.log('Failed to get profile information');
                                  }
                                }}
                                onError={() => {
                                  console.log('Login Failed');
                                }}
                              />;
                            </HStack>
                            <Text textAlign={"center"} p={5} fontFamily={"Alata"} fontSize={"12px"}>Ao continuar você concorda com nossa
                                <a>
                                    <Text as="span" cursor={"pointer"} color={"#1485E8"} href="/register"> política de privacidade.</Text>
                                </a>
                            </Text>
                        </Container>
                    </VStack>
                </Box>
            </HStack>
        </Center>
    );
}