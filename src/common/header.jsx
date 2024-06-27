// Header.jsx

import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Text, Stack, Image, SimpleGrid, Box, Button, HStack, Avatar } from "@chakra-ui/react";
import LogoLC from '../assets/ligacolaborativa/logoLC.png';
import { AuthContext } from '../Components/context/authcontext.jsx';
import { AccountSettingsContext } from '../Components/context/AccountSettingsContext.jsx';
import { GoogleAuthContext } from '../Components/context/GoogleAuthContext.jsx';

export default function Header() {
    const [showBorder, setShowBorder] = useState(false);
    const { auth, logout } = useContext(AuthContext);
    const { userData } = useContext(AccountSettingsContext);
    const { googleAuth, user } = useContext(GoogleAuthContext);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setShowBorder(true);
        } else {
            setShowBorder(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
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
                boxShadow={showBorder ? "0px 2px 4px rgba(0, 0, 0, 0.3)" : "none"}
                transition="box-shadow 0.3s ease-in-out"
                maxW="full" h={"100px"} >
                <SimpleGrid columns={2} spacingX='90px' spacingY='60px'>
                    <Box alignItems={"center"} display="flex" justifyContent={"flex-start"}>


                        <HStack whiteSpace="nowrap" color={"#399984"} spacing={5}>
                            <Image w="10%" src={LogoLC} />
                            <a href="/">
                                <Text _hover={{ color: "#30806e" }} cursor="pointer">Início</Text>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="/datarc">
                                <Text _hover={{ color: "#30806e" }} cursor="pointer">Dados e Informações</Text>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="/ondefoi">
                                <Text _hover={{ color: "#30806e" }} cursor="pointer">Registros OndeFoi</Text>
                            </a>
                            {auth ? (
                                <>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.espiralds.com/sofia">
                                        <Text _hover={{ color: "#30806e" }} cursor="pointer">Assessoria Sofia</Text>
                                    </a>
                                </>

                            ) : (
                                <>
                                    <a target="_blank" rel="noopener noreferrer" href="/sofia">
                                        <Text _hover={{ color: "#30806e" }} cursor="pointer">Assessoria Sofia</Text>
                                    </a>
                                </>
                            )}
                            <a target="_blank" rel="noopener noreferrer" href="/ligacolaborativa">
                                <Text _hover={{ color: "#30806e" }} cursor="pointer">Liga Colaborativa</Text>
                            </a>
                        </HStack>
                    </Box>
                    <Box alignItems={"center"} display="flex" justifyContent={"flex-end"}>
                        <Stack direction="row" spacing={5}>
                            {auth ? (
                                <>
                                    <Button as="a" href="/user" width={"60%"}>
                                        Meus Impactos
                                    </Button>
                                    <Avatar name={userData.username} title={"ver perfil"} as={RouterLink} to="/user" size="md" src={userData?.imageBase64 || googleAuth?.user?.picture} />
                                </>
                            ) : (
                                <>
                                    <Button as={RouterLink} to="/login" width="70%">Login</Button>
                                    <Box alignItems={"center"} display="flex" justifyContent={"center"}>
                                        <a href='/register'>
                                            <Text whiteSpace="nowrap" _hover={{ color: "#30806e" }} cursor="pointer">Sign up</Text>
                                        </a>
                                    </Box>
                                </>
                            )}
                        </Stack>
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    )
}