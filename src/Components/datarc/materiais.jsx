import React from "react";
import { Box, Menu, MenuButton, MenuItem, MenuList, MenuItemOption, MenuOptionGroup, Flex, MenuDivider, HStack, VStack, Text, Button, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Heading, Icon } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Materiais() {

    return (
        <>
                <Box
                    bg="#7D9270"
                    h='500px'
                    w="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <HStack
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    >
                        <Box
                        border={"1px solid white"}
                        w="430px"
                        h="450px"
                        display="flex"
                        justifyContent="center"
                        >
                            <VStack spacing={"2rem"} >
                                <Heading mt={"2rem"} fontSize={"25px"}>
                                    Pesquise por Materiais de Apoio
                                </Heading>
                            
                                {/* filtros para pesquisa */}
                                <InputGroup>
                                    <InputLeftAddon w={"90px"} bg="#7D9270" display="flex" justifyContent="center">Mídia</InputLeftAddon>
                                    <Input color="black" bg="white" type='tel' placeholder='Digite o tipo de mídia...' />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon  bg="#7D9270" display="flex" justifyContent="center">Assunto</InputLeftAddon>
                                    <Input color="black" bg="white" type='tel' placeholder='Digite o tipo de assunto...'/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon  bg="#7D9270" w={"90px"} display="flex" justifyContent="center">Fonte</InputLeftAddon>
                                    <Input color="black" bg="white" type='tel' placeholder='Digite o tipo de fonte...' />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon bg="#7D9270" w={"90px"} display="flex" justifyContent="center">Período</InputLeftAddon>
                                    <Input color="black" bg="white" type='tel' placeholder='Digite o tipo de período...' />
                                </InputGroup>
                                
                                <Button h={"40px"} bg="#399984" color="white"_hover={{ bg: "#30806e" }}>Pesquisar</Button>
                            </VStack>
                            
                        </Box>
                        <Box
                        border={"1px solid white"}
                        w="430px"
                        h="450px"
                        display="flex"
                        justifyContent="center"
                        >
                            <Heading mt={"2rem"} fontSize={"25px"}> 
                                Últimas publicações adicionadas
                            </Heading>
                        </Box>
                    </HStack>
                </Box>

        </>
    );

}