import React from 'react';
import { Box, Center, Heading, HStack, Image } from '@chakra-ui/react';
import Trusted from '../../assets/trusted.png'
import Financiadores from '../../assets/financiadores.png'
export default function About() {
    return (
        <>
       
        <Center>
            <HStack spacing={"5rem"} mt="8rem">
                
                <Box
                w="30rem"
                h="320px"
                
                >
                    <Heading color="white" fontFamily={"Chiller"} fontSize={"50px"} textAlign={"left"} mb={5}>TrustedBy</Heading>
                    <Image borderRadius={"2rem"} boxShadow={"-10px 10px 0px #40EC51"} src={Trusted} />
                </Box>
                <Box
                mt="4rem"
                w="40rem"
                h="200px"
                >
                    <Heading color="white" fontFamily={"Alata"} textAlign={"center"}>Colabore</Heading>
                    <Box boxShadow={"-10px 10px 0px #40EC51"} borderRadius={"20rem"} bg="white">
                        <Image mt={6} src={Financiadores} p={5}/>
                    </Box>
                </Box>
            </HStack>
        </Center>

        </>
    );
}