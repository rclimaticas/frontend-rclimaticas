import React from 'react';
import { Box, Container, Text, Image, Stack } from '@chakra-ui/react';
import LogoLC from '../assets/ligacolaborativa/logoLC.png';
export default function Navbar() {
    return (
        <>
            <Container 
            color={"#399984"}
            fontFamily={"Arial"}
            fontSize={"18px"}
            gap={20} 
            alignItems="center"
            maxW={"100%"} 
            h="85px" 
            display="flex"
            >
                <Box alignItems={"center"} display={"flex"} justifyContent={"center"} h="70px" w={"100px"}>
                    <Image w="70%" src={LogoLC} />
                </Box>
                
                <a href="/">
                    <Text _hover={{ color: "#30806e" }} cursor="pointer" >Início</Text>
                </a>
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

            </Container>
        </>
    )
}