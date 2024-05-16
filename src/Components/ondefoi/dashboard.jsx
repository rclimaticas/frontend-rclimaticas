import React, { useState, useEffect } from 'react';
import { Center, Box } from '@chakra-ui/react';
import axios from 'axios'; // Certifique-se de instalar axios: npm install axios

export default function About() {
    const [temporaryToken, setTemporaryToken] = useState(null);

    useEffect(() => {
        // URL para fazer uma solicitação GET
        const url = 'https://www.arcgis.com/apps/dashboards/f2ae4e17467d4dd396362c3b624511c3';

        // Fazer solicitação GET
        axios.get(url)
            .then(response => {
                // Extrair o Temporary Token da resposta
                const temporaryTokenFromResponse = response.data.token;
                setTemporaryToken(temporaryTokenFromResponse);
            })
            .catch(error => {
                console.error('Erro ao obter Temporary Token:', error);
            });
    }, []);

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
                    {temporaryToken && (
                        <iframe 
                            title="ArcGIS Dashboard"
                            width="100%"
                            height="100%"
                            src={`https://www.arcgis.com/apps/dashboards/f2ae4e17467d4dd396362c3b624511c3?token=${temporaryToken}`}
                            allowFullScreen
                        />
                    )}
                </Box>
            </Center>
        </>
    );
}
