import {
    Heading,
    Text,
    Container,
    SimpleGrid,
    Stack,
    Button,
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    useToast,
    Checkbox,
    Textarea,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';

function SubmitArticle() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [publicationType, setPublicationType] = useState("");
    const [subjectType, setSubjectType] = useState("")
    const [fileUrl, setFileUrl] = useState("")
    const [description, setDescription] = useState("")
    const [termsChecked, setTermsChecked] = useState(false)
    const [fileUpload, setFileUpload] = useState(null)
    const toast = useToast();

    const handleFileChange = (event) => {
        setFileUpload(event.target.files[0]);
    }

    const handleUpload = async (event) => {
        event.preventDefault();

        if (!termsChecked) {
            console.log("Terms not accepted");
            toast({
                title: "Erro ao enviar o artigo.",
                description: "Você deve aceitar os termos para continuar.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            return;
        }

        try {
            const formData = {
                email: email,
                name: name,
                publicationType: publicationType,
                subjectType: subjectType,
                fileUrl: fileUrl,
                description: description,
            };

            console.log('Sending data:', formData);

            const response = await axios.post('https://backend-rclimaticas-2.onrender.com/materials', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log('Response received:', response);

            if (response.status === 200 || response.status === 201) {
                const materialId = response.data.id;

                if (response.data.error) {
                    console.error('Falha ao enviar o artigo:', response.data.error);
                    toast({
                        title: "Erro ao enviar o artigo.",
                        description: `Erro: ${response.data.error}`,
                        status: "error",
                        duration: 5000,
                        position: "top",
                    });
                } else {
                    console.log(response.data);
                    toast({
                        title: "Artigo enviado com sucesso.",
                        description: "Seu artigo foi enviado.",
                        status: "success",
                        duration: 5000,
                        position: "top",
                    });

                    if (fileUpload) {
                        const fileData = new FormData();
                        fileData.append('fileUpload', fileUpload);

                        try {
                            const uploadResponse = await axios.post(`https://backend-rclimaticas-2.onrender.com/upload/${materialId}`, fileData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                }
                            });

                            console.log('Upload response received:', uploadResponse);

                            if (uploadResponse.status === 200 || uploadResponse.status === 201) {
                                toast({
                                    title: "Arquivo enviado com sucesso.",
                                    description: "Seu arquivo foi enviado.",
                                    status: "success",
                                    duration: 5000,
                                    position: "top",
                                });
                            }
                        } catch (uploadError) {
                            console.error('Erro ao fazer envio do arquivo:', uploadError);
                            toast({
                                title: "Erro ao enviar o arquivo.",
                                description: "Ocorreu um erro ao enviar o arquivo. Por favor, tente novamente.",
                                status: "error",
                                duration: 5000,
                                isClosable: true,
                                position: "top",
                            });
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Erro ao fazer envio do artigo:', error);
            toast({
                title: "Erro ao enviar o artigo.",
                description: "Ocorreu um erro ao enviar o artigo. Por favor, tente novamente.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        }
    };

    return (
        <>
            <Container maxW="container.xl">
                <SimpleGrid mt={10} columns={2} spacingX='90px' spacingY='60px' display={"flex"} justifyContent={"center"}>
                    <Stack gap={2} display="flex" justifyContent={"center"}>
                        <Heading textAlign={"center"}>Criar recurso para submissão de artigos</Heading>
                        <Text textAlign={"center"}> Faça o envio dos artigos que você desejar para colaborar com a Liga Colaborativa.</Text>
                        <Center>
                            <Button onClick={onOpen}>Fazer envio de artigos</Button>
                            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent maxW="600px" maxH="80vh">
                                    <ModalHeader>Envio do artigo</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody overflowY="auto">
                                        <Stack gap='2'>
                                            <FormControl>
                                                <FormLabel>Qual seu nome?</FormLabel>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Qual seu email?</FormLabel>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Qual o tipo de publicação?</FormLabel>
                                                <Input
                                                    type="text"
                                                    name="publicationType"
                                                    value={publicationType}
                                                    onChange={(e) => setPublicationType(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Qual o tipo de assunto?</FormLabel>
                                                <Input
                                                    type="text"
                                                    name="subjectType"
                                                    value={subjectType}
                                                    onChange={(e) => setSubjectType(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Escreva uma breve descrição do Artigo</FormLabel>
                                                <Textarea
                                                    placeholder=" "
                                                    name="description"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Nos envie o link da publicação.</FormLabel>
                                                <Input
                                                    type="text"
                                                    name="fileUrl"
                                                    value={fileUrl}
                                                    onChange={(e) => setFileUrl(e.target.value)}
                                                />

                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Faça o upload do arquivo, caso ainda não tenha sido publicado</FormLabel>
                                                <Input
                                                    type="file"
                                                    name="fileUpload"
                                                    onChange={handleFileChange}
                                                    mb={4}
                                                />
                                                {fileUpload && (
                                                    <Text mt={2}>
                                                        Arquivo selecionado: {fileUpload.name}
                                                    </Text>
                                                )}
                                            </FormControl>
                                            <FormControl isRequired>
                                                <Checkbox
                                                    isChecked={termsChecked}
                                                    onChange={(e) => setTermsChecked(e.target.checked)}
                                                >
                                                    Assinale se estiver de acordo com nossos termos
                                                </Checkbox>
                                            </FormControl>
                                        </Stack>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Stack flexDir={"row"} gap={5} alignItems={"left"}>
                                            <Button width={"100%"} variant='ghost' onClick={onClose}>Cancelar</Button>
                                            <Button width={"100%"} colorScheme='blue' onClick={handleUpload}>
                                                Enviar
                                            </Button>
                                        </Stack>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Center>
                    </Stack>
                </SimpleGrid>
            </Container>
        </>
    )
}

export default SubmitArticle;
