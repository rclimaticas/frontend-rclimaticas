import React from 'react';
import { Center, Box } from '@chakra-ui/react';

export default function About() {
    return (
        <>
            <Center>
                <Box
                mt={"8rem"}
                h="30rem"
                w="70rem"
                borderRadius={"10px"}
                overflow="hidden"
                boxShadow={"-10px 10px 0px #40EC51"}
                >
                    <iframe 
                    width="100%"
                    height="100%"
                    src={"https://www.arcgis.com/apps/dashboards/f2ae4e17467d4dd396362c3b624511c3"}/>
                </Box>
            </Center>
        </>
    );
}