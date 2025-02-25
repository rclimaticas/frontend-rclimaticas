import React from 'react';
import { Container, SimpleGrid, Box, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Article3 from '../../assets/boas-praticas.pdf'

// importações necessárias da Biblioteca do Swiper
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";

export default function Article() {
    return (
        <>
            <Container bg="#7D9270" maxW="full" maxH="container.xs">
                <SimpleGrid columns={1} spacing={2}>
                    <Box maxH={"container.xs"} display="flex" justifyContent={"center"} p={10}>
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            navigation
                            slidesPerView={4}
                            loop={true}
                            scrollbar={{
                                hide: true,
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                        >
                            <SwiperSlide>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={Article3}
                                    >
                                        <Image h={"96%"} src={"https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/articlepng.png"} />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='https://repositorio.iica.int/handle/11324/21397'>
                                    <img src={"https://iili.io/d9CjUnR.md.png"} />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='https://observatorio.direitosocioambiental.org/wp-content/uploads/2023/06/Protocolo-de-Consulta-Livre-Previa-e-Informada-dos-Remanescentes-de-Quilombo-da-Serra-dos-Rafaeis.pdf'>
                                    <img src={"https://iili.io/d9AlFs4.png"} />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='https://educacao.cemaden.gov.br/midiateca/cartografia-social-terra-e-territorio/'>
                                    <img src={"https://iili.io/d9AlTzb.png"} />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='https://www.gamba.org.br/wp-content/uploads/2023/06/REABA-DIGITAL-012023.pdf'>
                                    <img src={"https://iili.io/d9AlGIa.png"} />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='https://books.scielo.org/id/bsx4q/pdf/lobao-9786589524953.pdf'>
                                    <img src={"https://iili.io/d9A0CCv.png"} />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='https://nordestepotencia.org.br/wp-content/uploads/2024/02/Salvaguardas_Socioambientais_Renovaveis.pdf'
                                >
                                    <img src={'https://iili.io/d9A0PoJ.png'} />
                                </a>
                            </SwiperSlide>
                        </Swiper>

                    </Box>
                </SimpleGrid>
            </Container>
        </>
    )
}
