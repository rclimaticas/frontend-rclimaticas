import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { Container, Link, Heading, Center, Box, Flex } from '@chakra-ui/react';
import { GoCheck, GoX } from "react-icons/go";

export default function ImpactsTable({ userId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-rclimaticas-2.onrender.com/materials`);
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados de impactos:', error);
      }
    };

    fetchData();
  }, [userId]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'approval',
        header: 'Aprovação',
        Cell: () => (
          <Flex gap={5}>
            <Box as='button' borderRadius='md' display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'green'} w={8}>
              <GoCheck size={'2em'} color={'white'} />
            </Box>
            <Box as='button' borderRadius='md' display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'red'} w={8}>
              <GoX size={'2em'} color={'white'} />
            </Box>
          </Flex>
        )
      },
      {
        accessorKey: 'publicationType',
        header: 'Tipo de Publicação',
      },
      {
        accessorKey: 'subjectType',
        header: 'Tipo de Assunto',
      },
      {
        accessorKey: 'date',
        header: 'Data',
        Cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString(),
      },
      {
        accessorKey: 'fileUrlOrUpload',
        header: 'Arquivo',
        Cell: ({ row }) => {
          const fileUrl = row.original.fileUrl;
          const fileUpload = row.original.FileUpload;

          if (fileUrl) {
            return (
              <Link href={fileUrl} isExternal>{fileUrl}</Link>
            );
          } else if (fileUpload && fileUpload.length > 0) {
            return (
              <div>
                {fileUpload.map(file => (
                  <div key={file.id}>
                    <p>
                      Path: <Link href={file.path} isExternal>{file.path}</Link>
                    </p>
                    <p>Date: {new Date(file.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            );
          } else {
            return <span>Sem arquivo</span>;
          }
        }
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data,
  });

  return (
    <Container mt={20} maxW="container.xl">
      <Center>
        <Heading as="h2" size="lg" mb={4}>Artigos Pendentes para Validação</Heading>
      </Center>
      <MantineReactTable table={table} />
    </Container>
  );
}
