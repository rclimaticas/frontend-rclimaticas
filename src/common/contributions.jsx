import React, { useState } from 'react';
import { Text, Box, Stack, InputGroup, InputLeftAddon, Input, Button, Center, Flex, HStack, Heading, Image, useDisclosure } from '@chakra-ui/react';
import Financiadores from '../assets/financiadores.png';
import axios from 'axios';
import GlobalConfirmationModal from '../common/ConfirmationModal';

export default function Contribution() {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleConfirm = async () => {
        setIsLoading(true);
        try {
            await axios.post('https://backend-rclimaticas-2.onrender.com/newsletter', formData);
            setFormData({ name: '', email: '' });
            return "Your information has been submitted successfully.";
        } catch (error) {
            return "There was an error submitting your information. Please try again.";
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = () => {
        onOpen();
    };

    return (
        <>
            <HStack spacing={20}>
                <Box w="500px" h="400px">
                    <Stack spacing={4}>
                        <Text fontSize={"18px"} fontFamily={"Arial"}>Receba Atualizações</Text>
                        <InputGroup>
                            <InputLeftAddon>🫵</InputLeftAddon>
                            <Input
                                border="1px solid"
                                bg={"#eced95"}
                                type='text'
                                placeholder='Digite seu nome'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon>📫</InputLeftAddon>
                            <Input
                                border="1px solid"
                                bg={"#eced95"}
                                type='email'
                                placeholder='Email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </Stack>
                    <Button mt={5} w={"30%"} onClick={handleSubmit}>
                        <Text fontSize={"18px"}>Enviar</Text>
                    </Button>
                    <Stack p={10} textAlign={"center"}>
                        <Heading fontSize={"27px"}>Como você pode contribuir?</Heading>
                        <Box>
                            <Flex flexDirection={"column"} gap={5}>
                                <Text>
                                    Nosso projeto não possui financiamento permanente e conta com doações e
                                    prestações de serviços para seguir contribuindo com os povos, culturas e natureza
                                </Text>
                                <Text>
                                    Inclua em seus projetos uma % para contratar nossos estudos de impacto nos ODS, diagnósticos socioambientais,
                                    estudos de gênero, vulnerabilidade e resiliência climática, dentre outros.
                                </Text>
                                <Center flexDirection={"column"} gap={5}>
                                    <Button as='a' target="_blank" rel="noopener noreferrer" href='https://www.espiralds.com/doe'>Contribua</Button>
                                    <Image w={"80%"} src={Financiadores} />
                                </Center>
                            </Flex>
                        </Box>
                    </Stack>
                </Box>
            </HStack>
            <GlobalConfirmationModal
                isOpen={isOpen}
                onClose={onClose}
                onConfirm={handleConfirm}
                isLoading={isLoading}
                description="Tem certeza de que deseja enviar suas informações?"
                toastMessage="Dados enviados com sucesso"
                toastStatus="success"
            />
        </>
    );
}
