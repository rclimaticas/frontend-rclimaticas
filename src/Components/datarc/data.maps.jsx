import React, { useState } from 'react';
import { Box, Heading, HStack, Image, VStack } from '@chakra-ui/react';
import Fundo from "../../assets/datarc/fundo.png";
import Data1 from "../../assets/datarc/data1.png";
import Data2 from "../../assets/datarc/data2.png";
import Data3 from "../../assets/datarc/data3.png";
import Data4 from "../../assets/datarc/data4.png"
import Contribution from './contribution'

export default function DataMaps() {
    const [hoveredBox, setHoveredBox] = useState(null);

    const handleMouseEnter = (boxId) => {
        setHoveredBox(boxId);
    };

    const handleMouseLeave = () => {
        setHoveredBox(null);
    };

    return (
        <>
            <Box
                h={"400px"}
                display="flex"
                justifyContent="center"
            >
                <VStack
                >
                    <Heading mt={"2rem"} pos={"relative"} right={"17rem"}>Plataformas de Dados e Mapas</Heading>
                    <HStack spacing={"5rem"} mt={"5rem"}>
                        <a href='https://gisepeprd2.epe.gov.br/WebMapEPE/'>
                            <Box
                                w={"500px"}
                                h="300px"
                                onMouseEnter={() => handleMouseEnter('data1')}
                                onMouseLeave={handleMouseLeave}
                                style={{ opacity: hoveredBox === 'data1' || hoveredBox === null ? 1 : 0.7 }}
                                transition="transform 0.3s"
                                _hover={{ transform: "scale(1.05)" }}
                                as="button"
                            >
                                <Image src={Data1} w="100%" h="100%" />
                                <Heading mt={2} fontSize={"25px"} textAlign={"center"}>Dados e Mapas sobre Energia</Heading>
                            </Box>
                        </a>

                        <a href="https://brasil.mapbiomas.org/">
                            <Box
                                w={"500px"}
                                h="300px"
                                onMouseEnter={() => handleMouseEnter('data2')}
                                onMouseLeave={handleMouseLeave}
                                style={{ opacity: hoveredBox === 'data2' || hoveredBox === null ? 1 : 0.7 }}
                                transition="transform 0.3s"
                                _hover={{ transform: "scale(1.05)" }}
                                as="button"
                            >
                                <Image src={Data2} w="100%" h="100%" />
                                <Heading mt={2} fontSize={"25px"} textAlign={"center"}>Dados e Mapas Mapbiomas</Heading>
                            </Box>
                        </a>

                    </HStack>
                    <HStack spacing={"5rem"} mt={"5rem"}>
                        <a href="https://www.sgb.gov.br/p3m/">
                            <Box
                                w={"500px"}
                                h="300px"
                                onMouseEnter={() => handleMouseEnter('data3')}
                                onMouseLeave={handleMouseLeave}
                                style={{ opacity: hoveredBox === 'data3' || hoveredBox === null ? 1 : 0.7 }}
                                transition="transform 0.3s"
                                _hover={{ transform: "scale(1.05)" }}
                                as="button"
                            >
                                <Image src={Data3} w="100%" h="100%" />
                                <Heading mt={2} fontSize={"25px"} textAlign={"center"}>Dados e Mapas sobre Mineração</Heading>
                            </Box>
                        </a>
                        <a href='https://portaldemapas.ibge.gov.br/portal.php#homepage'>
                            <Box
                                w={"500px"}
                                h="300px"
                                onMouseEnter={() => handleMouseEnter('data4')}
                                onMouseLeave={handleMouseLeave}
                                style={{ opacity: hoveredBox === 'data4' || hoveredBox === null ? 1 : 0.7 }}
                                transition="transform 0.3s"
                                _hover={{ transform: "scale(1.05)" }}
                                as="button"
                            >
                                <Image src={Data4} w={"100%"} h="100%" />
                                <Heading mt={2} fontSize={"25px"} textAlign={"center"}>Dados e Mapas do IBGE</Heading>
                            </Box>
                        </a>

                    </HStack>

                    {/* parte da contribuição, ficou para ficar alinhado a página. */}
                    <Contribution />

                </VStack>
            </Box>
            <Box
                h="1300px"
                bgImg={Fundo}
                bgSize={"cover"}
                overflow={"hidden"}
            >
            </Box>
        </>
    );
}

