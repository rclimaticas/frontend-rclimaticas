import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useToast
} from '@chakra-ui/react';

const GlobalConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
  description,
  toastMessage,
  toastStatus = 'success'
}) => {
  const toast = useToast();

  const handleConfirm = async () => {
    await onConfirm();
    onClose();
    toast({
      title: toastMessage,
      status: toastStatus,
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirmação</ModalHeader>
        <ModalBody>{description}</ModalBody>
        <ModalFooter>
          <Button mr={3} variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            bg={"#CFD249"}  // Substitua com sua cor padrão
            _hover={{ bg: "#bdbf47" }}
            onClick={handleConfirm}
            isLoading={isLoading}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GlobalConfirmationModal;
