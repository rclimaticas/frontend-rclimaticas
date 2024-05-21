import React from 'react';
import { Grid, Checkbox, FormControl, FormLabel, FormHelperText, Stack, Select,
    TableContainer,
    Table,
    Tr,
    Th,
    Thead,
    Tbody,
    Tfoot,
    TableCaption,
    Td,
    Center,
    Box
 } from '@chakra-ui/react';
import CustomIcon from './customIcon';

export default function Colaborador() {
    const options = [];
    for (let i = 1; i <= 10; i++) {
        options.push(
            <option key={i} value={i}>
                {i}
            </option>
        );
    }
    return (
        <>

            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                gap={6}

            >
                <FormControl as='fieldset' >
                    <Stack>
                        <FormLabel as='legend'>⚡Área de interesse em colaborar com a Liga.</FormLabel>
                        <Stack>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Social/Cultural/Econômia
                            </Checkbox>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Ambiental/Territórios/Biodiversidade
                            </Checkbox>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Tecnologia/Inovação/Desenvolvimento
                            </Checkbox>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Comunicação/Educação
                            </Checkbox>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Finanças/Captação
                            </Checkbox>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Governança/Politicas Públicas
                            </Checkbox>
                        </Stack>
                        <FormHelperText>Poderá ser selecionado mais de uma área de interesse</FormHelperText>
                    </Stack>
                </FormControl>

                <FormControl as='fieldset' >
                    <Stack>
                        <FormLabel as='legend'>⚡ Em qual eixo você gostaria de contribuir na constelação da Liga Colaborativa dos Povos?</FormLabel>
                        <Stack>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Social/Cultural/Econômia
                            </Checkbox>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Ambiental/Territórios/Biodiversidade
                            </Checkbox>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Tecnologia/Inovação/Desenvolvimento
                            </Checkbox>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Comunicação/Educação
                            </Checkbox>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Finanças/Captação
                            </Checkbox>
                            <Checkbox icon={<CustomIcon />} color='black'>
                                Governança/Politicas Públicas
                            </Checkbox>
                        </Stack>
                        <FormHelperText>Poderá ser selecionado mais de um eixo</FormHelperText>
                    </Stack>
                </FormControl>

                <FormControl id="disponibilidade">
                    <FormLabel>⚡ Qual sua disponibilidade de tempo para contribuir semanalmente?</FormLabel>
                    <Select focusBorderColor="brand.blue" placeholder="Selecione em Horas por semana">
                        {options}
                    </Select>
                </FormControl>
               
                {/*apenas para pular linha  */}
                <Box>ㅤㅤㅤㅤㅤㅤㅤㅤ</Box>

        
                <Box mt={5} w={'sm'}>
                <FormLabel>⚡ Quais temas te conecta?</FormLabel>
                <TableContainer>
                    <Table variant='simple' size='lg'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>ㅤㅤㅤㅤㅤㅤㅤㅤ</Th>
                                <Th>Agricultor Familiar</Th>
                                <Th>indígenas</Th>
                                <Th>Quilombolas</Th>
                                <Th>Fundo de Pasto</Th>
                                <Th>Gerais</Th>
                                <Th>Pescadores Ribeirinhos</Th>
                                <Th>Pescadores/Marisqueiros</Th>
                                <Th>Cidades</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Mata Atlântica</Td>
                                {Array.from({ length: 8 }).map((_, index) => (
                                <Td key={index}>
                                    <Center>
                                        <Checkbox icon={<CustomIcon />} color='black' />
                                    </Center>
                                </Td>
                            ))}
                            </Tr>
                            <Tr>
                                <Td>Caatinga</Td>
                                {Array.from({ length: 8 }).map((_, index) => (
                                <Td key={index}>
                                    <Center>
                                        <Checkbox icon={<CustomIcon />} color='black' />
                                    </Center>
                                </Td>
                            ))}
                            </Tr>
                            <Tr>
                                <Td>Amazônia</Td>
                                {Array.from({ length: 8 }).map((_, index) => (
                                <Td key={index}>
                                    <Center>
                                        <Checkbox icon={<CustomIcon />} color='black' />
                                    </Center>
                                </Td>
                            ))}
                            </Tr>
                            <Tr>
                                <Td>Pampas</Td>
                                {Array.from({ length: 8 }).map((_, index) => (
                                <Td key={index}>
                                    <Center>
                                        <Checkbox icon={<CustomIcon />} color='black' />
                                    </Center>
                                </Td>
                            ))}
                            </Tr>
                            <Tr>
                                <Td>Pantanal</Td>
                                {Array.from({ length: 8 }).map((_, index) => (
                                <Td key={index}>
                                    <Center>
                                        <Checkbox icon={<CustomIcon />} color='black' />
                                    </Center>
                                </Td>
                            ))}
                            </Tr>
                            <Tr>
                                <Td>Zona urbanas</Td>
                                {Array.from({ length: 8 }).map((_, index) => (
                                <Td key={index}>
                                    <Center>
                                        <Checkbox icon={<CustomIcon />} color='black' />
                                    </Center>
                                </Td>
                            ))}
                            </Tr>
                          
                        </Tbody>
                        <Tfoot>
                        </Tfoot>
                    </Table>
                </TableContainer>
                </Box>


            </Grid>
        </>
    );
}