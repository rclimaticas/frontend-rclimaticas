import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Text, Heading, VStack, Image, Button, Center } from '@chakra-ui/react';

const NoticiasIBGE = () => {
    const [noticias, setNoticias] = useState([]);
    const [error, setError] = useState(null);

    const fetchNoticias = async () => {
        try {
            const response = await axios.get('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia');
            console.log(response.data.items); // Inspecionar a resposta completa

            // Filtra notícias com IDs únicos
            const noticiasUnicas = response.data.items.filter((item, index, self) =>
                index === self.findIndex((t) => t.id === item.id)
            );

            // Adiciona uma imagem de placeholder para cada notícia
            const noticiasComImagens = noticiasUnicas.map((noticia, index) => ({
                ...noticia,
                imagens: `https://via.placeholder.com/150?text=Notícia+${index + 1}`
            }));

            setNoticias(noticiasComImagens.slice(0, 3)); // Limitar a 5 notícias
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchNoticias();

        const intervalId = setInterval(() => {
            fetchNoticias();
        }, 3600000); // Atualiza a cada 1 hora (3600000ms)

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <Box bgColor="white" p={5} borderWidth="1px" shadow="lg" borderRadius="lg" overflow="hidden">
            <Heading as="h1" size="xl" textAlign="center" mb={5}>Notícias</Heading>
            {error && <Text color="red.500">{error}</Text>}
            <VStack spacing={4} align="stretch">
                {noticias.map((noticia, index) => (
                    <Box _hover={{ transform: "scale(1.02)", transition: "transform 0.3s" }} as="a" target="_blank" rel="noopener noreferrer" href={noticia.link} key={noticia.id} p={5} shadow="md" borderWidth="1px">
                        {noticia.imagem ? (
                            <Image
                                borderRadius="md"
                                alt={noticia.titulo}
                                mb={4}
                            />
                        ) : null}
                        <Heading as="h2" size="md">{noticia.titulo}</Heading>
                        <Text mt={2}>{noticia.introducao}</Text> {/* Ajustado para campo 'introducao' */}
                    </Box>
                ))}
            </VStack>
            <Center>
                <Button as='a' href='https://agenciadenoticias.ibge.gov.br/agencia-noticias.html' mt={5}>
                    Ver mais
                </Button>
            </Center>
        </Box>
    );
};

export default NoticiasIBGE;
