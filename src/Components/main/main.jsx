import React from "react";
import { Image, Flex } from "@chakra-ui/react";
import Title from "../main/hooks/main.title";

export default function Main() {
    return (
        <>
            <Title />
            <Flex 
            position="relative"
            bottom="280px"
            right={"40px"}
            >
                <Image  
                maxW={800}
                w={"100%"}
                ml={"800px"}
                src="https://i.ibb.co/3MgFCnR/Mother-Earth-Day-cuate-2-1-1.png"
                alt="Mother-Earth-Day-cuate-2-1-1"
                className="image-class"
                />
            </Flex>
        </>
    );
}