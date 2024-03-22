import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import Logo from "../header/hooks.header/select";

export default function Navbar() {
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
            <Logo />
            <Flex
                gap={{base: "20px", md: "50px"}}
                fontSize={{base: "15px", md: "18px", xl: "20px"}}
                color={"black"}
                cursor="pointer"
            >
                <Text
                    _hover={{ color: "white" }}
                >
                    DADOS E INFORMAÇÕES
                </Text>

                <Text 
                    _hover={{ color: "white" }}
                >
                    ONDEFOI
                </Text>
                <Text
                    _hover={{ color: "white" }}
                >
                    ASSESSORIA SOFIA
                </Text>
                <Text
                    _hover={{ color: "white" }}
                >
                    LIGA COLABORATIVA
                </Text>
            </Flex>
        </Flex>
    );
}
