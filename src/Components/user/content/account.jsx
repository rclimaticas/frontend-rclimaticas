import React, { useState, useEffect, useContext } from 'react';
import { FormControl, FormLabel, Grid, Input, Select, Box } from '@chakra-ui/react';
import { AuthContext } from '../../context/authcontext';
import Actions from './actions';
import axios from 'axios';

function AccountSettings() {
  const { token, id } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    email: '',
    username: '',
    whatsapp: '',
    gender: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    facebook: '',
    areaOfInterest: '',
    contributionAxis: '',
    weeklyAvailability: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://backend-rclimaticas.onrender.com/profile/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUserData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, [token, id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleUpdate = async () => {
    console.log("handleUpdate foi chamado");
    try {
      await axios.put(`https://backend-rclimaticas.onrender.com/profile/${id}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
       // Notificar o componente pai que a atualização foi bem-sucedida
    } catch (error) {
      console.error('Erro ao atualizar dados do usuário:', error);
    }
  };

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
