import React, { useState, useContext } from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  FormControl,
  FormLabel,
  Input,
  extendTheme,
  Textarea,
  Select,
  Checkbox,
  Stack,
  Button,
  Flex,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/react';
import axios from 'axios';
import CustomIcon from '../content/customIcon';
import { AccountSettingsContext } from '../../context/AccountSettingsContext';
import { AuthContext } from '../../context/authcontext';
import GlobalConfirmationModal from '../../../common/ConfirmationModal';
import TableListImpacts from './impactos/tableImpactos'
import './impacts.scss';

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
  const [selectedTable, setSelectedTable] = useState('Gerar Impactos');
  const { userData } = useContext(AccountSettingsContext);
  const { token } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    subject: '',
    urgency: '',
    locality: '',
    support: '',
    affectedCommunity: '',
    biomes: [],
    situation: '',
    contribution: '',
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const onClose = () => setIsOpen(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => {
        if (checked) {
          return { ...prevState, biomes: [...prevState.biomes, value] };
        } else {
          return { ...prevState, biomes: prevState.biomes.filter(biome => biome !== value) };
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const payload = { ...formData, userId: userData.id };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post('https://backend-rclimaticas-2.onrender.com/impacts', payload, config);
      console.log('Impacto criado com sucesso:', response.data);
      setIsLoading(false);
      onClose();
    } catch (error) {
      console.error('Erro ao criar o impacto:', error);
      setIsLoading(false);
    }
  };

  const renderTable = () => {
    if (selectedTable === 'Gerar Impactos') {
      return (
        <>
          <Box p={2}>
            <FormControl variant="floating">
              <Input
                placeholder=" "
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              <FormLabel>Assunto</FormLabel>
            </FormControl>
          </Box>
          <Box p={2}>
            <FormControl variant="floating">
              <Input
                value={formData.locality || ''}
                name='locality'
                placeholder=''
                onChange={handleInputChange}
              />
              <FormLabel>Localidade/Município/Estado</FormLabel>
            </FormControl>
          </Box>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
            <Box p={2}>
              <FormControl variant="floating">
                <Select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  focusBorderColor="brand.blue"
                >
                  <option value="alta">Alta</option>
                  <option value="baixa">Baixa</option>
                </Select>
                <FormLabel>Urgência:</FormLabel>
              </FormControl>
            </Box>
            <Box p={2}>
              <FormControl variant="floating">
                <Select
                  name="support"
                  value={formData.support}
                  onChange={handleInputChange}
                  focusBorderColor="brand.blue"
                >
                  <option value="financeiro">Financeiro</option>
                  <option value="tecnico">Técnico</option>
                  <option value="logistico">Logístico</option>
                  <option value="incidencia">Incidência</option>
                  <option value="psicoemocional">Psicoemocional</option>
                </Select>
                <FormLabel>Tipo de apoio:</FormLabel>
              </FormControl>
            </Box>
            <Box p={2}>
              <FormControl variant="floating">
                <Select
                  name="affectedCommunity"
                  value={formData.affectedCommunity}
                  onChange={handleInputChange}
                  focusBorderColor="brand.blue"
                >
                  <option value="agricultura_familiar">Agricultura familiar</option>
                  <option value="quilombolas">Quilombolas</option>
                  <option value="comunidades_urbanas">Comunidades urbanas</option>
                  <option value="pescadores">Pescadores</option>
                  <option value="extrativistas">Extrativistas</option>
                  <option value="fundo_fecho_pasto">Fundo e fecho de pasto</option>
                  <option value="geraizeiros">Geraizeiros</option>
                  <option value="indigenas">Indígenas</option>
                  <option value="religiosos">Religiosos</option>
                  <option value="ciganos">Ciganos</option>
                  <option value="nomades">Nômades</option>
                  <option value="outros">Outros</option>
                </Select>
                <FormLabel>Comunidade afetada:</FormLabel>
              </FormControl>
            </Box>
            <Box p={2}>
              <FormControl variant="floating">
                <Select
                  name="situation"
                  value={formData.situation}
                  onChange={handleInputChange}
                  focusBorderColor="brand.blue"
                >
                  <option value="violacao_direito">Violação de direito</option>
                  <option value="empreendimento_abusivo">Empreedimento abusivo</option>
                  <option value="desmatamento">Desmatamento</option>
                  <option value="invasao_territorio">Invasão do território</option>
                  <option value="abuso_poder">Abuso de poder</option>
                  <option value="agressao_ameaca">Agressão ou ameaça</option>
                  <option value="situacao_anormal">Situação anormal</option>
                  <option value="falta_informacao">Falta de informação</option>
                  <option value="animal_silvestre_encontrado">Animal silvestre encontrado</option>
                  <option value="queimada_incendio">Queimada ou incêndio</option>
                  <option value="poluicao_rio">Poluição do rio</option>
                  <option value="poluicao_solo">Poluição do solo</option>
                  <option value="poluicao_mar">Poluição do mar</option>
                  <option value="poluicao_ar">Poluição do ar</option>
                  <option value="situacao_climatica_extrema">Situação climática extrema</option>
                </Select>
                <FormLabel>Situação a ser resolvida:</FormLabel>
              </FormControl>
            </Box>

          </Grid>
          <Box p={2}>
            <FormControl>
              <FormLabel>Bioma:</FormLabel>
              <Flex gap={5}>
                <HStack whiteSpace="nowrap">
                  {(userData.themesBiomes && userData.themesBiomes.length > 0) ? (
                    userData.themesBiomes.map(themesBiomes => (
                      <Checkbox
                        key={themesBiomes}
                        icon={<CustomIcon />}
                        color='black'
                        value={themesBiomes}
                        isChecked={formData.biomes.includes(themesBiomes)}
                        onChange={handleInputChange}
                      >
                        {themesBiomes}
                      </Checkbox>
                    ))
                  ) : (
                    <Box bg="white" borderColor={'green'}>
                      <Text color={'red'}>Você não escolheu nenhum tema</Text>
                    </Box>
                  )}
                </HStack>
              </Flex>
            </FormControl>
          </Box>
          <Box p={2} mt={2} width={'full'}>
            <FormControl variant="floating">
              <Textarea
                placeholder=" "
                name="contribution"
                value={formData.contribution}
                onChange={handleInputChange}
              />
              <FormLabel>Contribuição do pedido</FormLabel>
            </FormControl>
          </Box>
          <Box p={2}>
            <Button
              bg={"#CFD249"}
              _hover={{ bg: "#bdbf47" }}
              boxShadow="-4px 4px 4px rgba(0, 0, 0, 0.25)"
              onClick={() => setIsOpen(true)}
            >
              Solicitar Colaboração
            </Button>
          </Box>
        </>
      );
    } else {
      return <div><TableListImpacts /></div>;
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex justify={'center'}>
        <VStack w={'full'}>
          <Box className="header-container">
            <div className="header-left">
              <HStack>
                <Button
                  bg={selectedTable === 'Gerar Impactos' ? '#CFD249' : '#FAFAFA'}
                  _hover={{ bg: "#bdbf47" }}
                  borderRadius="20px"
                  onClick={() => setSelectedTable('Gerar Impactos')}
                  className={selectedTable === 'Gerar Impactos' ? 'selected' : ''}
                >
                  Gerar Impactos
                </Button>
                <Button
                  bg={selectedTable === 'Impactos que denunciei' ? '#CFD249' : '#FAFAFA'}
                  _hover={{ bg: "#bdbf47" }}
                  borderRadius="20px"
                  onClick={() => setSelectedTable('Impactos que denunciei')}
                  className={selectedTable === 'Impactos que denunciei' ? 'selected' : ''}
                >
                  Impactos que denunciei
                </Button>
              </HStack>
            </div>
          </Box>
          <Box className="content-container" minHeight="60vh" width={'full'}>
            {renderTable()}
          </Box>
        </VStack>
      </Flex>

      <GlobalConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleSubmit}
        isLoading={isLoading}
        description="Você deseja realmente enviar o impacto?"
        toastMessage="Impacto enviado com sucesso."
      />
    </ChakraProvider>
  );
};

export default ImpactTable;
