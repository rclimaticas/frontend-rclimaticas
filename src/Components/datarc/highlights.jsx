import React from 'react'
import { Container, SimpleGrid, Text, Heading, Button, Stack } from '@chakra-ui/react';

export default function Highlights() {
    return (
        <div class="w-screen bg-red-400 px-4 py-5 flex justify-content align-center">
            <Container maxW="container.xl">
                <SimpleGrid mt={10} columns={2} spacingX='90px' spacingY='60px' display={"flex"} justifyContent={"center"}>
                    <Stack gap={2} display="flex" justifyContent={"center"}>
                        <Text fontSize={"28px"} fontWeight={"bold"}>Destaque</Text>
                        <Heading fontSize={"30px"}>RAD 2023: MATOPIBA PASSA A AMAZÔNIA E ASSUME A LIDERANÇA DO DESMATAMENTO NO BRASIL</Heading>
                        <Button width={"50%"}>Acesse o documento</Button>
                    </Stack>

                    <img loading="lazy" src="https://iili.io/d9gXTLF.md.png" alt="Logotipo" />
                </SimpleGrid>
            </Container>
        </div>
    )
}
