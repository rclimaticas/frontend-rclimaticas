import React from "react";
import { Box, Image, Grid, GridItem } from "@chakra-ui/react";
import Main from "./main/main";
import Navbar from "./header/navbar";


const Home = () => {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                        "nav main"
                      `}
        gridTemplateRows="50px 1fr 0px"
        gridTemplateColumns={'150px 1fr'}
        gap={10}
        height="900px"
       // Definindo a altura da Grid para ocupar toda a altura da tela
        fontWeight='normal'
      >
        <GridItem pl='2' area={'header'}>
          <Navbar />
        </GridItem>
        <GridItem area={'main'}>
          <Main />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
