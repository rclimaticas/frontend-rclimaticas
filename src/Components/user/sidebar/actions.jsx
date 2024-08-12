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
import { GoogleAuthContext } from '../../context/GoogleAuthContext';
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import { CiLogout } from "react-icons/ci";


export default function Actions() {
  const value = 'https://rclimaticas.com/jvittor';
  const { hasCopied, onCopy } = useClipboard(value);
  const { logout } = useContext(AuthContext);
  const { googleLogout } = useContext(GoogleAuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const profileUrl = useRef(null);

  useEffect(() => {
    if (hasCopied) {
      profileUrl.current.focus();
      profileUrl.current.select();
    }
  }, [hasCopied]);

  const handleLogout = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirmLogout = async () => {
    setIsLoading(true);
    await logout();
    await googleLogout();
    setIsLoading(false);
    setIsOpen(false);
    window.location.href = '/';
  };

  return (
    <VStack py={10} px={5} spacing={3}>
      <Button as="a" target="_blank" rel="noopener noreferrer" href="https://chat.whatsapp.com/LCSX1JKQXVFK6cfiwE3nhO" w="full" variant="outline" leftIcon={<FaWhatsapp />}>
        Acesse a Comunidade
      </Button>
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
            <Button
              onClick={handleConfirmLogout}
              isLoading={isLoading}
              colorScheme="red"
            >
              Confirmar Logout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
}
