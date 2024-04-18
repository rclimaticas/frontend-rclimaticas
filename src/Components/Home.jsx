import React, { useState, useEffect } from "react";
import { Box, Image, Grid, GridItem, Center} from "@chakra-ui/react";
import Main from "./main/main";
import Navbar from "./header/navbar";
import './styles/loading.css'

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // limpando o timer
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Box className="loader"></Box>
        </Center>
      ) : (
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
      )}
    </>
  );
};

export default Home;
