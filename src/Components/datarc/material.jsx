import React from 'react';
import { Box, Container, Grid, GridItem, SimpleGrid, Center, Flex, Heading, VStack, InputGroup, InputLeftAddon, Input, Stack } from '@chakra-ui/react';
import Layout from '../layout';

export default function Material({
    handleFilterChange,
    filtersmedia,
    filterstopic,
    filterssource,
    filtersdate
}) {

    return (
        <>
            <Container maxW="container.xl">
                <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
                    <Box bg='#7D9270' height='500px' border={"1px solid white"}>
                        <VStack spacing={"3rem"} >
                            <Heading mt={"2rem"} fontSize={"25px"}>
                                Pesquise por Materiais de Apoio
                            </Heading>
                            <Container maxW={"container.xl"}>

                            <Stack gap={"2rem"}>
                            {/* filtros para pesquisa */}
                            <InputGroup>
                                <InputLeftAddon w={"90px"} bg="#7D9270" display="flex" justifyContent="center">Mídia</InputLeftAddon>
                                <Input
                                    onChange={(e) => handleFilterChange('media', e.target.value)}
                                    value={filtersmedia}
                                    color="black"
                                    bg="white" type='media' placeholder='Digite o tipo de mídia...' />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon bg="#7D9270" display="flex" justifyContent="center">Assunto</InputLeftAddon>
                                <Input
                                    onChange={(e) => handleFilterChange('topic', e.target.value)}
                                    value={filterstopic}
                                    color="black" bg="white" type='topic' placeholder='Digite o tipo de assunto...' />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon bg="#7D9270" w={"90px"} display="flex" justifyContent="center">Fonte</InputLeftAddon>
                                <Input
                                    onChange={(e) => handleFilterChange('source', e.target.value)}
                                    value={filterssource}
                                    color="black" bg="white" type='source' placeholder='Digite o tipo de fonte...' />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon bg="#7D9270" w={"90px"} display="flex" justifyContent="center">Período</InputLeftAddon>
                                <Input
                                    onChange={(e) => {
                                        handleFilterChange('date', e.target.value);
                                        console.log(e.target.value);
                                    }}
                                    value={filtersdate}
                                    color="black" bg="white" placeholder="Digite no formato DD/MM/YYYY" />
                            </InputGroup>
                            </Stack>
                            </Container>

                            {/* <Button h={"40px"} bg="#399984" color="white"_hover={{ bg: "#30806e" }}>Pesquisar</Button> */}
                        </VStack>
                    </Box>
                    <Box bg='#7D9270' height='500px' border={"1px solid white"}></Box>
                </SimpleGrid>
            </Container>
        </>
    );
}