import React, { useRef, useState, useEffect } from "react";
import { Box, Button, Heading, HStack, Stack, Text, Wrap, Center, Container } from "@chakra-ui/react";
import Navbar from "../../Components/datarc/navbar.jsx";
import DoodleData from "../../assets/datarc/doodledata.png";
import Materiais from "../../Components/datarc/materiais.jsx";
import DataMaps from "../../Components/datarc/data.maps.jsx";
import MaterialList from "../../Components/datarc/materialList.jsx";
import "../styles/loading.css";
import "../styles/mobile.screen.css"; // Importe o arquivo CSS aqui

export default function Datarc() {
  const materiaisRef = useRef(null);
  const navbarHeight = 60; // Altura estimada da barra de navegação para não bugar o rolamento smooth
  const [loading, setLoading] = useState(true);

  const handleButtonClick = () => {
    if (materiaisRef.current) {
      const offset = materiaisRef.current.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

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
          {/* <Navbar />  erro em tela mobile aqui */}
          <Container width="100vw" maxW="100%" bg={"orange"} h={"3200px"} overflow={"hidden"}>
            <HStack
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={"5rem"}
            >
              <Wrap wrap="nowrap">
                <Box
                  w="500px"
                  h="500px"
                  bgImg={DoodleData}
                  bgSize={"cover"}
                  href="https://storyset.com/nature"
                ></Box>
                <Box w="500px" bg="orange" h="400px" mt={"5rem"}>
                  <Stack spacing={"2rem"}>
                    <Heading fontSize={"40px"}>
                      Biblioteca Colaborativa dos Povos, Culturas e <br />
                      da Natureza
                    </Heading>
                    <Text fontSize={"19px"}>
                      Fonte essencial para pesquisa e aplicações práticas,
                      nossa biblioteca de dados oferece um vasto repositório
                      de conhecimentos originados das tradições, de estudos e
                      de projetos.
                    </Text>
                    <Button
                      bg={"#399984"}
                      color={"white"}
                      _hover={{ bg: "#30806e" }}
                      boxShadow={"-5px 5px 10px rgba(0, 0, 0, 0.5)"}
                      w={"50%"}
                      onClick={handleButtonClick}
                    >
                      Pesquise Materiais de Apoio
                    </Button>
                  </Stack>
                </Box>
              </Wrap>
            </HStack>
            <div ref={materiaisRef}>
              <MaterialList />
            </div>
            <DataMaps />
          </Container>
        </>
      )}
    </>
  );
}
