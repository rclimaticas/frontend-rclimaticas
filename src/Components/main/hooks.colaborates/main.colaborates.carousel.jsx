import React, { useState } from 'react';
import { Box, IconButton, Grid, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1); 

  const handleNext = () => {
    setOpacity(0); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setOpacity(1); 
    }, 300); 
  };

  const handlePrev = () => {
    setOpacity(0); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setOpacity(1); 
    }, 300); // tempo para transição, em milissegundos
  };

  return (
    <Box position="relative" bottom={{md: "80px"}}>
      <Grid
        placeItems="center"
        left={{ base: "0px", sm: "0px", md: "0px", lg: "135px", xl: "20px", '2xl': "20px" }}
        h={20}
        w={{ base: "100%, sm: 100%", md: "100%", lg: "85%", xl: "100%", '2xl': "100%" }}
        top={{ base: "0px", sm: "0px", md: "0px", lg: "200px", xl: "0px", '2xl': "0px" }}
        position={"relative"}
      >
        <IconButton
          icon={<ChevronLeftIcon />}
          bg={"#7D9270"}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous Slide"
          position="absolute"
          left={{md: "0px"}}
          fontSize={{md: "35px", lg: "80px", xl: "80px", '2xl': "80px"}}
          top={{md: "330%", '2xl': "300%" }}
          transform="translateX(-120%)"
          _hover={{ bg: "#7D9270" }}
        />
        <Box w="0x" h="170px" textAlign="center" position="relative">
          <a href={slides[currentIndex].link} target="_blank" rel="noopener noreferrer">
            <img
              src={slides[currentIndex].imageUrl}
              alt={`Slide ${currentIndex + 1}`}
              style={{ opacity, transition: "opacity 0.3s ease-in-out" }} // aplicando transição fade nas imagens
            />
          </a>
        </Box>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={handleNext}
          disabled={currentIndex === slides.length - 1}
          aria-label="Next Slide"
          position="absolute"
          bg={"#7D9270"}
          transform="translateX(120%)"
          fontSize={{md: "35px", lg: "80px", xl: "80px", '2xl': "80px"}}
          top={{md: "330%",'2xl': "300%" }}
          right={{md: "0px"}}
          _hover={{ bg: "#7D9270" }}
        />
      </Grid>
      <Flex justifyContent="center" mt={4} position="absolute" 
      left={{lg: "85px", xl: "50px", '2xl': "50px"}} 
      top={{md: "600px"}} 
      width="100%">
        {slides.map((_, index) => (
          <Box
            key={index}
            w="10px"
            h="10px"
            borderRadius="50%"
            bg={currentIndex === index ? "black" : "#666"} 
            mx={1}
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Carousel;
