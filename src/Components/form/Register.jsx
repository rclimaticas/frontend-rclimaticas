import React, { useState } from 'react';
import { Center, Container, Box, Image, HStack, Heading, VStack, Input, Text, Stack, Divider, Button, InputGroup, InputRightElement, useToast } from '@chakra-ui/react';
import { GoogleLogin } from '@react-oauth/google';
import { GoEye, GoEyeClosed } from "react-icons/go";
import axios from "axios";
import LogoProject from '../../assets/logoProject.png';
import BackgroundRegister from '../../assets/register/backgroundRegister.png';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const toast = useToast();

    const handleSuccessAuth = (response) => {
        console.log(response)
        toast({
            title: "Registro feito com sucesso!",
            description: "Seja bem-vindo(a)!",
            status: "success",
            position: "top",
          });
          window.location.href = '/';
      };
    
      const handleErrorAuth = (error) => {
        console.error('Falha na autenticação:', error);
        toast({
            title: "Falha ao se registrar",
            description: "Ocorreu um erro ao tentar fazer o registro!",
            status: "error",
            position: "top",
          });
      };


    const handleRegister = async () => {
      try {
        const userData = {
          email: email,
          username: username,
          password: password,
        };
  
        const response = await axios.post('https://backend-rclimaticas.onrender.com/register', userData);
  
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
            
            console.log('Registro bem-sucedido:', response.data);
           
            toast({
              title: "Registro bem-sucedido",
              status: "success",
              description: "Seja bem-vindo(a)!",
              position: "top",
            });
            window.location.href = '/login';
          }
        }
      } catch (error) {
        console.error('Erro ao fazer registro:', error);
      }
    };

    return (
        <Center>
            <Box w={"100%"} h="100vh" overflow={"hidden"} >
                <Image
                    style={{ backgroundAttachment: "fixed", objectFit: "cover" }}
                    w={"100%"}
                    h="100vh"
                    src={BackgroundRegister} />

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
                
                <Box bg={"white"}
                    w={"500px"}
                    h={"600px"}
                    borderRadius={"50px"}
                    boxShadow={"0px 0px 20px rgba(8, 0, 0, 0.5)"}
                    p={6}
                >
                    <VStack spacing={"5rem"}>

                        <Heading fontFamily={"Alata"} >Cadastrar sua Conta</Heading>
                        <Container maxW={"md"}>

                            <Stack
                                fontFamily={"Alata"}
                                fontSize={"14px"}
                                opacity={0.7}
                                spacing={5}
                                pos="relative"
                                bottom={10}
                            >
                                <Box>
                                    <Text>Nome</Text>
                                   
                                    <Box>
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
                                        ></Input>
                                    </Box>
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
                                <Button  onClick={handleRegister} _hover={{ bg: "#30806e" }} bg={"#399984"}>
                                    <Text color="white" fontWeight={"light"}  >Cadastrar</Text>
                                </Button>

                                <Text textAlign={"center"}>Já tem uma conta?
                                    <a href="/login">
                                        <Text as="span" cursor={"pointer"} color={"#1485E8"}> Entre aqui.</Text>
                                    </a>
                                </Text>
                            </Stack>
                            <HStack
                                display={"flex"}
                                justifyContent={"center"}
                                mt={-5}
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
                                onSuccess={handleSuccessAuth}
                                onError={handleErrorAuth}
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
                <Box
                w="500px"
                h="200px"
                bgImage={LogoProject}
                bgSize="cover"
                ></Box>
            </HStack>
        </Center>
    );
}
