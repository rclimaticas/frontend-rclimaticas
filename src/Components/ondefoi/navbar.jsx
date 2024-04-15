import React from 'react';
import { Box, Center, HStack, Text, Icon, Image, Divider } from '@chakra-ui/react';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Logo2 from '../../assets/ondefoi/logo2.png';
import BackgroundOndeFoi from '../../assets/ondefoi/back.png';

export default function Navbar() {

    return (
        <>
            <Box
                bgImage={BackgroundOndeFoi}
                bgSize={"cover"}
                h="90px"
                display="flex"
                alignItems="center"
                justifyContent="center"

                >
                    <Center>
                    <a
                    >
                        <Image _hover={{ filter: "brightness(1.5)" }} cursor="pointer" pos={"relative"} right={"12rem"} src={Logo2} h={"70px"} />
                    </a>
                        <HStack
                        spacing={"5rem"}
                        fontFamily={"Alata"}
                        fontSize={"20px"}
                        color="white"
                        pos={"relative"}
                        left={"10rem"}
                        >
                            
                            <Text _hover={{ color: "#31BB3E" }} cursor="pointer" >Início</Text>
                            <Text _hover={{ color: "#31BB3E" }} cursor="pointer">Sobre</Text>
                            <Text _hover={{ color: "#31BB3E" }} cursor="pointer">Estrutura</Text>
                            <Text _hover={{ color: "#31BB3E" }} cursor="pointer">Dashboard</Text>
                            <Text _hover={{ color: "#31BB3E" }} cursor="pointer">Colaboradores</Text>
                        </HStack>
                    </Center>
                </Box>
                <Divider style={{ opacity: 0.1 }} />

        </>
    )
}