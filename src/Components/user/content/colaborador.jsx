import React, { useContext } from 'react';
import {
  Grid, Checkbox, FormControl, FormLabel, FormHelperText, Stack, Select, Box, Text, Flex, Heading
} from '@chakra-ui/react';
import CustomIcon from './customIcon';
import { AccountSettingsContext } from '../../context/AccountSettingsContext';

export default function Colaborador() {
  const { userData, handleChange, handleCheckboxChange } = useContext(AccountSettingsContext);

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
      <Heading fontSize={"20px"} mb={10}>
        Esse espaço irá ajudar a direcionar da melhor forma as possibilidade de colaborar e
        receber colaboração. Atualize as informações sempre que necessário.
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
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
              {['Mata Atlântica', 'Caatinga', 'Amazônia', 'Pampas', 'Pantanal', 'Zonas urbanas'].map(biome => (
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
        <FormControl id="weeklyAvailability">
          <FormLabel>⚡ Qual sua disponibilidade de tempo para contribuir semanalmente?</FormLabel>
          <Select
            focusBorderColor="brand.blue"
            placeholder="Selecione uma disponibilidade em horas"
            value={userData.weeklyAvailability || ''}
            onChange={handleChange}
          >
            {options}
          </Select>
        </FormControl>

        {/* Apenas para pular linha */}
        {/* <Box>ㅤㅤㅤㅤㅤㅤㅤㅤ</Box> */}

        <Box mt={5} w={'lg'}>
          <FormLabel>⚡ Quais temas te conecta?</FormLabel>

          <Flex gap={5}>
            <FormControl as='fieldset'>

              <Stack>
                <Text>• Escolha um tipo de bioma</Text>
                <Stack>
                  {['Mata Atlântica', 'Caatinga', 'Amazônia', 'Pampas', 'Pantanal', 'Zonas urbanas'].map(biome => (
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

            <FormControl as='fieldset'>
              <Stack>
                <Text>• Escolha um tipo de comunidade</Text>
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
          </Flex>
        </Box>

        {/* <Box mt={5} w={'sm'}>
          <Button onClick={handleUpdate} colorScheme="blue">Atualizar</Button>
        </Box> */}

      </Grid>
    </>
  );
}

