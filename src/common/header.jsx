import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Text, Stack, Image, SimpleGrid, Box, Button, Link, HStack, Flex} from "@chakra-ui/react";
import LogoLC from '../assets/ligacolaborativa/logoLC.png';

export default function Header() {
    const [showBorder, setShowBorder] = useState(false);
    const handleScroll = () => {
        // Verifica a posição da janela em relação ao topo
        if (window.pageYOffset > 0) {
            // Se a posição for maior que 0, mostra a borda
            setShowBorder(true);
        } else {
            // Caso contrário, oculta a borda
            setShowBorder(false);
        }
    };

    useEffect(() => {
        // Adiciona um evento de rolagem à janela
        window.addEventListener('scroll', handleScroll);
        // Remove o evento de rolagem ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Container
                position="fixed"
                bg="white"
                alignItems={"center"} display="flex" justifyContent={"center"}
                zIndex={999}
                boxShadow={showBorder ? "0px 2px 4px rgba(0, 0, 0, 0.3)" : "none"} // add boxshadow se showBorder for true
                transition="box-shadow 0.3s ease-in-out" //add transition ao box
                maxW="full" h={"100px"} >
                <SimpleGrid  columns={2} spacingX='90px' spacingY='60px'>
                    <Box alignItems={"center"} display="flex" justifyContent={"flex-start"}>
                            <HStack whiteSpace="nowrap"  color={"#399984"}   spacing={5}>
                            
                            <Image w="8%" src={LogoLC} />
                            
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="/datarc"
                            >
                                <Text _hover={{ color: "#30806e" }} cursor="pointer" >Dados e Informações</Text>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="/ondefoi"
                            >
                                <Text _hover={{ color: "#30806e" }} cursor="pointer">Registros OndeFoi</Text>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.espiralds.com/sofia"
                            >
                                <Text _hover={{ color: "#30806e" }} cursor="pointer">Assesoria Sofia</Text>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="/ligacolaborativa"
                            >
                                <Text _hover={{ color: "#30806e" }} cursor="pointer">Liga Colaborativa</Text>
                            </a>
                            </HStack>
                    </Box>
                    <Box alignItems={"center"} display="flex" justifyContent={"flex-end"} >
                        <Stack  direction="row" spacing={5} >
                            <Button as={RouterLink} to="/login" width="70%">Login</Button>
                            <Box alignItems={"center"} display="flex" justifyContent={"center"}>
                            <a href='/register'>
                                <Text whiteSpace="nowrap" _hover={{ color: "#30806e" }} cursor="pointer">Sign up</Text>
                            </a>
                            </Box>
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    )
}