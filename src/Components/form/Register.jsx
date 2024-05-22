import React, { useState } from 'react';
import { Container, Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, Image, Center, SimpleGrid, Stack, Input, Divider, Button, InputGroup, InputRightElement, useToast, HStack  } from '@chakra-ui/react';
import { GoEye, GoEyeClosed } from "react-icons/go";
import Layout from '../layout.jsx';
import i18n from '../i18n/i18n.json';
import { GoogleLogin } from '@react-oauth/google';

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



    const handleLogin = async () => {
      try {
        const userData = {
          email: email,
          username: username,
          password: password
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
            const token = response.data.token; 
            localStorage.setItem('token', token)
            toast({
              title: "Login bem-sucedido",
              description: "Seja bem-vindo(a)!",
              position: "top",
            });
            window.location.href = '/login';
          }
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    };
    return (
        <>
            <Container maxW="full" h="100vh" objectFit={"cover"} bgImage={i18n.form.bg} bgSize={"cover"} alignItems={"center"} display="flex" justifyContent={"center"}>
                <SimpleGrid columns={2} spacingX='90px' spacingY='60px'>

                    <Box >
                        <Layout maxW={"container.xl"}>
                            <Card maxW='md' borderRadius={"50px"} boxShadow={"0px 0px 20px rgba(8, 0, 0, 0.5)"} >
                                <CardHeader>
                                    <Center>
                                        <Heading size='xl'>{i18n.form.title.register}</Heading>
                                    </Center>
                                </CardHeader>
                                <CardBody>
                                <Stack
                                fontFamily={"Alata"}
                                fontSize={"14px"}
                                opacity={0.7}
                                spacing={5}
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
                                        <Box onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <GoEyeClosed /> : <GoEye />}
                                        </Box>
                                    </InputRightElement>
                                    </InputGroup>
                                </Box>
                                <Box>
                                    <Button  onClick={handleLogin} _hover={{ bg: "#30806e" }} bg={"#399984"}>
                                        <Text color="white" fontWeight={"light"}>Cadastrar</Text>
                                    </Button>
                                </Box>
                                <Box size="xl" display="flex" justifyContent={"center"} alignItems={"center"}>
                                    <Text>
                                        Já tem uma conta?<a href="/login"> <Text as="span" _hover={{textDecoration: "underline"}} cursor={"pointer"} color={"#1485E8"} href="/login"> clique aqui.</Text></a>
                                    </Text>
                                </Box>
                                <Box size="xl">
                                    <HStack>
                                    <Divider opacity={1} />
                                    <Text fontFamily={"Alata"} fontSize={"14px"} whitespace={"nowrap"}>Ou</Text>
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
      
                                <CardFooter
                                >
                                    <Text textAlign={"center"} p={5} fontFamily={"Alata"} fontSize={"12px"}>Ao continuar você concorda com nossa
                                        <a>
                                    <Text as="span" cursor={"pointer"} color={"#1485E8"} href="/register"> política de privacidade.</Text>
                                        </a>
                                    </Text>
                                </CardFooter>
                            </Card>
                        </Layout>
                    </Box>
                    <Box alignItems={"center"} display="flex" justifyContent={"center"}>
                        <Image w={"50%"} src={i18n.form.image.logo} />
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    );
}