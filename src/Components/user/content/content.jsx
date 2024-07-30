import { useState, useContext } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import AccountSettings from './account';
import Actions from './actions';
import CompanySettings from './company';
import Colaborador from './colaborador';
import Impacts from './impacts';
import Validation from './validation';
import { useAccountSettingsContext } from '../../context/AccountSettingsContext';
import { GoogleAuthContext } from '../../context/GoogleAuthContext';

const Content = () => {
  const tabs = ['Configuração de Conta', 'Redes Sociais', 'Área Colaborador', 'Meus impactos'];
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const { userData, handleChange } = useAccountSettingsContext();
  const { googleAuth } = useContext(GoogleAuthContext);

  // Check if the user has the 'validador' role
  const isValidador = userData.roles && userData.roles.includes('validador');

  // Add 'Validações' tab if the user has the 'validador' role
  if (isValidador) {
    tabs.push('Validações');
  }

  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)' }}
      overflowX="hidden"
    >
      <Tabs onChange={(index) => setSelectedTabIndex(index)}>
        <TabList px={5}>
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'dark', borderColor: 'black' }}
              overflow={"hidden"}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <AccountSettings />
          </TabPanel>
          <TabPanel>
            <CompanySettings />
          </TabPanel>
          <TabPanel>
            <Colaborador />
          </TabPanel>
          <TabPanel>
            <Impacts />
          </TabPanel>
          {isValidador && (
            <TabPanel>
              <Validation />
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
      <Actions selectedTabIndex={selectedTabIndex} />
    </Box>
  );
};

export default Content;
