import React from 'react';
import { SimpleGrid, Box, Container, Heading, Image } from '@chakra-ui/react';
import Contribution from '../../common/contributions.jsx';
import Layout from '../layout.jsx';
import Fundo from '../../assets/fundo.png'
import TrustedBy from '../../assets/trusted.png'
export default function Footer() {
    return (
        <>
            <Container bgImage={Fundo} bgSize={"cover"} mt={"-20rem"} maxW="full" height={"1200px"}>
                <Layout maxW={"container.xl"}>
                    <SimpleGrid mt={"30rem"} columns={2} spacingX='90px' spacingY='60px'>
                        <Box h="380px">
                            <Contribution />
                        </Box>
                        <Box h="380px">
                            <Heading fontFamily={"Chiller"} textAlign={"right"}>TrustedBy</Heading>
                            <Image src={TrustedBy} />
                        </Box>
                    </SimpleGrid>
                </Layout>
            </Container>
        </>
    );
}