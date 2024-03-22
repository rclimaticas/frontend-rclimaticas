import React from "react";
import { Box, Image, Grid, GridItem } from "@chakra-ui/react";
import Main from "./main/main";
import Navbar from "./header/navbar";

const Home = () => {
  return (
    <>
      <Grid
    templateAreas={`"header header"
                    "nav main"`}
    gridTemplateRows="50px 1fr 0px"
    gridTemplateColumns={'150px 1fr'}
    h={{lg: '8900px', xl: '8400px', '2xl': '8200px'}}
    gap={10}
    color='black'
    bg={'#219394'}
    fontWeight='normal'
  >
    <GridItem pl='2' bg='#219394' area={'header'}>
      <Navbar />
    </GridItem>
    <GridItem pl='2' bg='#219394' area={'main'}>
      <Main />
    </GridItem>
  </Grid>
      
      
    </>
  );
};

export default Home;