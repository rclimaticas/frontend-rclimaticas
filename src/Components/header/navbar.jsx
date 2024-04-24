import React from "react";
import { Text, Flex, Button, HStack, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useAuth } from '../hooks/authcontext'; // Importe o hook useAuth

export default function Navbar() {
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
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
            position="relative"
            top={{ base: "0px", md: "20px", lg: "20px", xl: "20px"}}
            mr={{ base: "0px", md: "0px", lg: "0px", xl: "0px"}}
            type="button"
            textAlign={{ base: "center", md: "left" }}
            px={{ base: "20px", md: "0px" }}
        >    
            <Flex
                gap={{base: "20px", md: "50px"}}
                fontSize={{base: "15px", md: "18px", xl: "20px"}}
                color={"#399984"}
                cursor="pointer"
                right={"2rem"}
                pos="relative"
            >
                <a href='/datarc'>
                    <Text
                        _hover={{ color: "#30806e" }}
                    >
                        Dados e Informações
                    </Text>
                </a>

                <a href='/ondefoi'>
                    <Text 
                        _hover={{ color: "#30806e" }}
                    >
                        Registros OndeFoi
                    </Text>
                </a>
                <a href="https://www.espiralds.com/sofia">
                    <Text
                        _hover={{ color: "#30806e" }}
                    >
                        Assessoria Sofia
                    </Text>
                </a>
                <a href="/ligacolaborativa">
                    <Text
                        _hover={{ color: "#30806e" }}
                    >
                        Liga Colaborativa
                    </Text>
                </a>
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
            </Flex>
        </Flex>
    );
}
