import React, { useState, useEffect, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Container, Text, Stack, Image, SimpleGrid, Box, Button, HStack, Avatar,
    IconButton, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useMediaQuery
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import LogoLC from '../assets/ligacolaborativa/logoLC.png';
import { AuthContext } from '../Components/context/authcontext.jsx';
import { AccountSettingsContext } from '../Components/context/AccountSettingsContext.jsx';
import { GoogleAuthContext } from '../Components/context/GoogleAuthContext.jsx';

export default function Header() {
    const [showBorder, setShowBorder] = useState(false);
    const { auth } = useContext(AuthContext);
    const { userData } = useContext(AccountSettingsContext);
    const { googleAuth } = useContext(GoogleAuthContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

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

    const NavLinks = () => (
        <>
            <a href="/">
                <Text _hover={{ color: "#30806e" }} cursor="pointer">Início</Text>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="/datarc">
                <Text _hover={{ color: "#30806e" }} cursor="pointer">Biblioteca Colaborativa</Text>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://ekonavi.com/regen?r=r4f4.eu">
                <Text _hover={{ color: "#30806e" }} cursor="pointer">Ekonavi</Text>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="/ondefoi">
                <Text _hover={{ color: "#30806e" }} cursor="pointer">Registros OndeFoi</Text>
            </a>
            {auth ? (
                <a target="_blank" rel="noopener noreferrer" href="https://www.espiralds.com/sofia">
                    <Text _hover={{ color: "#30806e" }} cursor="pointer">Assessoria Sofia</Text>
                </a>
            ) : (
                <a target="_blank" rel="noopener noreferrer" href="/sofia">
                    <Text _hover={{ color: "#30806e" }} cursor="pointer">Assessoria Sofia</Text>
                </a>
            )}
            <a target="_blank" rel="noopener noreferrer" href="/ligacolaborativa">
                <Text _hover={{ color: "#30806e" }} cursor="pointer">Liga Colaborativa</Text>
            </a>
        </>
    );

    return (
        <>
            <Container
                position="fixed"
                bg="white"
                alignItems={"center"} display="flex" justifyContent={"center"}
                zIndex={999}
                boxShadow={showBorder ? "0px 2px 4px rgba(0, 0, 0, 0.3)" : "none"}
                transition="box-shadow 0.3s ease-in-out"
                maxW="full" h={"100px"}>
                <SimpleGrid columns={2} spacingX='90px' spacingY='60px' w="full">
                    <Box alignItems={"center"} display="flex" justifyContent={"flex-start"}>
                        <HStack whiteSpace="nowrap" color={"#399984"} spacing={5}>
                            <Image w="10%" src={LogoLC} />
                            {isLargerThan768 ? (
                                <NavLinks />
                            ) : (
                                <IconButton
                                    icon={<HamburgerIcon />}
                                    variant="outline"
                                    colorScheme="teal"
                                    onClick={onOpen}
                                    aria-label="Open Menu"
                                />
                            )}
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

            {/* Drawer para navegação em telas menores */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Stack spacing={4} mt={4}>
                            <NavLinks />
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
