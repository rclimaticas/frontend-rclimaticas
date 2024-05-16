import React, { useState } from 'react';
import { Box, Heading, HStack, Image, SimpleGrid, VStack, Container } from '@chakra-ui/react';
import i18n from '../i18n/i18n.json';


export default function Maps() {
    const [hoveredBox, setHoveredBox] = useState(null);

    const handleMouseEnter = (boxId) => {
        setHoveredBox(boxId);
    };

    const handleMouseLeave = () => {
        setHoveredBox(null);
    };

    return (
        <>
            <Container maxW="container.xl">
                <SimpleGrid mt={10} columns={2} spacingX='90px' spacingY='60px'>
                    <a href='https://gisepeprd2.epe.gov.br/WebMapEPE/'>
                        <Box
                            bg='#7D9270'
                            height='350px'
                            onMouseEnter={() => handleMouseEnter('data1')}
                            onMouseLeave={handleMouseLeave}
                            style={{ opacity: hoveredBox === 'data1' || hoveredBox === null ? 1 : 0.7 }}
                            transition="transform 0.3s"
                            _hover={{ transform: "scale(1.05)" }}
                        >
                            <Image src={i18n.datarc.map.data1.image} w="100%" h="100%" />
                            <Heading mt={2} fontSize={"25px"} textAlign={"center"}>{i18n.datarc.map.data1.title}</Heading>
                        </Box>
                    </a>

                    <a href="https://brasil.mapbiomas.org/">
                        <Box
                            bg='#7D9270'
                            height='350px'
                            onMouseEnter={() => handleMouseEnter('data2')}
                            onMouseLeave={handleMouseLeave}
                            style={{ opacity: hoveredBox === 'data2' || hoveredBox === null ? 1 : 0.7 }}
                            transition="transform 0.3s"
                            _hover={{ transform: "scale(1.05)" }}
                        >
                            <Image src={i18n.datarc.map.data2.image} w="100%" h="100%" />
                            <Heading mt={2} fontSize={"25px"} textAlign={"center"}>{i18n.datarc.map.data2.title}</Heading>
                        </Box>
                    </a>

                    <a href="https://www.sgb.gov.br/p3m/">
                        <Box
                            bg='#7D9270'
                            height='350px'
                            onMouseEnter={() => handleMouseEnter('data3')}
                            onMouseLeave={handleMouseLeave}
                            style={{ opacity: hoveredBox === 'data3' || hoveredBox === null ? 1 : 0.7 }}
                            transition="transform 0.3s"
                            _hover={{ transform: "scale(1.05)" }}
                        >
                            <Image src={i18n.datarc.map.data3.image} w="100%" h="100%" />
                            <Heading mt={2} fontSize={"25px"} textAlign={"center"}>{i18n.datarc.map.data3.title}</Heading>
                        </Box>
                    </a>

                    <a href='https://portaldemapas.ibge.gov.br/portal.php#homepage'>
                        <Box
                            bg='#7D9270'
                            height='350px'
                            onMouseEnter={() => handleMouseEnter('data4')}
                            onMouseLeave={handleMouseLeave}
                            style={{ opacity: hoveredBox === 'data4' || hoveredBox === null ? 1 : 0.7 }}
                            transition="transform 0.3s"
                            _hover={{ transform: "scale(1.05)" }}
                        >
                            <Image src={i18n.datarc.map.data4.image} w="100%" h="100%" />
                            <Heading mt={2} fontSize={"25px"} textAlign={"center"}>{i18n.datarc.map.data4.title}</Heading>
                        </Box>
                    </a>
                </SimpleGrid>
            </Container>
        </>
    );
}

