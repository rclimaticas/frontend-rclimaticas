import React, { useRef } from "react";
import { Box, Button, Heading, HStack, Stack, Text, Wrap } from "@chakra-ui/react";
import Navbar from "../../Components/datarc/navbar.jsx";
import DoodleData from "../../assets/datarc/doodledata.png";
import Materiais from "../../Components/datarc/materiais.jsx";
import DataMaps from "../../Components/datarc/data.maps.jsx";
import MaterialList from "../../Components/datarc/materialList.jsx";

export default function Datarc() {
    const materiaisRef = useRef(null);

    const handleButtonClick = () => {
        if (materiaisRef.current) {
            materiaisRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Navbar />
            <Box
                w="100%"
                bg={"white"}
                h={"3500px"}
                overflow={"hidden"}
            >
                <HStack
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt={"5rem"}
                >
                    <Wrap
                        spacing={"12rem"}
                    >
                        <Box
                            w="500px"
                            h="500px"
                            bgImg={DoodleData}
                            bgSize={"cover"}
                            href="https://storyset.com/nature"
                        ></Box>
                        <Box
                            w="500px"
                            h="400px"
                            mt={"5rem"}
                        >
                            <Stack spacing={"2rem"}>
                                <Heading
                                    fontSize={"40px"}
                                >
                                    Biblioteca Colaborativa dos Povos, Culturas e <br />da Natureza
                                </Heading>
                                <Text fontSize={"19px"}>
                                    Fonte essencial para pesquisa e aplicações práticas, nossa biblioteca de dados oferece um vasto repositório de conhecimentos originados das tradições, de estudos e de projetos.
                                </Text>
                                <Button bg={"#399984"} color={"white"} _hover={{ bg: "#30806e" }} boxShadow={"-5px 5px 10px rgba(0, 0, 0, 0.5)"} w={"50%"} onClick={handleButtonClick}>Pesquise Materiais de Apoio</Button>
                            </Stack>
                        </Box>
                    </Wrap>
                </HStack>
                <div ref={materiaisRef}>
                    <Materiais />
                </div>
                <MaterialList />
                <DataMaps />
            </Box>
        </>
    );
}
