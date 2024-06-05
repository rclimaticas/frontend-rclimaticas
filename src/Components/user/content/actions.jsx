import React, { useState } from 'react';
import { Box, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useAccountSettingsContext } from '../../context/AccountSettingsContext';

function Actions({ selectedTabIndex }) {
  const { handleUpdate, userData } = useAccountSettingsContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    onOpen();
  };

  const handleConfirmUpdate = async () => {
    setIsLoading(true);
    await handleUpdate(userData);
    setIsLoading(false);
    onClose();
  };

  return (
    <>
      <Box display={selectedTabIndex === 3 ? 'none' : 'block'}mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
        <Button width={"20%"} onClick={handleButtonClick}>
          Atualizar Perfil
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar Atualização de Perfil</ModalHeader>
          <ModalBody>
            Você realmente quer alterar os dados do perfil? (Caso necessite, revise seus dados antes de salvar)
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleConfirmUpdate}
              isLoading={isLoading}
              ml={3}
            >
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Actions;
