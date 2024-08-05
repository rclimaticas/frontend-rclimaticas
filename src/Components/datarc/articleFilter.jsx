import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { Container, Link, Heading, Center} from '@chakra-ui/react';

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
        <Heading as="h2" size="lg" mb={4}>Tabela da nossa Biblioteca</Heading>
      </Center>
      <MantineReactTable table={table} />
    </Container>
  );
}
