import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import AccountSettings from './account'
import Actions from './actions'
import CompanySettings from './company'
import Colaborador from './colaborador'

const Content = () => {
  const tabs = ['Configuração de Conta', 'Redes Sociais', 'Área Colaborador']

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
    >
      <Tabs
      >
        <TabList px={5}>
          {tabs.map(tab => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'darl', borderColor: 'black' }}
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
  
        </TabPanels>
      </Tabs>

      <Actions />
    </Box>
  )
}

export default Content