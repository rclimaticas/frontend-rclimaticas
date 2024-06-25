import React, { useState } from 'react';
import { Box, Container, SimpleGrid, VStack, Heading, InputGroup, InputLeftAddon, Input, Image, Stack, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const artigos = [
    {
        id: 1,
        titulo: "Boas práticas de enfrentamento às mudanças climáticas ",
        midia: "Blog",
        assunto: "Tecnologia",
        fonte: "Fonte A",
        periodo: "2023-06-01",
        imagem: "https://iili.io/d9CjUnR.md.png",
        link: "https://repositorio.iica.int/handle/11324/21397",
    },
    {
        id: 2,
        titulo: "Protocolo de consulta livre, prévia e informada dos remanescentes de quilombo da serra dos rafaéis",
        midia: "Jornal",
        assunto: "Saúde",
        fonte: "Fonte B",
        periodo: "2023-05-20",
        imagem: "https://iili.io/d9AlFs4.png",
        link: "https://observatorio.direitosocioambiental.org/wp-content/uploads/2023/06/Protocolo-de-Consulta-Livre-Previa-e-Informada-dos-Remanescentes-de-Quilombo-da-Serra-dos-Rafaeis.pdf",
    },
    {
        id: 3,
        titulo: "Cartografia social, terra e território",
        midia: "Jornal",
        assunto: "Saúde",
        fonte: "Fonte B",
        periodo: "2023-05-20",
        imagem: "https://iili.io/d9AlTzb.png",
        link: "https://educacao.cemaden.gov.br/midiateca/cartografia-social-terra-e-territorio/",
    },
    {
        id: 4,
        titulo: "Experiências Educativas no Território Metropolitano de Salvador",
        midia: "Jornal",
        assunto: "Saúde",
        fonte: "Fonte B",
        periodo: "2023-05-20",
        imagem: "https://iili.io/d9AlGIa.png",
        link: "https://www.gamba.org.br/wp-content/uploads/2023/06/REABA-DIGITAL-012023.pdf",
    },
    {
        id: 5,
        titulo: "Cartografia Social, (Re)descobrindo saberes",
        midia: "Jornal",
        assunto: "Saúde",
        fonte: "Fonte B",
        periodo: "2023-05-20",
        imagem: "https://iili.io/d9A0CCv.png",
        link: "https://books.scielo.org/id/bsx4q/pdf/lobao-9786589524953.pdf",
    },
    {
        id: 6,
        titulo: "Boas práticas de enfrentamento às mudanças climáticas com foco na potencialidade de cooperação sul-sul",
        midia: "Jornal",
        assunto: "Saúde",
        fonte: "Fonte B",
        periodo: "2023-05-20",
        imagem: "https://iili.io/d9A0PoJ.png"
    },

    // Adicione mais artigos conforme necessário
];

export default function Material() {
    const [filtros, setFiltros] = useState({
        midia: "",
        assunto: "",
        fonte: "",
        periodo: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFiltros({ ...filtros, [name]: value });
    };

    const artigosFiltrados = artigos.filter(artigo => {
        return (
            (filtros.midia ? artigo.midia.toLowerCase().includes(filtros.midia.toLowerCase()) : true) &&
            (filtros.assunto ? artigo.assunto.toLowerCase().includes(filtros.assunto.toLowerCase()) : true) &&
            (filtros.fonte ? artigo.fonte.toLowerCase().includes(filtros.fonte.toLowerCase()) : true) &&
            (filtros.periodo ? artigo.periodo === filtros.periodo : true)
        );
    });

    return (
        <Container maxW="container.xl">
            <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
                <Box bg='#7D9270' height='500px' border={"1px solid white"}>
                    <VStack spacing={"3rem"} >
                        <Heading mt={"2rem"} fontSize={"25px"}>
                            Pesquise por Materiais de Apoio
                        </Heading>
                        <Container maxW={"container.xl"}>
                            <Stack gap={"2rem"}>
                                {/* filtros para pesquisa */}
                                <InputGroup>
                                    <InputLeftAddon w={"90px"} bg="#7D9270" display="flex" justifyContent="center">Mídia</InputLeftAddon>
                                    <Input
                                        placeholder="Mídia"
                                        name="midia"
                                        value={filtros.midia}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon bg="#7D9270" display="flex" justifyContent="center">Assunto</InputLeftAddon>
                                    <Input
                                        placeholder="Assunto"
                                        name="assunto"
                                        value={filtros.assunto}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon bg="#7D9270" w={"90px"} display="flex" justifyContent="center">Fonte</InputLeftAddon>
                                    <Input
                                        placeholder="Fonte"
                                        name="fonte"
                                        value={filtros.fonte}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftAddon bg="#7D9270" w={"90px"} display="flex" justifyContent="center">Período</InputLeftAddon>
                                    <Input
                                        placeholder="Período (AAAA-MM-DD)"
                                        name="periodo"
                                        value={filtros.periodo}
                                        onChange={handleChange}
                                    />
                                </InputGroup>
                            </Stack>
                        </Container>
                    </VStack>
                </Box>
                <Box display='flex' alignItems={"center"} bg='#7D9270' height='500px' border="1px solid white" overflow="hidden">

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={5}
                        navigation
                        slidesPerView={1}
                        loop={true}
                    >
                        {artigosFiltrados.map(artigo => (


                            <SwiperSlide key={artigo.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                <a href={artigo.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '50%', height: '100%' }}>
                                    <Image src={artigo.imagem} style={{ width: '100%', height: '100%',}} />
                                </a>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </SimpleGrid>
        </Container >
    );
}
