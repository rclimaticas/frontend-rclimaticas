import React, { useState, useContext, useRef } from "react";
import {
  Avatar,
  AvatarBadge,
  Badge,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useAccountSettingsContext } from "../../context/AccountSettingsContext"; // Importe o contexto corretamente
import { AuthContext } from "../../context/authcontext";


function App() {
  const [file, setFile] = useState(null);
  const { token, id } = useContext(AuthContext);
  const { userData, handleChange, handleFileChange } = useAccountSettingsContext(); 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const profileImage = useRef(null)

  const openChooseImage = () => {
    profileImage.current.click()
  }

  const uploadImage = async (e) => {
    handleFileChange(e);
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userData", JSON.stringify(userData));

    try {
      const response = await fetch(`https://backend-rclimaticas-2.onrender.com/profile/${id}`, { 
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });

      if (response.ok) {
        console.log("Imagem e dados enviados com sucesso!");
      } else {
        console.error("Erro ao enviar os dados", await response.text());
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <>
      <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
      <Avatar
        size="2xl"
        name={userData.username}
        cursor="pointer"
        onClick={openChooseImage}
        src={userData.imageBase64}
       >
        <AvatarBadge boxSize='1.25em' bg='#CFD249' >
        <svg width="0.4em" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
            />
          </svg>
        </AvatarBadge>
      </Avatar>
        <input
          hidden
          type="file"
          ref={profileImage}
          onChange={(e) => {
            uploadImage(e);
          }}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Something went wrong</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>File not supported!</Text>
              <HStack mt={1}>
                <Text color="brand.cadet" fontSize="sm">
                  Supported types:
                </Text>
                <Badge colorScheme="green">PNG</Badge>
                <Badge colorScheme="green">JPG</Badge>
                <Badge colorScheme="green">JPEG</Badge>
              </HStack>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <VStack spacing={1}>
          <Heading as="h3" fontSize="xl" color="brand.dark">
            {userData.username}
          </Heading>
          
        </VStack>
      </VStack>

      {/* <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            hidden
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          />
          <br />
          <img height="200px" alt="Preview" />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div> */}
    </>
  );
}

export default App;
