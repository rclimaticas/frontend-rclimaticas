import React from "react";
import { Box, Image, Grid, GridItem } from "@chakra-ui/react";
import Main from "./main/main";

const Home = () => {
  return (
    <>
      <Grid
    templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
    gridTemplateRows={'50px 100fr 70px'}
    gridTemplateColumns={'0 1fr 0px'}
    h='500px'
    gap='0'
    color='black'
    fontWeight='normal'
  >
    <GridItem pl='2' bg='white' area={'header'}>
      Header
    </GridItem>
    <GridItem pl='2' bg='#219394' height={'1980px'} area={'main'}>
      <Main />
    </GridItem>
    <GridItem pl='2' bg='blue.300' area={'footer'}>
      Footer
    </GridItem>
  </Grid>
      
      
    </>
  );
};

export default Home;
