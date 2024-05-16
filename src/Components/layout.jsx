import React from 'react';
import { Flex, Container } from '@chakra-ui/react';

const Layout = ({ children, color, maxW, mt, overflow }) => {
    return (
        <Flex mt={mt} flexDirection="column">
            <Container overflow={overflow} p={2} maxW={maxW} maxH="full" bg={color}>
                {children}
            </Container>
        </Flex>
    );
}

export default Layout;
