import React, { useContext, useState, useEffect } from 'react';
import {
    Grid, Checkbox, FormControl, FormLabel, FormHelperText, Stack, Select,
    Box,
    Text,
    Button
} from '@chakra-ui/react';
import CustomIcon from './customIcon';
import { AuthContext } from '../../context/authcontext';
import axios from 'axios';

export default function Colaborador() {
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
        areaOfInterest: [],
        contributionAxis: [],
        weeklyAvailability: '',
        themesBiomes: [],
        themesCommunities: []
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3333/profile/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // Garantir que os campos sejam arrays, mesmo se o backend retornar null ou undefined
                const data = response.data;
                data.areaOfInterest = data.areaOfInterest || [];
                data.contributionAxis = data.contributionAxis || [];
                data.themesBiomes = data.themesBiomes || [];
                data.themesCommunities = data.themesCommunities || [];

                setUserData(data);
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
            <Grid
                templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                gap={6}
            >
                <FormControl as='fieldset' >
                    <Stack>
                        <FormLabel as='legend'>⚡Área de interesse em colaborar com a Liga.</FormLabel>
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

                <FormControl as='fieldset' >
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
                </FormControl>

                <FormControl id="weeklyAvailability">
                    <FormLabel>⚡ Qual sua disponibilidade de tempo para contribuir semanalmente?</FormLabel>
                    <Select
                        focusBorderColor="brand.blue"
                        placeholder="Selecione em Horas por semana"
                        value={userData.weeklyAvailability}
                        onChange={handleChange}
                    >
                        {options}
                    </Select>
                </FormControl>

                {/*apenas para pular linha  */}
                <Box>ㅤㅤㅤㅤㅤㅤㅤㅤ</Box>

                <Box mt={5} w={'sm'}>
                    <FormLabel>⚡ Quais temas te conecta?</FormLabel>

                    <FormControl as='fieldset' >
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

                    <FormControl mt={2} as='fieldset' >
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
                </Box>

                {/* <Box mt={5} w={'sm'}>
                    <Button onClick={handleUpdate} colorScheme="blue">Atualizar</Button>
                </Box> */}

            </Grid>
        </>
    );
}
