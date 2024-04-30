import React from "react";
import { Box, HStack, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { useAuth } from '../context/authcontext'; 

export default function navbar() {

    const { token, logout } = useAuth(); // acessa o token do contexto de autenticação
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

    return (
        <>
            <Box
            bg="white"
            h={"70px"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
                <HStack
                color={"#399984"}
                spacing={"3rem"}
                fontFamily={"Arial"}
                fontSize={"20px"}
                >
                    <a href="/datarc">
                        <Text _hover={{ color: "#30806e" }} cursor="pointer" >Dados e Informações</Text>
                    </a>
                    <a href="/ondefoi">
                        <Text _hover={{ color: "#30806e" }} cursor="pointer">Registros OndeFoi</Text>
                    </a>
                    <a href="https://www.espiralds.com/sofia">
                        <Text _hover={{ color: "#30806e" }} cursor="pointer">Assesoria Sofia</Text>
                    </a>
                    <Text _hover={{ color: "#30806e" }} cursor="pointer">Liga Colaborativa</Text>
                    {token ? ( // Verifica se há um token (usuário logado)
                    <Menu>
                        <MenuButton as={Button} bg="transparent" _hover={{ color: "#30806e" }}>
                            <Text fontFamily={"Alata"}></Text>
                            Minha Conta
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Perfil</MenuItem>
                            <MenuItem>Configurações</MenuItem>
                            <MenuItem onClick={handleLogout}>Sair</MenuItem>
                        </MenuList>
                    </Menu>
                ) : (
                    <HStack pos="relative" left={"8rem"}>
                        <a href={'/login'}>
                            <Button bg={"#CFD242"}
                            _hover={{bg: "#bdbf47"}}
                            border={"2px"}
                            >Login</Button>
                        </a>
                        <a href='/register'>
                            <Button bg="white" _hover={{color: "#30806e"}}>Sign up</Button>
                        </a>
                    </HStack>
                )}
                </HStack>
            </Box>
        </>
    );
}