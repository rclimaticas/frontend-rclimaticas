import React from "react";
import { Grid, GridItem, Center, Image, Heading, Stack, Text, Button, Flex, SimpleGrid, Box } from "@chakra-ui/react";
import Layout from "../layout.jsx";
import i18n from '../i18n/i18n.json';
import Material from "./material.jsx";
import Header from '../../common/header.jsx';
import Maps from "./maps.jsx";
import Footer from './footer.jsx'
import TableList from "./tablelist.jsx"
import Article from "./article.jsx";
import Highlights from './highlights.jsx';
import ArcGis from './arcgis.jsx'
export default function Rcdata() {

    return (
        <>
            <Header />
            <Layout maxW="container.xl">
                <Grid display="flex" alignItems={"center"} justifyContent={"center"} mt={"5rem"} columns={1} flexDirection={"row"}>
                            <GridItem colSpan={{ base: 6, md: 2, lg: 2 }} justifyContent="center">
                                <Center>
                                    <Image maxW={"100%"} src={i18n.datarc.doodle} />
                                </Center>
                            </GridItem>
                        <GridItem w="58%" colStart={{ base: 1, md: 4, lg: 4 }} colEnd={7}>
                            <Stack fontFamily={"Alata"} fontSize={"20px"} gap={5} p={10} >
                                <Heading>
                                    {i18n.datarc.title}
                                </Heading>
                                <Text>
                                    {i18n.datarc.desc}
                                </Text>
                                <Button>
                                    <Text fontWeight={"normal"} fontSize={"20px"}>
                                        Saber Mais
                                    </Text>
                                </Button>
                            </Stack>
                        </GridItem>
                </Grid>
            </Layout>

            <Article />
            {/* material */}

            <Highlights />
            <ArcGis />
        
            {/* mapas */}
            <Maps />
            <Layout mt={20} color="#7D9270" maxW="full">
                <Material />
            </Layout>

            {/* footer */}
            <Footer />



        </>
    );
}