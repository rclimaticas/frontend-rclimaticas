import React, { useContext } from 'react';
import {
  Grid, Checkbox, FormControl, FormLabel, FormHelperText, Stack, Select, Box, Text, Flex, Heading, Input
} from '@chakra-ui/react';
import CustomIcon from './customIcon';
import { AccountSettingsContext } from '../../context/AccountSettingsContext';

export default function Colaborador() {
  const { userData, handleChange, handleCheckboxChange } = useContext(AccountSettingsContext);

  const options = [];
  for (let i = 1; i <= 30; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <>
      <Heading fontSize={"20px"} mb={10}>
        Esse espaço irá ajudar a direcionar da melhor forma as possibilidade de colaborar e
        receber colaboração. Atualize as informações sempre que necessário.
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <FormControl>
          <FormLabel>Faz parte de alguma organização/coletivo?</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl id="weeklyAvailability">
          <FormLabel>⚡ Qual sua disponibilidade de tempo para colaborar?</FormLabel>
          <Select
            focusBorderColor="brand.blue"
            placeholder="Selecione uma disponibilidade em minutos"
            value={userData.weeklyAvailability || ''}
            onChange={handleChange}
          >
            <option value="10">10 minutos</option>
            <option value="30">30 minutos</option>
            <option value="60">60 minutos</option>
          </Select>
        </FormControl>

        <FormControl as='fieldset'>
          <Stack>
            <FormLabel as='legend'>Área de interesse em colaborar com a Liga.</FormLabel>
            <Stack>
              {['Social/Cultural/Econômia', 'Ambiental/Territórios/Biodiversidade', 'Tecnologia/Inovação/Desenvolvimento', 'Comunicação/Educação', 'Finanças/Captação', 'Governança/Politicas Públicas'].map(area => (
                <Checkbox
                  key={area}
                  icon={<CustomIcon />}
                  color='black'
                  value={area}
                  isChecked={userData.areaOfInterest.includes(area)}
                  onChange={(e) => handleCheckboxChange(e, 'areaOfInterest')}
                >
                  {area}
                </Checkbox>
              ))}
            </Stack>
            <FormHelperText>Poderá ser selecionado mais de uma área de interesse</FormHelperText>
          </Stack>
        </FormControl>
        <FormControl as='fieldset'>
          <Stack>
            <FormLabel as='legend'>Sobre quais biomas você tem algum conhecimento?</FormLabel>
            <Stack>
              {['Mata Atlântica', 'Caatinga', 'Amazônia', 'Pampas', 'Pantanal', 'Cerrado', 'Zonas urbanas'].map(biome => (
                <Checkbox
                  key={biome}
                  icon={<CustomIcon />}
                  color='black'
                  value={biome}
                  isChecked={userData.themesBiomes.includes(biome)}
                  onChange={(e) => handleCheckboxChange(e, 'themesBiomes')}
                >
                  {biome}
                </Checkbox>
              ))}
            </Stack>
            <FormHelperText>Poderá ser selecionado mais de uma área de interesse</FormHelperText>
          </Stack>
        </FormControl>

        {/* <FormControl as='fieldset'>
          <Stack>
            <FormLabel as='legend'>⚡ Em qual eixo você gostaria de contribuir na constelação da Liga Colaborativa dos Povos?</FormLabel>
            <Stack>
              {['Social/Cultural/Econômia', 'Ambiental/Territórios/Biodiversidade', 'Tecnologia/Inovação/Desenvolvimento', 'Comunicação/Educação', 'Finanças/Captação', 'Governança/Politicas Públicas'].map(axis => (
                <Checkbox
                  key={axis}
                  icon={<CustomIcon />}
                  color='black'
                  value={axis}
                  isChecked={userData.contributionAxis.includes(axis)}
                  onChange={(e) => handleCheckboxChange(e, 'contributionAxis')}
                >
                  {axis}
                </Checkbox>
              ))}
            </Stack>
            <FormHelperText>Poderá ser selecionado mais de um eixo</FormHelperText>
          </Stack>
        </FormControl> */}

        {/* Apenas para pular linha */}
        {/* <Box>ㅤㅤㅤㅤㅤㅤㅤㅤ</Box> */}

        <FormControl as='fieldset'>
          <FormLabel> Sobre quais povos você tem conhecimento ou tem interesse em contribuir</FormLabel>
          <Stack>
            <Stack>
              {['Agricultor Familiar', 'Indígenas', 'Quilombolas', 'Fundo de Pasto', 'Gerais', 'Pescadores Ribeirinhos', 'Pescadores/Marisqueiros', 'Cidades'].map(community => (
                <Checkbox
                  key={community}
                  icon={<CustomIcon />}
                  color='black'
                  value={community}
                  isChecked={userData.themesCommunities.includes(community)}
                  onChange={(e) => handleCheckboxChange(e, 'themesCommunities')}
                >
                  {community}
                </Checkbox>
              ))}
            </Stack>
          </Stack>
        </FormControl>
        <FormControl>
          <FormControl as='fieldset'>
            <FormLabel color="white">Sobre quais povos você tem conhecimento ou tem interesse em contribuir?</FormLabel>
            <Stack>
              <Stack>
                {['Geraizeiros', 'Indígenas', 'Religiosos', 'Ciganos', 'Nômades', 'Outros'].map(biome => (
                  <Checkbox
                    key={biome}
                    icon={<CustomIcon />}
                    color='black'
                    value={biome}
                    isChecked={userData.themesBiomes.includes(biome)}
                    onChange={(e) => handleCheckboxChange(e, 'themesBiomes')}
                  >
                    {biome}
                  </Checkbox>
                ))}
              </Stack>
            </Stack>
          </FormControl>
        </FormControl>


        {/* <Box mt={5} w={'sm'}>
          <Button onClick={handleUpdate} colorScheme="blue">Atualizar</Button>
        </Box> */}

      </Grid >
    </>
  );
}

