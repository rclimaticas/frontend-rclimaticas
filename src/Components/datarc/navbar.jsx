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
                    <Text _hover={{ color: "#30806e" }} cursor="pointer" >Dados e Informações</Text>
                    <Text _hover={{ color: "#30806e" }} cursor="pointer">Registros OndeFoi</Text>
                    <Text _hover={{ color: "#30806e" }} cursor="pointer">Assesoria Sofia</Text>
                    <Text _hover={{ color: "#30806e" }} cursor="pointer">Liga Colaborativa</Text>
                </HStack>
            </Box>
        </>
    );
}