import React from "react";
import { Flex, SimpleGrid, Box, Center, Text, Stack, Heading, Image, Button, Grid, GridItem  } from "@chakra-ui/react";
import Carousel from "../main/hooks.colaborates/main.colaborates.carousel";
import colaborate1 from "../../assets/colaborate1.png";
import colaborate2 from "../../assets/colaborate2.png";
import Fantasminha from "../../assets/fantasminha.png";
import Dashboard from "../../assets/dashboard.png";
import DashboardDoodle from "../../assets/dashboardDoddle.png";
import  circulo from "../../assets/circulo.png";
import Ekonavi from "../../assets/ekonavi.png";
import News from "./hooks/main.news"
import ScienceDoodle from "../../assets/science.png";
import Article1 from "../../assets/article1.png";
import Article2 from "../../assets/article2.png";
import LogoProject from "../../assets/logoProject.png";
import Contribution from "./hooks/main.input";
import Confiadores from "../../assets/Confiadores.png";
import Footer from "../footer/footer";

export default function Main() {
    const images = [colaborate1, colaborate2];
    const [isHovered, setIsHovered] = React.useState(false);
    const [isHovered2, setIsHovered2] = React.useState(false);
    return (
        <>
            <SimpleGrid minChildWidth='350px'mr={180} top={{base: 0, md: 50 }} 
            
            position='relative' spacing={{base: '100px', sm:'40px', md: '200px', lg: '40px'}} >
            <Box height='470px' mt={{base: 0, md: 10}}>
            <Stack
            spacing={30} 
            position={"relative"}
            >
            
                <Heading
                fontSize={{base: 20, md: 50, lg: 50, xl: 50, '2xl': 50}}
                >
                    Plataforma Colaborativa para Povos, Comunidades e Indios
                </Heading>
                <Text
                fontSize={{base: 20, md: 25, lg: 25, xl: 25, '2xl': 20}}
                >
                    Boas práticas de adaptação à mudança do clima em áreas costeiras e nos biomas Mata Atlântica Cerrado e Caatinga baianos.
                </Text>
            <Button
            width={"50%"}
            height={{base: "50px", sm: "50px", md: "50px", lg: "50px", xl: "50px", '2xl': "50px"}}
            border={"2px"}
            bgColor={"white"}
            _hover={{bg: "#CFD249"}}
            boxShadow="-4px 4px 4px rgba(0, 0, 0, 0.4)"
            >
                <Text
                fontFamily={'Fira Code'}
                fontSize={{base: "0px", sm: "0px", md: "0px", lg: "20px", xl: "20px", '2xl': "20px"}}
                
                >Saber Mais</Text>
            </Button>
            </Stack>
            </Box>
            <Box display={{base: 'none', sm: 'none', md: 'block'}} height='700px'>
                <Center>
                <Image
                src='https://iili.io/JXrpbXn.md.png'
                w={"100%"}
                ></Image>
                </Center>
            </Box>
            </SimpleGrid>
    
            <SimpleGrid columns={1} spacing={8} mt={8}>
                <Box  bgColor="white" position="relative" right={200} 
                width={{ lg: "1027px", xl: "1442px", '2xl': "1521px"}} height="1300px">
                    <SimpleGrid columns={2}>
                        <Box width={"200%"}>
                        <Text fontFamily="Fira Code" fontWeight="bold" fontSize="60px" ml={200} mt={20}>
                            nossos parceiros, assim como a gente, são <br /> impulsionados pela <br /> tecnologia para um <br /> mundo melhor.
                        </Text>
                        </Box>
                        <Box>
                        <Image
                        src={Fantasminha}
                        w={{lg: "20%", xl: "30%", '2xl': "30%"}}
                        ml={200}
                        mt={250}
                        ></Image> 
                        <Box mt={100} position="relative" right={{lg: 500, xl: 500, '2xl': 470}} w="900px" height='550px'>
                            <Carousel images={images} /> 
                        </Box>      
                        </Box>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>
            <SimpleGrid  minChildWidth="350px" mt={20} mr={180} columns={2}>          
                <Box >
                    <Center mt= {{base: 20, sm: 20, md: 0, lg: 100, xl: 0, '2xl': 0}}>
                        <Flex zIndex={1}>
                        <Text textAlign={"left"} color={"black"} mt={20} fontSize={50} fontWeight="bold" fontFamily={"Fira Code"} mb={9}>
                        Registre Ocorrências de conflitos 
                        em seu território e receba apoio gratuito.
                        
                        </Text>
                        </Flex>
                        
                    </Center>
                    <Flex zIndex={0} position="relative"  right={100} 
                    bottom={{lg: 500, xl: 600, '2xl': 600}}>
                            <img
                            width={400}
                            top={100}
                            position="absolute"
                            src={circulo}
                            ></img>
                        </Flex>
                    {/* <Image
                    src={Dashboard}
                    w={"100%"}
                    ></Image> */}   
                </Box>
                <Box position={"relative"} 
                bottom={{lg: 400, xl: 0, '2xl': 0}}
                >
                <a href="https://storyset.com/data" />
                <img src={DashboardDoodle}/>
                </Box>
            </SimpleGrid>
            
            <SimpleGrid columns={1}  spacing={1} >
                <Center
                 marginRight={{ lg: 190, xl: 250, '2xl': 190}} 
                 mt={{base: 0, sm: 0, md: 0, lg: 0, xl: 250, '2xl': 0}} mr={240}  position="relative" 
                 bottom={{lg: 200, xl: 400, '2xl': 250}}> 
                        <Flex>  
                            <Box zIndex={0} w={{lg: "800px", xl: "1200px", '2xl': "1200px"}} height='680px'>
                            <Center
                            mb={{lg: 10, xl: 10, '2xl': 20}}
                            >
                                <Heading fontFamily={'Fira Code'}>
                                    Dashboard de Registros
                                </Heading>
                            </Center>
                                <Image
                                boxShadow="-4px 4px 4px rgba(0, 0, 0, 0.8)"
                                src={Dashboard}
                                w={"100%"}
                                />
                            </Box>
                        </Flex>
                </Center>
            </SimpleGrid>
            
            <SimpleGrid>
                <Center mr={{ lg: 160, xl: 200, '2xl': 200}} position="relative" 
                bottom={{lg: 420, xl: 400, '2xl': 200}} mt={120}>
                    <Button  boxShadow="-4px 4px 4px rgba(0, 0, 0, 0.4)" width={{ lg: "60%", xl: "35%", '2xl': "35%"}} height={"50px"} _hover={{bg: "#CFD249"}} bgColor={"white"}>
                        <Text fontFamily={'Fira Code'} fontSize={20}>                      
                            Acessar o aplicativo aqui
                         </Text>
                    </Button>
                </Center>
            </SimpleGrid>
            
            <SimpleGrid mt={{base: 20, sm: 20, md: 20, lg: 0, xl: 20, '2xl': 20}} 
            mb={{lg: 20, xl: 0, '2xl': 20}} columns={2} position="relative" right={100} 
            bottom={{lg: 150, xl: 200, '2xl': 20}} spacing='40px'>
                <Box height='500px'>
                    <Center position={"relative"} bottom={{base: 0, sm: 0, md: 0, lg: 0, xl: 20, '2xl': 0}}>
                        
                        <a
                        cursor="pointer"
                        href="https://ekonavi.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <img
                        width={"100%"}
                        src={Ekonavi}
                        type="button"
                        style={{ 
                            cursor: "pointer",
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Aplica o zoom
                            transition: 'transform 0.3s ease', 
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        />
                        
                        </a>

                    </Center>
                </Box>
                <Box height='500px' w={"80%"}>
                    <Center mt={{base: 20, sm: 20, md: 20, lg: 0, xl: 20, '2xl': 20}}>
                        <Heading fontFamily={"Fira Code"} color={"black"} fontSize={40}>
                            Faça parte da Ekonavi, uma rede social 
                            colaborativa que te paga por impacto gerado.
                        </Heading>
                    </Center>
                </Box>
            </SimpleGrid>

            <SimpleGrid columns={1} spacing={8} mt={8}>
                <Box bgColor="#E9EB76" position="relative" right={200} 
                width={{ lg: "1027px", xl: "1442px", '2xl': "1521px"}} height="400px">
                </Box>       
            </SimpleGrid>

    
            <SimpleGrid zIndex={1} mr={200} 
            position={"relative"}
            bottom={{lg: 0, xl: 0, '2xl': 250}}
            columns={2} spacing={10}>
                <Box 
                bottom={{lg: 500, xl: 500, '2xl': 280}}
                right={{lg: 200, xl: 8, '2xl': 8}}
                position={"relative"} minW={{lg: "200%", xl: "125%", '2xl': "125%%"}} height='400px'>
                    <a href="https://storyset.com/data" />
                    
                    <Image position={"relative"}  src={ScienceDoodle}/>
                </Box>
                
                <Box position={"relative"} bottom={{lg: 400, xl: 400, '2xl': 120}} height='400px'>
                    <Center
                    mt={10}
                    position={"relative"}
                    mr={{lg: 30, xl: 90, '2xl': 90}}
                    >
                        <Heading
                        fontFamily={"Fira Code"}
                        >
                            Publicações Recentes
                        </Heading>
                    </Center>
                    <Center
                    mt={{lg: 2, xl: 10, '2xl': 10}}
                    >
                        <Text
                        fontFamily={"Fira Code"}
                        textAlign={"left"}
                        fontSize={{lg: 20, xl: 25, '2xl': 25}}
                        >
                            Aqui é o cantinho das publicações mais recentes, 
                            sempre que surgir algo novo relacionado ao nosso projeto, vai aparecer aqui :)
                        </Text>
                    </Center>
                </Box>
            </SimpleGrid>
            <SimpleGrid columns={1} spacing={8} position={"relative"} bottom={{lg: 400, xl: 410, '2xl': 400}}>
                <Box bgColor="white" position="relative" right={200} 
                width={{ lg: "1027px", xl: "1442px", '2xl': "1521px"}} height={{lg: "1100px", xl: "1400px", '2xl': "1400px"}}>
                    <SimpleGrid margin={200} mt={180} height={500} columns={2} spacing={200}>
                        <Box>
                            <a
                            cursor="pointer"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <Image 
                                src={Article1} w={"100%"}
                                type="button"
                                style={{ 
                                    cursor: "pointer",
                                    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Aplica o zoom
                                    transition: 'transform 0.3s ease', 
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                boxShadow={"0px 2px 2px rgba(0, 0, 0, 1)"}
                                />
                            </a>
                        </Box>
                        <Box
                        >
                            <a
                            cursor="pointer"
                            href="https://nordestepotencia.org.br/wp-content/uploads/2024/02/Salvaguardas_Socioambientais_Renovaveis.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <Image 
                                src={Article2} w={"100%"}
                                type="button"
                                style={{ 
                                    cursor: "pointer",
                                    transform: isHovered2 ? 'scale(1.1)' : 'scale(1)',
                                    transition: 'transform 0.3s ease', 
                                }}
                                onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}
                                height={{lg: 285, xl: 595, '2xl': 645}}
                                boxShadow={"0px 2px 2px rgba(0, 0, 0, 1)"}
                                />
                            </a>
                        </Box>
                    </SimpleGrid>
                    <Stack position={"relative"} bottom={{lg: 300, xl: 0, '2xl': 0}}>
                        <Center mt={2} mb={10}>
                            <Button
                            _hover={{ bg: "tomato" }}
                            bg={"#E9EB76"}
                            boxShadow={"0px 2px 2px rgba(0, 0, 0, 1)"}
                            >Ver mais</Button>
                        </Center>
                        <Center mb={10}>
                            <Text
                            fontSize={25}
                            >
                                Caso queira receber novas atualizações, 
                                deixe seu email abaixo:
                            </Text>
                        </Center>
                    <Contribution/>
                    </Stack>      
                </Box>       
            </SimpleGrid>

            <SimpleGrid 
            position={"relative"}
            bottom={{lg: 300, xl: 300, '2xl': 300}}
            right={{lg: 100, xl: 20, '2xl': 20}}
            columns={2} spacing={10}
            mt={200}
            >
                <Box
                height='600px' 
                width={'100%'}
                >
                    <Image
                    borderRadius={20}
                    src={Confiadores}
                    />

                </Box>
                <Box
                >
                    <Heading
                    fontFamily={'Fira Code'}
                    fontSize={40}
                    mt={8}
                    >
                        Quem confia na gente.
                    </Heading>
                    <Text
                    fontSize={20}
                    fontFamily={'Fira Code'}
                    mt={10}
                    >
                        Essas é a equipe que solidifica todo nosso projeto,
                        em etapas como a concepção, a prototipação e o desenvolvimento, 
                        até o final da implementação.
                    </Text>
                </Box>
            </SimpleGrid>
            <Footer />
           
            
    
            

                    

            
        </>
    );
}
