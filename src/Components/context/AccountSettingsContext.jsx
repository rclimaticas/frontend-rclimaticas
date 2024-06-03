import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './authcontext';
import { useToast } from '@chakra-ui/react';

export const AccountSettingsContext = createContext();

export const AccountSettingsProvider = ({ children }) => {
  const { token, id } = useContext(AuthContext);
  const toast = useToast();
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
    contributionAxis: [],
    weeklyAvailability: '',
    themesBiomes: [],
    themesCommunities: [],
    imageBase64: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://backend-rclimaticas.onrender.com/profile/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = response.data;

        setUserData({
          ...data,
          areaOfInterest: data.areaOfInterest || '',
          contributionAxis: data.contributionAxis || [],
          themesBiomes: data.themesBiomes || [],
          themesCommunities: data.themesCommunities || [],
          imageBase64: data.imageBase64 || '',
        });
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, [token, id]);

  const handleUpdate = async (data) => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => {
        if (Array.isArray(value)) {
          return value.length > 0;
        }
        return typeof value === 'string' && value.trim() !== '';
      })
    );

    try {
      await axios.put(`https://backend-rclimaticas.onrender.com/profile/${id}`, filteredData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast({
        title: "Dados Atualizados",
        description: "Seus dados foram atualizados com sucesso :)",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      console.log("Dados atualizados com sucesso", filteredData);

    } catch (error) {
      console.error('Erro ao atualizar dados do usuário:', error);
    }
  };

  const handleChange = (e) => {
    if (e.target && e.target.id !== undefined) {
      const { id, value } = e.target;
      setUserData(prevData => ({
        ...prevData,
        [id]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData(prevData => ({
          ...prevData,
          imageBase64: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setUserData(prevData => {
      const updatedField = checked
        ? [...prevData[field], value]
        : prevData[field].filter(item => item !== value);

      return {
        ...prevData,
        [field]: updatedField
      };
    });
  };

  return (
    <AccountSettingsContext.Provider value={{ userData, handleUpdate, handleChange, handleCheckboxChange, handleFileChange }}>
      {children}
    </AccountSettingsContext.Provider>
  );
};

export const useAccountSettingsContext = () => useContext(AccountSettingsContext);