import React from 'react';
import { Flex, Container, Grid, GridItem, Text, Image, Heading, Stack, Button, Center, Box, SimpleGrid } from '@chakra-ui/react'
import Carousel from './carousel.jsx';
import Occurrences from './occurrences.jsx';
import News from './news.jsx'
import Header from '../../common/header.jsx';
import i18n from '../i18n/i18n.json'

// aqui esta o componente da home
export default function Test() {
    return (
        <>
            <Header />
            <Flex flexDirection={"column"} gap={10}>
                {/* Container Mãe da Home */}
                <Container p={2} maxW="container.xl" maxH={"full"} mt={20}>
                    {/* Grid principal da Home */}
                    <Grid templateColumns='repeat(6, 1fr)' columns={1} flexDirection={"column"}>
                        <GridItem colSpan={{ base: 6, md: 2, lg: 2 }} justifyContent="center">
                            <Center>
                                <Image src={i18n.home.doodle} />
                            </Center>
                        </GridItem>
                        {/* base sempre fica na coluna 1 pois é pra mobile */}
                        {/* base -> mobile, md -> tablet, lg -> desktop */}
                        {/* essa padrão que você pode usar para o mobile */}
                        {/* colstart = 1, colEnd = 7 para centralizar o GridItem pretendido */}
                        <GridItem colStart={{ base: 1, md: 4, lg: 4 }} colEnd={7}>
                            <Stack pt={10} gap={{ sm: 5, md: 5, lg: 10 }} fontFamily={"Alata"}>
                                <Heading fontSize={{ sm: "40px", md: "24px", lg: "28px", xl: "40px" }}>
                                    {i18n.home.title}
                                </Heading>
                                <Text fontSize={{ sm: "20px", md: "15px", lg: "20px", xl: "24px" }}>
                                    {i18n.home.desc}
                                </Text>
                                <Button w={{ sm: "40%", md: "60%", lg: "50%" }}>
                                    <Text fontSize={"20px"} fontWeight={"normal"}>
                                        Saber Mais
                                    </Text>
                                </Button>
                            </Stack>
                        </GridItem>
                    </Grid>
                </Container>

                {/* carrousel */}
                <Container bg="#7D9270" maxW="full" maxH="container.xs">
                    <SimpleGrid columns={1} spacing={2}>
                        <Box maxH={"container.xs"} display="flex" justifyContent={"center"} p={10}>
                            <Carousel />
                        </Box>
                    </SimpleGrid>
                </Container>

                {/* Ocorrências*/}
                <Occurrences />

                {/* Notícias */}
                <News />

            </Flex>
        </>
    )
}
