import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Text, Stack, Image, SimpleGrid, Box, Button, Link} from "@chakra-ui/react";
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
                zIndex={999}
                boxShadow={showBorder ? "0px 2px 4px rgba(0, 0, 0, 0.3)" : "none"} // add boxshadow se showBorder for true
                transition="box-shadow 0.3s ease-in-out" //add transition ao box
                maxW="full" h={"50px"} >
                <SimpleGrid  columns={2} spacingX='90px' spacingY='60px'>
                    <Box h="50px">
                            <Stack  color={"#399984"} mt={1} direction="row" spacing={5} alignItems={"center"} display="flex" justifyContent={"center"}>
                            <a href="/">
                                <Image w="40%" mr="-50rem" src={LogoLC} />
                            </a>
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
                            </Stack>
                    </Box>
                    <Box h="50px">
                        <Stack  direction="row" spacing={5} align="center" justifyContent="flex-end">
        
                                <Button as={RouterLink} to="/login" mt={1} width="18%">Login</Button>
                            <a href='/register'>
                                <Text href='/register'>Sign up</Text>
                            </a>
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    )
}