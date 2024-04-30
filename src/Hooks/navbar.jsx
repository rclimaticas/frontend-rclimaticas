import React, { useState, useEffect } from 'react';
import { Box, Container, Text, Image, Stack, HStack, Button, Menu, MenuButton, MenuList, MenuItem, Flex } from '@chakra-ui/react';
import LogoLC from '../assets/ligacolaborativa/logoLC.png';
import { useAuth } from '../Components/context/authcontext';

export default function Navbar() {
    const { token, logout } = useAuth(); // acessa o token do contexto de autenticação
    const [showBorder, setShowBorder] = useState(false);

    const handleLogout = () => {
        // chama a função de logout do contexto de autenticação, se estiver disponível
        if (logout) {
            logout(); // chama a função de logout
        }
        // limpa o token armazenado localmente
        localStorage.removeItem('token');
        // redireciona o usuário para a página inicial
        window.location.href = '/';
    };

    useEffect(() => {
        // Adiciona um evento de rolagem à janela
        window.addEventListener('scroll', handleScroll);
        // Remove o evento de rolagem ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

    return (
        <>
            <Container
                color={"#399984"}
                fontFamily={"Arial"}
                fontSize={"15px"}
                gap={10}
                alignItems="center"
                maxW={"100%"}
                h="85px"
                display="flex"
                whiteSpace={"nowrap"}
                position="fixed"
                bg="white"
                zIndex={999}
                boxShadow={showBorder ? "0px 2px 4px rgba(0, 0, 0, 0.3)" : "none"} // add boxshadow se showBorder for true
                transition="box-shadow 0.3s ease-in-out" //add transition ao box
            >
                <Box alignItems={"center"} display={"flex"} justifyContent={"center"} h="70px" w={"100px"}>
                    <Image src={LogoLC} />
                </Box>

                <a href="/">
                    <Text _hover={{ color: "#30806e" }} cursor="pointer" >Início</Text>
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

                {token ? ( // Verifica se há um token (usuário logado)
                    <Container maxW={"100%"} display={"flex"} justifyContent={"flex-end"}>
                        <Menu>
                            <MenuButton as={Button} bg={"#CFD242"} _hover={{ bg: "#bdbf47" }} border={"2px"}>
                                Minha conta
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Perfil</MenuItem>
                                <MenuItem>Configurações</MenuItem>
                                <MenuItem onClick={handleLogout}>Sair</MenuItem>
                            </MenuList>
                        </Menu>
                    </Container>
                ) : (
                    <Container maxW={"100%"} display={"flex"} justifyContent={"flex-end"}>
                        <HStack>
                            <a href={'/login'}>
                                <Button bg={"#CFD242"}
                                    _hover={{ bg: "#bdbf47" }}
                                    border={"2px"}
                                >Login</Button>
                            </a>
                            <a href='/register'>
                                <Button bg="white" _hover={{ color: "#30806e" }}>Sign up</Button>
                            </a>
                        </HStack>
                    </Container>
                )}

            </Container>
            {/* Placeholder para evitar que o conteúdo seja sobreposto pelo navbar fixo */}
            <Box h="85px" />
        </>
    )
}
