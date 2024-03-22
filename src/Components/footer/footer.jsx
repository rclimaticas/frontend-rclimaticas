import React from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    SimpleGrid,
    Image
} from "@chakra-ui/react";
import LogoProject from "../../assets/logoProject.png";

export default function Footer() {

    return (
        <>
         {/* Footer */}
         <SimpleGrid columns={1} spacing={8} position={"relative"} bottom={{lg: 300, xl: 250, '2xl': 250}}>
                <Box bg={"#219394"} position="relative" right={200} 
                width={{ lg: "1027px", xl: "1442px", '2xl': "1521px"}} height="400px">
                    <SimpleGrid margin={200} minChildWidth='120px' spacing='40px'mt={10} position={"relative"}>
                        <Box  height='80px'>
                            <Image 
                            src={LogoProject}
                            />
                        </Box>
                        
                        {/* Sobre Nós */}
                        <Box mt={6} height='150px'>
                            <Flex
                            mt={8}>
                                <Heading
                                fontFamily={"Fira Code"}
                                fontSize={20}
                                >
                                    sobre nós
                                </Heading>
                            </Flex>
                            <a
                            href="#"
                            >
                                <Text 
                                textDecoration={"underline"}
                                >
                                    conheça o projeto
                                </Text>
                            </a>
                            <a
                            href="#"
                            >
                                <Text 
                                textDecoration={"underline"}
                                >
                                    trabalhe conosco      
                                </Text>
                            </a>
                        
                        </Box>

                        {/* Contato */}
                        <Box mt={6} height='200px'>
                        <Flex
                            mt={8}>
                                <Heading
                                fontFamily={"Fira Code"}
                                fontSize={20}
                                >
                                    contato
                                </Heading>
                            </Flex>
                            <a
                            href="#"
                            >
                                <Text 
                                textDecoration={"underline"}
                                >
                                    youtube
                                </Text>
                            </a>
                            <a
                            href="#"
                            >
                                <Text 
                                textDecoration={"underline"}
                                >
                                    twitter    
                                </Text>
                            </a>
                            <a
                            href="#"
                            >
                                <Text 
                                textDecoration={"underline"}
                                >
                                    instagram
                                </Text>
                            </a>
                            <a
                            href="#"
                            >
                                <Text 
                                textDecoration={"underline"}
                                >
                                    tiktok    
                                </Text>
                            </a>
                        </Box>

                        {/* Termos */}
                        <Box mt={6} height='200px'>
                        <Flex
                            mt={8}>
                                <Heading
                                fontFamily={"Fira Code"}
                                fontSize={20}
                                >
                                    papo sério
                                </Heading>
                            </Flex>
                            <a
                            href="#"
                            >
                                <Text 
                                textDecoration={"underline"}
                                >
                                    termos de uso
                                </Text>
                            </a>
                            <a
                            href="#"
                            >
                                <Text 
                                textDecoration={"underline"}
                                >
                                    aviso de privacidade   
                                </Text>
                            </a>
                        </Box>
                    </SimpleGrid>
                </Box>
            </SimpleGrid>
        </>
    )
}