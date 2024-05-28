import React, { useState, useEffect, useContext } from 'react';
import { Box, Button } from '@chakra-ui/react'
import { AccountSettingsContext } from '../../context/AccountSettingsContext';
import Account from './account'
function Actions({handleUpdate}) {
  
  return (
    <>

    <Box  mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">

        <Button onClick={handleUpdate} width={"20%"}>Update</Button>
    </Box>
    </>
  )
}

export default Actions;