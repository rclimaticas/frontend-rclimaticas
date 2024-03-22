import React, { useState } from 'react';
import { Box, IconButton, Grid, Flex, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box position="relative">
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
          bg={"white"}
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Previous Slide"
          position="absolute"
          left="0"
          fontSize={"80px"}
          top={{lg: "235%", xl: "300%", '2xl': "300%" }}
          transform="translateX(-120%)"
          _hover={{ bg: "white" }}
        />
        <Box w="0x" h="170px" bg="white" textAlign="center" position="relative">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </Box>
        <IconButton
          icon={<ChevronRightIcon />}
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          aria-label="Next Slide"
          position="absolute"
          right="0"
          bg={"white"}
          transform="translateX(120%)"
          fontSize={"80px"}
          top={{lg: "235%", xl: "300%", '2xl': "300%" }}
          _hover={{ bg: "white" }}
        />
      </Grid>
      <Flex justifyContent="center" mt={4} position="absolute" 
      left={{lg: "85px", xl: "50px", '2xl': "50px"}} 
      top={{lg: "650px", xl: "550px", '2xl': "500px"}} 
      width="100%">
        {images.map((_, index) => (
          <Box
            key={index}
            w="10px"
            h="10px"
            borderRadius="50%"
            bg={currentIndex === index ? "black" : "#666"} // Aqui está a lógica para definir o bg com base no currentIndex
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
