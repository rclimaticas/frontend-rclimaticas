import React from 'react'
import { Container, SimpleGrid, Text, Heading, Button, Stack, Box, Image, Center } from '@chakra-ui/react';
import ArcGisImage from '../../assets/datarc/arcgis.png'

export default function ArcGis() {
    return (
        <div class="w-screen bg-red-400 px-4 py-5 flex justify-content align-center">
            <Container maxW="container.xl">
                <SimpleGrid flexDirection={'column'} mt={10} columns={1} spacingX='90px' spacingY='60px' display={"flex"} justifyContent={"center"}>

                    <Stack gap={2} display="flex" justifyContent={"center"}>
                        <Heading fontSize={"30px"}>
                            Nossa plataforma conta com a assinatura
                            ArcGIS Enterprise:
                        </Heading>
                        <Text fontSize={"25px"} fontWeight={"normal"}>
                            Faça
                            pesquisas, mapas, analise dados geoespaciais e
                            compartilhe resultados com a comunidade Para utilizar basta
                            ser membro da liga, solicite acesso</Text>
                    </Stack>


                    <Center>
                        <Image loading="lazy" src={ArcGisImage} alt="Logotipo" />
                    </Center>
                </SimpleGrid>
            </Container>
        </div>
    )
}
