import React, { useState, useEffect, useRef } from 'react';
import { Box, Center, Flex, Heading, HStack, Image, Stack, Text, ChakraProvider, extendTheme, Button, Spinner } from '@chakra-ui/react';
import BackgroundOndeFoi from '../../assets/ondefoi/back.png'
import Phone3d from '../../assets/ondefoi/phone3d.png'
import Gradient from '../../assets/ondefoi/gradient.png'
import About from '../../components/ondefoi/about.jsx';
import Strategies from '../../components/ondefoi/strategies.jsx';
import Dashboard from '../../components/ondefoi/dashboard.jsx';
import TrustedBy from '../../components/ondefoi/trustedby.jsx';
import Navbar from '../../components/ondefoi/navbar.jsx';


export default function OndeFoi() {
    const [loading, setLoading] = useState(true);
    const aboutRef = useRef(null);
    const dashboardRef = useRef(null);
    const collaborateRef = useRef(null);

    const handleButtonAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
        
        
    };

    const handleButtonDashboard = () => {
        if (dashboardRef.current) {
            dashboardRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    
    const handleButtonCollaborate = () => {
        if (collaborateRef.current) {
            collaborateRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

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
                    <Navbar 
                    handleButtonAbout={handleButtonAbout}
                    handleButtonCollaborate={handleButtonCollaborate}
                    handleButtonDashboard={handleButtonDashboard}
                    />
                    <Box
                        w="100%"
                        bgImage={BackgroundOndeFoi}
                        bgSize={"cover"}
                        h={"3000px"}
                        overflow={"hidden"}
                    >
                        <Center>

                            <Box
                                pos="relative"
                                mt={"2rem"}
                                w={"2500px"}
                                h="800px"
                                bgSize={"cover"}
                                border={"1px"}
                                borderColor={"#070707"}
                            >
                                <Center>
                                    <HStack
                                        spacing={0}
                                    >
                                        <Box
                                            zIndex={1}
                                            pos={"relative"}
                                            mt={"2rem"}
                                            left={"30rem"}
                                            w="500px"
                                            h="500px"
                                        >
                                            <Stack
                                                spacing={10}
                                                color={"white"}
                                            >

                                                <Heading
                                                    fontSize={"50px"}
                                                    whiteSpace={"nowrap"}
                                                    fontFamily={"Alata"}
                                                >Monitor de ocorrências <br />de Conflitos Socioambientais</Heading>
                                                <Text
                                                    fontSize={"25px"}
                                                    fontFamily={"Alata"}
                                                    opacity={0.7}
                                                >
                                                    <Text as="span" color="#31BB3E">OndeFoi</Text> é uma aplicação para registros <br /> de conflitos socioambientais e <br />identificação de assessoria técnica.
                                                </Text>
                                                <a href="https://arcg.is/1mzbme">
                                                    <Button
                                                        width={"30%"}
                                                        bg={"#31BB3E"}
                                                    >
                                                        <Text fontFamily={"Alata"} _hover={{ color: "#31BB3E" }}>Acessar OndeFoi</Text>
                                                    </Button>
                                                </a>
                                            </Stack>

                                        </Box>
                                        <Box
                                            pos={"relative"}
                                            w="1620px"
                                            h="900px"
                                            left={"8rem"}
                                            bottom={"2rem"}
                                            bgImg={Gradient}
                                            bgSize={"cover"}
                                        >
                                            <Center>
                                                <Box
                                                    pos="relative"
                                                    w="45%"
                                                    h="550px"
                                                    mt={"8rem"}
                                                    right={"10rem"}
                                                    bgImg={Phone3d}
                                                    bgSize={"cover"}
                                                />
                                            </Center>
                                        </Box>
                                    </HStack>
                                </Center>
                            </Box>

                        </Center>
                        {/* sobre a ondefoi */}
                        <div ref={aboutRef}>
                            <About />
                        </div>

                        {/* estrategias da ondefoi */}
                        <Strategies />

                        {/* dashboard ondefoi */}
                        <div ref={dashboardRef}>
                            <Dashboard />
                        </div>

                        {/* trustedby ondefoi */}
                        <div ref={collaborateRef}>
                            <TrustedBy />
                        </div>
                    </Box>

                </>
            )}
        </>
    )
}
