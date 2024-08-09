import { Box, Text, VStack } from '@chakra-ui/react'
import { useContext } from 'react'
import { AccountSettingsContext } from '../../context/AccountSettingsContext';

function Data() {
  const { userData } = useContext(AccountSettingsContext);

  const list = [
    {
      id: 1,
      name: 'Contribuições',
      value: 32,
    },
    {
      id: 2,
      name: 'Meu email',
      value: userData.email,
    },
    {
      id: 3,
      name: 'Meu número',
      value: userData.whatsapp,
    },
    {
      id: 4,
      name: 'Minhas Áreas de Interesse',
      value: Array.isArray(userData.areaOfInterest) ? userData.areaOfInterest.join(', ') : userData.areaOfInterest,
    },
    {
      id: 5,
      name: 'Eixos que eu contribuo',
      value: Array.isArray(userData.contributionAxis) ? userData.contributionAxis.join(', ') : userData.contributionAxis,
    },
    {
      id: 6,
      name: 'Disponibilidade Semanal (Em horas)',
      value: userData.weeklyAvailability,
    },
    {
      id: 7,
      name: 'Temas Biomas',
      value: Array.isArray(userData.themesBiomes) ? userData.themesBiomes.join(', ') : userData.themesBiomes,
    },
    {
      id: 8,
      name: 'Tema Comunidade',
      value: Array.isArray(userData.themesCommunities) ? userData.themesCommunities.join(', ') : userData.themesCommunities,
    },
    {
      id: 9,
      name: 'Povos que contribuo',
      value: Array.isArray(userData.peoples) ? userData.peoples.join(', ') : userData.peoples,
    },
  ];

  const filteredList = list.filter(item => item.value && item.value.length > 0);

  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      {filteredList.map(item => (
        <Box
          key={item.id}
          as="li"
          w="full"
          py={3}
          px={5}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="brand.light"
        >
          <Text color="brand.dark">{item.name}</Text>
          <Text color={"green"} fontWeight="bold">
            {item.value}
          </Text>
        </Box>
      ))}
    </VStack>
  )
}

export default Data;
