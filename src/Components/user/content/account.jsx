// src/components/AccountSettings.js
import React from 'react';
import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react';
import { useAccountSettingsContext } from '../../context/AccountSettingsContext';

function AccountSettings() {
  const { userData, handleChange } = useAccountSettingsContext();

  return (
    <>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
        <FormControl id="username">
          <FormLabel>Nome</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder="Nome"
            value={userData.username || ''}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="email"
            placeholder="Email"
            value={userData.email || ''}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="whatsapp">
          <FormLabel>Whatsapp</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="tel"
            placeholder="Whatsapp"
            value={userData.whatsapp || ''}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="gender">
          <FormLabel>Sexo</FormLabel>
          <Select
            focusBorderColor="brand.blue"
            placeholder="Selecione um sexo"
            value={userData.gender || ''}
            onChange={handleChange}
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="nao_dizer">Prefiro não dizer</option>
            <option value="outro">Outro</option>
          </Select>
        </FormControl>
        <FormControl id="city">
          <FormLabel>Cidade</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder="Cidade"
            value={userData.city || ''}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="country">
          <FormLabel>Estado</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder="Estado"
            value={userData.country || ''}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
    </>
  );
}

export default AccountSettings;
