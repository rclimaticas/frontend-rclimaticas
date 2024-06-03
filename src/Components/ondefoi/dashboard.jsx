import React from 'react';
import { Center, Box, Image, Text, Flex, SimpleGrid } from '@chakra-ui/react';
import DashboardImage from '../../assets/dashboard.png';

export default function Dashboard() {
    return (
        <>
            <Box
                h={{ md: "800px" }}
                bgImg="https://iili.io/Jm1ctx2.md.png"
                style={{
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <Box
                    id="dashboard"
                    minH="100vh"
                    height="full"
                    width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
                    maxW="7xl"
                    mx="auto"
                    pt={{ base: '28', sm: '14', md: '16', xl: '28' }}
                >
                    <Center>

                        <SimpleGrid column={1}>
                            <Box
                                h="540px"
                                w="70rem"
                                bgImage={DashboardImage}
                                bgSize="cover"
                                borderRadius={"10px"}
                                boxShadow={"-10px 10px 0px #40EC51"}
                            />
                            <Text as="h3" color="black" fontFamily={"Alata"} fontSize={"25px"} textAlign={"center"} mt={"1rem"}>
                                Dashboard com dados completos de Registros Feitos pelo OndeFoi
                            </Text>
                        </SimpleGrid>
                    </Center>
                </Box >
            </Box>
        </>
    );
}