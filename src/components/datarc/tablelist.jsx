import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Tbody, Td, Th, Thead, Tr, Container, Input, HStack, Box, Button } from '@chakra-ui/react';
import Material from './material';

export default function TableList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ media: '', topic: '', source: '', date: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const materialsPerPage = 4;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = 'add-token';

      const response = await axios.get('https://backend-rclimaticas.onrender.com/materials');
      setData(response.data);
      setFilteredData(response.data); 
    } catch (error) {
      console.error('Erro ao buscar dados da tabela:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear(); 
    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
  };

  const applyFilters = () => {
    let filtered = [...data];

    if (filters.media) {
      filtered = filtered.filter(item => item.media.toLowerCase().includes(filters.media.toLowerCase()));
    }
    if (filters.topic) {
      filtered = filtered.filter(item => item.topic.toLowerCase().includes(filters.topic.toLowerCase()));
    }
    if (filters.source) {
      filtered = filtered.filter(item => item.source.toLowerCase().includes(filters.source.toLowerCase()));
    }
    if (filters.date) {
      filtered = filtered.filter(item => formatDate(item.date).includes(filters.date));
    }

    setFilteredData(filtered);
  };

  const handleFilterChange = (field, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [field]: value
    }));
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastMaterial = currentPage * materialsPerPage;
  const indexOfFirstMaterial = indexOfLastMaterial - materialsPerPage;
  const currentMaterials = filteredData.slice(indexOfFirstMaterial, indexOfLastMaterial);

  return (
    <>
      <Box display="none">
        <Material
          handleFilterChange={handleFilterChange}
          filtersmedia={filters.media}
          filterstopic={filters.topic}
          filterssource={filters.source}
          filtersdate={filters.date}
        />
      </Box>
      <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxW="68rem"
      >
        <Table variant="striped" colorScheme="green">
          <Thead>
            <Tr>
              <Th>Mídia</Th>
              <Th>Assunto</Th>
              <Th>Fonte</Th>
              <Th>Período</Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentMaterials.map((item) => (
              <Tr key={item.id}>
                <Td>{item.media}</Td>
                <Td>{item.topic}</Td>
                <Td>{item.source}</Td>
                <Td>{formatDate(item.date)}</Td>
                <Td><a href={item.link}>{item.link}</a></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <div>
          {filteredData.length > materialsPerPage && (
            <HStack p={3}>
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                className='page-link'
                disabled={currentPage === 1}
              >
                {"<"}
              </Button>
              <Button 
                onClick={() => handlePageChange(currentPage + 1)}
                className='page-link'
                disabled={currentPage === Math.ceil(filteredData.length / materialsPerPage)}
              >
                {">"}
              </Button>
            </HStack>
          )}
        </div>
      </Container>
    </>
  );
}
