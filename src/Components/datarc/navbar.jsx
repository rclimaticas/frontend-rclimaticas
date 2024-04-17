import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

export default function navbar() {

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
                </HStack>
            </Box>
        </>
    );
}