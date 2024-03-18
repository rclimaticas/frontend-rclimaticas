import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";

export default function TitleAnimation() {
    return (
        <>
        <Flex 
            position={"relative"}
            right="480px"
            top={"120px"}
            >
                <Image src={retangule}/>
            </Flex>
            <Flex
            position={"relative"}
            top={"200px"}
            right={"770px"}
            >
                <Text
                fontFamily={"Fjord"}
                fontSize={"64"}
                fontWeight={"400"}
                letterSpacing={"20px"}
                >
                    POVOS
                </Text>
            </Flex>
        </>
    )
}