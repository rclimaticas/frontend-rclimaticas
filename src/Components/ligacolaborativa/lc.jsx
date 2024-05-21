import React from 'react';
import { Container, Box, Image, Flex, Center, Text, Button, SimpleGrid } from '@chakra-ui/react';
import Trusted from '../../assets/trusted.png';
import Contributions from '../../common/contributions.jsx';
import Navbar from '../../common/header.jsx';
import i18n from '../i18n/i18n.json';
import Layout from '../layout.jsx';
import Roadmap from '../../assets/ligacolaborativa/roadmap.png';
import { Link as RouterLink } from 'react-router-dom';

export default function LigaColaborativa() {
    return (
        <>
            <Navbar />
            <Layout overflow={"hidden"} maxW={"full"} bg={"orange"}>
                <Container maxW="container.xl">
                <SimpleGrid mt={"10rem"} columns={2} spacingX='90px' spacingY='60px'>
                    <Box h="380px" display="flex" justifyContent="center" alignItems="center">
                        <Text fontSize={"25px"} fontFamily={"Alata"}>
                            {i18n.ligacolaborativa.title}
                        </Text>
                    </Box>
                    <Box h="380px">
                        <Center>
                            <Image src={Trusted} />
                        </Center>
                    </Box>
                </SimpleGrid>
                
                <SimpleGrid mt={"10rem"} columns={2} spacingX='90px' spacingY='60px'>
                    <Box h="500px" display={"flex"} justifyContent="center" alignItems="center" >
                            <Image src={i18n.ligacolaborativa.image.logo}/>
                    </Box>
                    <Box h="500px" display={"flex"} justifyContent="center" alignItems="center">
                        <Text fontSize={"25px"} fontFamily={"Alata"}>
                            {i18n.ligacolaborativa.desc[2]}
                        </Text>
                    </Box>
                </SimpleGrid>

                <SimpleGrid mt={"5rem"} columns={1} spacingX='90px' spacingY='60px'>
                    <Box  h="500px" display={"flex"} justifyContent="center" alignItems="center">
                        <Image w={"100%"} pos="relative" left={6} src={Roadmap} />
                    </Box>
                </SimpleGrid>
    
                <Box w="70%" h="150px">
                    <Text fontSize={"25px"} fontFamily={"Alata"}>
                        {i18n.ligacolaborativa.desc[2]}
                    </Text>
                </Box>
                <Box w="100%" h="200px"
                    display="flex" justifyContent="center" alignItems="center"
                >
                    <Button height={"30%"} as={RouterLink} to="/user">
                        <Text fontFamily={"Alata"} fontWeight={"normal"} fontSize={"20px"} color={"#425A3F"}>
                            Colabore com a LCdP
                        </Text>
                    </Button>
                </Box>
                <SimpleGrid mt={"2rem"} mb={10} columns={2} spacingX='90px' spacingY='60px'>
                    <Box h="400px">
                        <Contributions />
                    </Box>
                    <Box h="400px" display={"flex"} justifyContent="center" alignItems="center">
                        <Image src={i18n.ligacolaborativa.image.logo} />
                    </Box>
                    {/* box para espaço final */}
                    <Box h={"100px"}></Box>
                </SimpleGrid>
                </Container>
            </Layout>
        </>
    );
}