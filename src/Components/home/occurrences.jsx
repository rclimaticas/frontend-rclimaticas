import React from 'react';
import { Button, Center, Container, Grid, GridItem, Heading, Text, Image, Stack } from '@chakra-ui/react'
import Dashboard from "../../assets/dashboard.png"


export default function Occurrences() {

    return (
        <>
            <Container p={2} maxW="container.xl" maxH={"container.xs"}>
                <Grid templateColumns='repeat(6, 1fr)' columns={1} flexDirection={"column"}>

                    {/* GridItem para registro de ocorrências */}
                    {/* estou adicionando desse modo pois  */}
                    <GridItem colStart={{ base: 1, md: 4, lg: 4 }} colEnd={7} justifyContent="center" display={"flex"}>
                        <Heading fontSize={{ sm: "35", md: "25px", lg: "28px", xl: "40px" }}>
                            Registre Ocorrências de conflitos em seu território e receba apoio gratuito.
                            {/* button em tela desktop */}
                            <Button ml={5} display={{ base: "none", sm: "none", md: "none", lg: "inline" }} width={"40%"} >
                                <Center>
                                    <Text fontSize={"15px"} fontWeight={"bold"}>Acessar o aplicativo aqui</Text>
                                </Center>
                            </Button>
                        </Heading>
                    </GridItem>
                    
                    {/* button em tela mobile */}
                    <GridItem colStart={{ base: 1, md: 4, lg: 4 }} colEnd={7} display={{ sm: "block", md: "none", lg: "none" }}>
                        <Button mt={5} ml={{ sm: 0, md: 0, lg: 5, xl: 5, '2xl': 5 }} width={{sm: "40%", md: "60%", lg: "50%"}}>
                            <Text fontSize={{sm: "16px", md: "15px", lg: "15px"}} fontWeight={"bold"}>Acessar o aplicativo aqui</Text>
                        </Button>
                        {/* mobile dashboard */}
                        <GridItem mt={{sm: 10}} colSpan={{ base: 6, md: 3, lg: 3 }} colStart={{ base: 1, md: 4, lg: 4 }} colEnd={7} alignContent={"center"}>
                            <Image src={Dashboard} />
                        </GridItem>
                    </GridItem>
                </Grid>
            </Container>

            <Container  maxW="container.xl" maxH={"container.xs"} flexDirection={"column"}>
                <Grid templateColumns='repeat(6, 1fr)' >
                    <GridItem colSpan={{ base: 6, md: 2, lg: 2 }}>
                        <Stack spacing={5}>
                        <Heading fontSize={"35px"}>No período...</Heading>
                        <Text
                            fontFamily={"Colibri Corpo"}
                            fontSize={{sm: "22px", md: "20px", lg: "22px", xl: "28px"}}
                        >
                            Foram registrados <strong>20 ocorrências</strong>, sendo
                            <strong> 6 animais selvagens encontrados, 4 conflitos com empreendimentos, 2 desmatamentos,
                                3 poluições no rio, 1 poluição de solo/erosão, 1 queimada e 3 outras ocorrências.
                            </strong>
                        </Text>
                        <Button w={{sm: "40%", md: "60%", lg: "50%"}}>
                            <Text fontSize={{sm: "16px", md: "15px", lg: "15px"}} fontWeight={"bold"}>Ler Boletim Mensal</Text>
                        </Button>
                        </Stack>
                    </GridItem>
                    
                    {/* desktop dashboard */}
                    <GridItem 
                    display={{ sm: "none", md: "block", lg: "block" }} 
                    mt={{sm: 10}} 
                    colSpan={{ base: 6, md: 3, lg: 3 }} 
                    colStart={{ base: 1, md: 4, lg: 4 }} 
                    colEnd={7} 
                    alignContent={"center"}>
                        <Image src={Dashboard} />
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}