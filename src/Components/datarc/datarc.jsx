import React from "react";
import { Grid, GridItem, Center, Image, Heading, Stack, Text, Button } from "@chakra-ui/react";
import Layout from "../layout.jsx";
import i18n from '../i18n/i18n.json';
import Material from "./material.jsx";
import Header from '../../common/header.jsx';
import Maps from "./maps.jsx";
import Footer from './footer.jsx'
import TableList from "./tablelist.jsx"
export default function Rcdata() {

    return (
        <>  
            <Header />
            <Layout maxW="container.xl">
                <Grid mt={10} templateColumns='repeat(6, 1fr)' columns={1} flexDirection={"column"}>
                    <GridItem colSpan={{ base: 6, md: 2, lg: 2 }} justifyContent="center">
                        <Center>
                            <Image src={i18n.datarc.doodle} />
                        </Center>
                    </GridItem>
                    <GridItem colStart={{ base: 1, md: 4, lg: 4 }} colEnd={7}>
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
            
            {/* material */}
            <Layout color="#7D9270" maxW="full">
                <Material />
            </Layout>

            {/* tablelist */}
            <TableList />

            {/* mapas */}
            <Maps />

            {/* footer */}
            <Footer />


            
        </>
    );
}