import { useEffect, useRef, useContext, useState } from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  useClipboard,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../../context/authcontext';

export default function Actions() {
  const value = 'https://rclimaticas.com/jvittor';
  const { hasCopied, onCopy } = useClipboard(value);
  const { logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const profileUrl = useRef(null);

  useEffect(() => {
    if (hasCopied) {
      profileUrl.current.focus();
      profileUrl.current.select();
    }
  });

  const handleLogout = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirmLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <VStack py={10} px={5} spacing={3}>
      <Button as={RouterLink} to="/" w="full" variant="outline">
        Voltar à página inicial
      </Button>
      <Button onClick={handleLogout} w="full" variant="outline">
        Logout
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Tem certeza de que deseja sair da sua conta?
          </ModalBody>

          <ModalFooter gap={5}>
            <Button variant="outline" onClick={handleClose}>
              Cancelar
            </Button>
            <Button onClick={handleConfirmLogout} as={RouterLink} to="/">
              Confirmar Logout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
}
