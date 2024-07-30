import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Flex
} from '@chakra-ui/react';
import { GoCheck, GoX } from "react-icons/go";


function Validation() {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Artigos pendentes para validação</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Artigo</Th>
                        <Th>Usuário</Th>
                        <Th>Aprovação</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>
                            <Flex gap={5}>
                                <Box as='button' borderRadius='md' display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'green'} w={8}>
                                    <GoCheck size={'2em'} color={'white'} />
                                </Box>
                                <Box as='button' borderRadius='md' display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'red'} w={8}>
                                    <GoX size={'2em'} color={'white'} />
                                </Box>
                            </Flex>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default Validation;