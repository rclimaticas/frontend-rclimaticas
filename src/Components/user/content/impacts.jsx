import React, { useState, useContext } from 'react';
import {
  ChakraProvider,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  VStack,
  Button,
  Flex,
  Grid,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Textarea,
  Select,
  Checkbox,
  Stack,
  HStack
} from '@chakra-ui/react';
import './impacts.scss';
import CustomIcon from '../content/customIcon';
import { AccountSettingsContext } from '../../context/AccountSettingsContext';


const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};

export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  }
});


const ImpactTable = () => {
  const [selectedTable, setSelectedTable] = useState('Impactos da Liga');
  const { userData } = useContext(AccountSettingsContext);


  const handleTableChange = (table) => {
    setSelectedTable(table);
  };
  const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
  };


  const renderTable = () => {
    switch (selectedTable) {
      case 'Impactos da Liga':
        return (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Assunto</Th>
                <Th>Prioridade</Th>
                <Th>Tipo de Apoio</Th>
                <Th>Data</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Ação em Cruz das</Td>
                <Td>Alta</Td>
                <Td>Denuncia</Td>
                <Td>09/03/2024</Td>
              </Tr>
              <Tr>
                <Td>Reunião para cons</Td>
                <Td>Média</Td>
                <Td>Apoio Financeiro</Td>
                <Td>25/11/2023</Td>
              </Tr>
              <Tr>
                <Td>Apoio de viagem</Td>
                <Td>Alta</Td>
                <Td>Incidência</Td>
                <Td>16/09/2023</Td>
              </Tr>
              <Tr>
                <Td>Juntos somos fort</Td>
                <Td>Alta</Td>
                <Td>Assessoria Técnica</Td>
                <Td>01/03/2023</Td>
              </Tr>
            </Tbody>
          </Table>
        );
      case 'Meus Impactos':
        return (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Assunto</Th>
                <Th>Prioridade</Th>
                <Th>Tipo de Apoio</Th>
                <Th>Data de Criação</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Desmatamento</Td>
                <Td>Alta</Td>
                <Td>Denuncia</Td>
                <Td>09/03/2024</Td>
              </Tr>
              <Tr>
                <Td>Apoio viagem</Td>
                <Td>Média</Td>
                <Td>Apoio Financeiro</Td>
                <Td>25/11/2023</Td>
              </Tr>
              <Tr>
                <Td>SOS Lagoa Santa</Td>
                <Td>Alta</Td>
                <Td>Incidência</Td>
                <Td>16/09/2023</Td>
              </Tr>
              <Tr>
                <Td>Juntos somos Fortes</Td>
                <Td>Alta</Td>
                <Td>Assessoria Técnica</Td>
                <Td>01/03/2023</Td>
              </Tr>
            </Tbody>
          </Table>
        );
      case 'Gerar Impactos':
        return (
          <>
            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' }} >

              <Box p={2} >
                <FormControl variant="floating" id="first-name" >
                  <Input width={"300px"} placeholder=" " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Assunto</FormLabel>
                </FormControl>
              </Box>
              <Box p={2}>
                <FormControl variant="floating" id="first-name" >
                  <Input width={"300px"} placeholder=" " />
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Tipo de apoio</FormLabel>
                </FormControl>
              </Box>
              <Box p={2} mt={2}>
                <FormControl
                  width={"300px"}
                  variant="floating" id="first-name" >
                  <Select
                    focusBorderColor="brand.blue"
                  >
                    <option value="alta">Alta</option>
                    <option value="média">Média</option>
                    <option value="baixa">Baixa</option>
                  </Select>
                  {/* It is important that the Label comes after the Control due to css selectors */}
                  <FormLabel>Urgência</FormLabel>
                </FormControl>
              </Box>

              {/* Apenas para pular linha */}
              <Box>ㅤㅤㅤㅤㅤㅤㅤㅤ</Box>
              <Box p={2}>
                <FormControl>
                  <FormLabel>Temas</FormLabel>
                  <Flex gap={5}>
                    <Stack>
                      <Text>• Escolha um tipo de bioma</Text>
                      {(userData.themesBiomes && userData.themesBiomes.length > 0) ? (
                        userData.themesBiomes.map(themesBiomes => (
                          <Checkbox
                            key={themesBiomes}
                            icon={<CustomIcon />}
                            color='black'
                            value={themesBiomes}
                          >
                            {themesBiomes}
                          </Checkbox>
                        ))
                      ) : (
                        <Box bg="white" borderColor={'green'} >
                          <Text color={'red'}>Você não escolheu nenhum tema</Text>
                        </Box>
                      )}
                    </Stack>

                    <Stack>
                      <Text>• Escolha um tipo de comunidade</Text>
                      {(userData.themesCommunities && userData.themesCommunities.length > 0) ? (
                        userData.themesCommunities.map(themesCommunities => (
                          <Checkbox
                            key={themesCommunities}
                            icon={<CustomIcon />}
                            color='black'
                            value={themesCommunities}
                          >
                            {themesCommunities}
                          </Checkbox>
                        ))
                      ) : (
                        <Box bg="white" borderColor={'green'} >
                          <Text color={'red'}>Você não escolheu nenhuma comunidade</Text>
                        </Box>
                      )}
                    </Stack>

                  </Flex>


                  {/* It is important that the Label comes after the Control due to css selectors */}

                </FormControl>
                <Stack mt={5}>
                      <Text>• Escolha um tipo Áreas de Interesse</Text>
                      {(userData.areaOfInterest && userData.areaOfInterest.length > 0) ? (
                        userData.areaOfInterest.map(areaOfInterest => (
                          <Checkbox
                            key={areaOfInterest}
                            icon={<CustomIcon />}
                            color='black'
                            value={areaOfInterest}
                          >
                            {areaOfInterest}
                          </Checkbox>
                        ))
                      ) : (
                        <Box bg="white" borderColor={'green'} >
                          <Text color={'red'}>Você não escolheu nenhum tema</Text>
                        </Box>
                      )}
                    </Stack>

              </Box>

            </Grid>
            <Box p={2} mt={2}>
              <FormControl variant="floating" id="first-name" >
                <Textarea placeholder=" " />
                {/* It is important that the Label comes after the Control due to css selectors */}
                <FormLabel>Contribuição do pedido</FormLabel>
              </FormControl>
            </Box>
            <Box p={2}>
              <Button
                bg={"#CFD249"}
                _hover={{ bg: "#bdbf47" }}
                boxShadow="-4px 4px 4px rgba(0, 0, 0, 0.4)"
                border="2px"

              >
                Enviar Impacto
              </Button>
            </Box>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex display="flex" alignItems={"center"} >
        <VStack align="stretch" spacing={4} flex="1" pt={selectedTable === 'Gerar Impactos' ? 0 : 10}>
          <button
            className={`btn draw-border ${selectedTable === 'Impactos da Liga' ? 'selected' : ''}`}
            onClick={() => handleTableChange('Impactos da Liga')}
          >
            <Text fontWeight="bold" color={selectedTable === 'Impactos da Liga' ? "#CFD249" : "#399984"}>Impactos da Liga</Text>
          </button>
          <button
            className={`btn draw-border ${selectedTable === 'Meus Impactos' ? 'selected' : ''}`}
            onClick={() => handleTableChange('Meus Impactos')}
          >
            <Text fontWeight="bold" color={selectedTable === 'Meus Impactos' ? "#CFD249" : "#399984"}>Meus Impactos</Text>
          </button>
          <button
            className={`btn draw-border ${selectedTable === 'Gerar Impactos' ? 'selected' : ''}`}
            onClick={() => handleTableChange('Gerar Impactos')}
          >
            <Text fontWeight="bold" color={selectedTable === 'Gerar Impactos' ? "#CFD249" : "#399984"}>Gerar Impactos</Text>
          </button>
        </VStack>
        <Box flex="1" ml={4}>
          <TableContainer>
            {renderTable()}
          </TableContainer>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default ImpactTable;
