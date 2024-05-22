import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react'

import Actions from './actions';
import Data from './data';
import Profile from './profile';

import { AuthContext } from '../../context/authcontext';

function Sidebar() {

  const { logout } = useContext(AuthContext);
  return (
    <Box
      as="aside"
      flex={1}
      bg="white"
      mr={{ base: 0, md: 5 }}
      mb={{ base: 5, md: 0 }}
      rounded="md"
      borderWidth={1}
      borderColor="brand.light"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Profile />
      <Data />
      <Actions />
    </Box>
  )
}

export default Sidebar;