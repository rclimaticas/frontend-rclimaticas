import React from "react";
import { Flex, SimpleGrid, Box, Center, Text, Stack, Heading, Image, Button, Grid, GridItem, Input, InputGroup, InputLeftAddon, InputRightAddon} from "@chakra-ui/react";
import Carousel from "../main/hooks.colaborates/main.colaborates.carousel";
import collaborate1 from "../../assets/collaborate1.png";
import collaborate2 from "../../assets/collaborate2.png";
import collaborate3 from "../../assets/collaborate3.png";
import Fantasminha from "../../assets/fantasminha.png";
import Dashboard from "../../assets/dashboard.png";
import Ekonavi from "../../assets/ekonavi.png";
import Article1 from "../../assets/article1.png";
import Article2 from "../../assets/article2.png";
import Fundo from "../../assets/fundo.png";
import NewsImage from "../../assets/news.png";
import Financiadores from "../../assets/financiadores.png";
import Trusted from "../../assets/trusted.png";
import ConceitoPlataforma from "../../assets/conceitoPlataforma.pdf";
import BoletimInformativo from "../../assets/boletimInformativo.pdf"
export default function Main() {

    return (
        <>
            <SimpleGrid minChildWidth='150px' mr={180} top={{base: 0, md: "140px"}} 
            
            position='relative' spacing={{md: "600px", "2xl": "200px"}}>
            <Box 
            display={{md: 'block'}} 
            height={{base: '700px', md: '400px'}}
            bottom={{base: 150, md: "62px"}}
            position={"relative"}
            w={{base: "760px", md: "450px"}}
            right={{base: "193px", md: "0px"}}
            left={{base: "0px", md: "50px"}}
          
            >
                <Center>
                <Image
                src='https://iili.io/JXrpbXn.md.png'
                w={{md: "100%"}}
                ></Image>
                </Center>
            </Box>
            <Box
            height={{ md: '400px', '2xl': '400px'}} mt={{base: 0, md: 10}}
            w={{md: "420px", '2xl': "450px"}}
            right={{md: "175px", '2xl': "0px"}}
            bottom={{md: 100, '2xl': "100px"}}
            position={"relative"}
            
            >
            <Stack
            spacing={30} 
            position={"relative"}
            >
            
                <Heading
                fontSize={{md: 32, '2xl': 40}}
                textAlign={"left"}
                >
                    Plataforma <br /> Colaborativa dos <br /> Povos, Comunidades e <br /> da Natureza
                </Heading>
                <Text
                fontSize={{md: 25, '2xl': 20}}
                >
                    Um espaço descentralizado com o propósito de conectar redes, saberes tradicionais, dados técnicos e acadêmicos.
                </Text>
            <a 
            target="_blank" rel="noopener noreferrer"
            href={ConceitoPlataforma}>
                <Button
                width={{md: "30%", lg: "50%", xl: "50%", '2xl': "50%"}} 
                border={"2px"}
                _hover={{bg: "#bdbf47"}}
                bg={{md: "#CFD249"}}
                boxShadow="-4px 4px 4px rgba(0, 0, 0, 0.4)"
                
                >
                    <Text
                    fontFamily={'Fira Code'}
                    fontSize={{md: "22px", lg: "20px", xl: "20px", '2xl': "20px"}}
                    
                    >Saber Mais</Text>
                </Button>
            </a>
            </Stack>
            </Box>
            
            </SimpleGrid>
           
    
            <SimpleGrid display={"block"} columns={1} spacing={8} mt={150}>
                <Box  bgColor="#7D9270" position="relative" 
                marginLeft={"-200px"}
                height={{md: "680px"}}
               
                >
                    <SimpleGrid columns={1}>

                        <Box>
                        <Box mt={100} position="relative" 
                        left={{md: 160, "2xl": 210}} 
                        w={{md: "1100px"}} height='550px'
                        >
                            <Carousel
                            slides={[
                                { imageUrl: collaborate1, link: "https://www.espiralds.com/sofia" },
                                { imageUrl: collaborate2, link: "/ondefoi" },
                                { imageUrl: collaborate3, link: "/datarc" }
                              ]}
                            /> 
                        </Box>      
                        </Box>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>

            <Grid
            
            position={"relative"}
            right={{md: "10px"}}
            width={"90%"}
            >
                <Text
                textAlign={"right"}
                right={{md: "0px"}}    
                fontFamily={"Arial Black"}
                fontSize={{md: "35px"}}
                mt={{md: 10}}
                >
                    Registre Ocorrências de conflitos
                    <br />
                    em seu território e receba apoio
                    <br />
                    gratuito.
                    <br/>
                    <a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://arcg.is/1mzbme" >
                    <Button 
                    w={{md: "25%", '2xl': "20%"}}
                    pos={"relative"}
                    _hover={{bg: "#bdbf47"}}
                    bg={"#CFD249"}
                    right={"200px"}
                    bottom={"50px"}
                    boxShadow={"-4px 4px 4px rgba(0, 0, 0, 0.4)"}
                    >
                        <Text
                        fontFamily={"Arial Black"}
                        color="black"
                        >
                            Acessar o aplicativo aqui
                        </Text>
                    </Button>
                    </a>
                </Text>
                
            </Grid>
            <SimpleGrid 
            columns={2}
            right={{md: "10px"}}
            position={"relative"}
            w={{md: "90%" }}
           
            spacing='40px'>
                
                <Box zIndex={1}
                 w={"80%"}
                
                 height='410px'
                 mt={5}
                 >
                    <Heading
                    fontFamily={"Arial Black"}
                    >
                        No período...
                    </Heading>
                    <Text
                    fontFamily={"Colibri Corpo"}
                    fontSize={"30px"}
                    mt={5}
                    >
                    Foram registrados <strong>20 ocorrências</strong>, sendo 
                    <strong> 6 animais selvagens encontrados, 4 conflitos com empreendimentos, 2 desmatamentos,
                    3 poluições no rio, 1 poluição de solo/erosão, 1 queimada e 3 outras ocorrências.
                    </strong>
                    </Text>
                   <a href={BoletimInformativo}  target="_blank" rel="noopener noreferrer">
                        <Button position={"relative"}
                        top={{md: "20px"}}
                        w={{md: "50%", '2xl': "40%"}}
                        _hover={{bg: "#bdbf47"}}
                        bg={{md: "#CFD249"}}
                        boxShadow={"-4px 4px 4px rgba(0, 0, 0, 0.4)"}
                        >
                            <Text
                            fontFamily={"Arial Black"}
                            color="black"
                            >
                                Ler Boletim Mensal
                            </Text>
                        </Button>
                    </a>    
                 </Box>
                
                {/* bg ta com tamanho certinho do dashboard */}
                <Box pos={"relative"}
                right={{md: "120px", '2xl': "130px"}}
                mt={10}
                w={{md:"130%", '2xl': "135%"}} height='387px'
                boxShadow={"-4px 20px 20px rgba(8, 0, 0, 1)"}
                bgImage={Dashboard}
                bgSize="cover"
                > 
                </Box>
            </SimpleGrid>
            <SimpleGrid 
            
            columns={1} spacing={10}>
                <Box
                h="80px"
                w={"40%"}
                pos="relative"
                left={"650px"}
                top={"350px"}
                zIndex={3}
                >
                    <Heading
                    textAlign={"right"}
                    fontSize={"30px"}
                    >
                    Faça parte da Ekonavi, uma rede
                    <br />
                    social colaborativa que te paga
                    <br />
                    por impacto gerado.
                    </Heading>
                </Box>
                <Box
                h="500px"
                w={"40%"}
                left={"650px"}
                pos="relative"
                top={"350px"}
                zIndex={3}
                >
                    <a href="https://ekonavi.com/" target="_blank" rel="noopener noreferrer">
                    <Image
                    pos={"relative"}
                    left="40px"
                    transition="transform 0.3s"
                    _hover={{ transform: "scale(1.05)" }}
                    src={Ekonavi} />
                    </a>
                    
                </Box>
                

                <Box 
                w={"45%"}
                zIndex={2}
                pos={"relative"}
                top={{md: "440px", '2xl': "440px"}}
                left={{md: "630px", '2xl': "630px"}}
                height='350px'>
                    <Heading
                    textAlign={"right"}
                    fontFamily={"Chiller"}
                    fontSize={"50px"}
                    pos={"relative"}
                    right={{md: "65px", '2xl': "65px"}}
                    >Trusted by:</Heading>
                    <Image src={Trusted} />
                </Box>

            </SimpleGrid>
            <SimpleGrid 
            marginLeft={"-200px"}
            columns={1} spacing={10}
            mt={"-1000px"}
            >
                <Box
                position={"relative"}
                zIndex={1}
                top={"250px"}
                mt="-100px"
                bg="white"
                h={"600px"}
                borderRadius={"50px"}
                w={"30%"}
                ml={{md: "180px", '2xl': "180px"}}
                pos={"relative"}
                boxShadow={"-4px 8px 10px rgba(8, 0, 0, 0.5)"}
                >
                    <Image
                    pos="relative"
                    left="30px"
                    top="30px"
                    w="90%" src={NewsImage}/>
                </Box>

                <Box
                h="250px"
                zIndex={4}
                w={"25%"}
                pos="relative"
                left={"180px"}
                top={{md: "170px", '2xl': "170px"}}
                mt={20}

                >
                    <Heading
                    pos={"relative"}
                    bottom={"20px"}
                    fontSize={"28px"}
                    >
                        <u>
                            Publicações Recentes:
                        </u>
                    </Heading>
                    <Flex>
                    <a href="https://nordestepotencia.org.br/wp-content/uploads/2024/02/Salvaguardas_Socioambientais_Renovaveis.pdf"
                    target="_blank" rel="noopener noreferrer"
                    >
                        <Image
                        transition="transform 0.3s"
                        _hover={{ transform: "scale(1.05)" }}
                        w={"89%"} ml={2} src={Article2}/>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                            w="100%"
                            src={Article1}
                            alt="Descrição da Imagem"
                            cursor="pointer"
                            transition="transform 0.3s"
                            _hover={{ transform: "scale(1.05)" }}
                        />
                        </a>
                    </Flex>
                </Box>

                <Box
                h="160px"
                zIndex={4}
                w={"25%"}
                pos="relative"
                left={"180px"}
                top={{md: "210px", '2xl': "210px"}}
                >
                    <Stack 
                    spacing={4}>
                        <Text
                        fontSize={"18px"}
                        fontFamily={"Arial"}
                        >Receba Atualizações</Text>
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
                    </Stack>
                    <Button
                    mt={5}
                    w={"30%"}
                    _hover={{bg: "white"}}
                    bg={{md: "white"}}
                    boxShadow={"-4px 4px 4px rgba(0, 0, 0, 0.4)"}
                    >
                        <Text
                        fontSize={"18px"}
                        >
                            Enviar
                        </Text>
                    </Button>
                </Box>
        
                <Box
                h="150px"
                zIndex={4}
                w={"30%"}
                pos="relative"
                left={"180px"}
                top={"150px"}
                mt={100}
                mb={40}
                >
                    <Center>
                        <Text fontSize={"18px"} fontFamily={"Arial"}>
                            <u>
                                Contribua com o projeto financiado
                            </u>
                        </Text>
                    </Center>
                    <Image mt={5} src={Financiadores} />
                </Box>
                <Box
                height='900px'
                pos="relative"
                mt={"-900px"}
                backgroundImage={Fundo}
                ></Box>
            </SimpleGrid>
           

                    

            
        </>
    );
}
