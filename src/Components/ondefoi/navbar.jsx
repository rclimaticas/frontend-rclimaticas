import React from 'react';
import { Box, Center, HStack, Text, Icon, Image, Divider, Button } from '@chakra-ui/react';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Logo2 from '../../assets/ondefoi/logo2.png';
import BackgroundOndeFoi from '../../assets/ondefoi/back.png';
import BoletimInformativo from '../../assets/boletimInformativo.pdf'

export default function Navbar({ handleButtonAbout, handleButtonCollaborate, handleButtonDashboard }) {

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
                            <a onClick={handleButtonAbout}>
                                <Text _hover={{ color: "#31BB3E" }} cursor="pointer">Sobre</Text>
                            </a>
                            <a onClick={handleButtonDashboard}>
                                <Text _hover={{ color: "#31BB3E" }} cursor="pointer">Dashboard</Text>
                            </a>
                            <a href={BoletimInformativo}>
                                <Text _hover={{ color: "#31BB3E" }} cursor="pointer">Boletim</Text>
                            </a>
                            <a onClick={handleButtonCollaborate}>
                                <Text _hover={{ color: "#31BB3E" }} cursor="pointer">Colabore</Text>
                            </a>
                        </HStack>
                    </Center>
                </Box>
                <Divider style={{ opacity: 0.1 }} />

        </>
    )
}