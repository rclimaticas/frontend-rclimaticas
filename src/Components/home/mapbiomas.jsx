import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Text, Heading, VStack, Image, Button, Center, HStack, Spinner } from '@chakra-ui/react';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchNoticias = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://backend-rclimaticas-2.onrender.com/scrape-news');
            console.log(response.data);
            if (Array.isArray(response.data)) { 
                setNoticias(response.data.slice(0, 4));
            } else {
            }
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNoticias();

        const intervalId = setInterval(() => {
            fetchNoticias();
        }, 3600000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box bgColor="white" p={5} borderWidth="1px" shadow="lg" borderRadius="lg" overflow="hidden">
            <Heading as="h2" size="md" textAlign="center" mb={5}>Notícias</Heading>
            {error && <Text color="red.500">{error}</Text>}
            {loading ? (
                <Center>
                    <Spinner size="xl" />
                </Center>
            ) : (
                <VStack spacing={4} align="stretch">
                    {noticias.map((noticia) => (
                        <Box
                            _hover={{ transform: "scale(1.02)", transition: "transform 0.3s" }}
                            as="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={noticia.link}
                            key={noticia.id}
                            p={5}
                            shadow="md"
                            borderWidth="1px"
                        >
                            <HStack>
                                {noticia.imgSrc ? (
                                    <Image
                                        borderRadius="md"
                                        src={noticia.imgSrc}
                                        alt={noticia.titulo}
                                        boxSize="100px"
                                    />
                                ) : null}
                                <Heading as="h2" size="md">{noticia.titulo}</Heading>
                            </HStack>
                        </Box>
                    ))}
                </VStack>
            )}
            <Center>
                <Button as='a' target="_blank" rel="noopener noreferrer" href='https://brasil.mapbiomas.org/noticias/' mt={5}>
                    Ver mais
                </Button>
            </Center>
        </Box>
    );
};

export default Noticias;
