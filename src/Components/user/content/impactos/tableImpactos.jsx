import React, { useEffect, useState, useMemo, useContext } from 'react';
import axios from 'axios';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { Container } from '@chakra-ui/react';
import { useAccountSettingsContext } from '../../../context/AccountSettingsContext';
import { AuthContext } from '../../../context/authcontext';

export default function ImpactsTable({ userId }) {
  const [data, setData] = useState([]);
  const { userData, handleChange } = useAccountSettingsContext();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(`https://backend-rclimaticas-2.onrender.com/impacts/user/${userData.id}`, config);
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
        accessorKey: 'subject',
        header: 'Assunto',
      },
      {
        accessorKey: 'urgency',
        header: 'Urgência',
      },
      {
        accessorKey: 'locality',
        header: 'Localidade',
      },
      {
        accessorKey: 'support',
        header: 'Apoio',
      },
      {
        accessorKey: 'affectedCommunity',
        header: 'Comunidade Atingida',
      },
      {
        accessorKey: 'biomes',
        header: 'Biomas',
        Cell: ({ cell }) => cell.getValue().join(', '),
      },
      {
        accessorKey: 'situation',
        header: 'Situação',
      },
      {
        accessorKey: 'contribution',
        header: 'Contribuição',
      },
      {
        accessorKey: 'date',
        header: 'Data',
        Cell: ({ cell }) => new Date(cell.getValue()).toLocaleDateString(),
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
      <MantineReactTable table={table} />
    </Container>
  );
}
