import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";
import retangule from "../../../assets/retangule.svg";

export default function Title() {
    return (
        <>
            <Flex
            position={"relative"}
            top={"60px"}
            ml={"40px"}
            >
                <Text
                fontFamily={"Fjord"}
                fontSize={"64"}
                fontWeight={"400"}
                letterSpacing={"17px"}
                >PLATAFORMA <br />COLABORATIVA <br />PARA</Text>
            </Flex>
        </>
    );
}