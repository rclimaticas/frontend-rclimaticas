import React from 'react';
import { Container, Box, Image, Flex, Wrap, Center, Text, Button } from '@chakra-ui/react';
import Trusted from '../../assets/trusted.png';
import LogoLC from '../../assets/ligacolaborativa/logoLC.png';
import RoadMap from '../../assets/ligacolaborativa/roadmap.png';
import Contributions from '../../Hooks/contributions.jsx';
import Navbar from '../../Hooks/navbar.jsx';

export default function LigaColaborativa() {
    return (
        <>
            <Navbar />
            <Container maxW={"100%"} bg="white" h="2700px" overflow={"hidden"}>
                
                <Container maxW={"90%"} mt={10} h={"2800px"} display={"flex"} justifyContent={"center"}>
                    <Box h="600px" w={"70rem"} >
                        <Center justifyContent={"right"}>
                            <Image w={"50% "}src={Trusted} />
                        </Center>
                        <Flex display={"flex"} justifyContent={"center"} mt={"3rem"}>
                            <Box>
                                <Box w="200%" pos="relative" right={"90%"}>
                                    <Image src={LogoLC} />
                                </Box>
                            </Box>
                            <Box w="1000px" h="500px" display="flex" justifyContent="center" alignItems="center" >
                                <Text fontSize={"25px"} fontFamily={"Alata"}>
                                    A Liga Colaborativa dos Povos - LCdP é de
                                    diferentes etnias, culturas, territórios e
                                    biomas, com objetivo de resolver conflitos
                                    socioambientais para alcance da paz,
                                    prosperidade global e direito à vida.
                                    Colabore com a LCdP.
                                </Text>
                            </Box>
                        </Flex>
                        <Flex mb={"-15rem"} pos="relative" bottom={"30rem"} display="flex" justifyContent="right" alignItems="center">
                            <Box w="500px" h="300px">
                                <Text fontSize={"25px"} fontFamily={"Alata"}>
                                    Independente, colaborativa, descentralizada
                                    e atuante para os Povos, Culturas e a
                                    Natureza. Esse coletivo denominado Liga
                                    Colaborativa dos Povos incentiva e presta
                                    apoio a ampliação da colaboração entre
                                    povos e suas organizações no caminho da
                                    justiça e regeneração de processos.
                                </Text>
                            </Box>
                        </Flex>
                        <Box w="100%" h="300px" display="flex" justifyContent="center" alignItems="center">
                            <Image pos="relative" left={6} src={RoadMap} />
                        </Box>
                        <Box w="70%" h="150px">
                            <Text fontSize={"25px"} fontFamily={"Alata"}>
                                A Liga Colaborativa dos Povos é uma futura DAO construída pelas
                                organizações parceiras que têm o propósito de criar infraestrutura
                                regenerativa por meio da construção de pontes para apoio mútuo
                                entre os povos e organizações de fundamentos síncronos.
                            </Text>
                        </Box>
                        <Box w="100%" h="200px"
                            display="flex" justifyContent="center" alignItems="center"
                        >
                            <Button bg={"#EFF5EB"} size={"lg"} borderColor={"#94A08B"} borderWidth={"2.5px"}>
                                <Text fontFamily={"Alata"} fontWeight={"normal"} color={"#425A3F"}>
                                    Colabore com a LCdP
                                </Text>
                            </Button>
                        </Box>
                        <Flex>
                            <Box w="90%" h="400px">
                                <Contributions />
                            </Box>
                            <Box>
                                <Box w="130%" pos="relative" bottom={"15rem"} left={"70%"} >
                                    <Image src={LogoLC} />
                                </Box>
                            </Box>
                        </Flex>


                    </Box>
                </Container>
            </Container>
        </>
    );
}