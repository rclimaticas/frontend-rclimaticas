import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

function MaterialList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); // Chamada inicial para carregar os dados
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3333/materials');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados da tabela:', error);
    }
  };

  return (
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>Media</Th>
          <Th>Topic</Th>
          <Th>Source</Th>
          <Th>Date</Th>
          <Th>Link</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item) => (
          <Tr key={item.id}>
            <Td>{item.media}</Td>
            <Td>{item.topic}</Td>
            <Td>{item.source}</Td>
            <Td>{item.date}</Td>
            <Td><a href={item.link}>{item.link}</a></Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default MaterialList;
