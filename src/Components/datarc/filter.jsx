import React, { useState } from 'react';
import { Box, Input, Select, Button, VStack, Image } from '@chakra-ui/react';
const artigos = [
    {
      id: 1,
      titulo: "Artigo 1",
      midia: "Blog",
      assunto: "Tecnologia",
      fonte: "Fonte A",
      periodo: "2023-06-01",
      imagem: "url_para_imagem_1.jpg"
    },
    {
      id: 2,
      titulo: "Artigo 2",
      midia: "Jornal",
      assunto: "Saúde",
      fonte: "Fonte B",
      periodo: "2023-05-20",
      imagem: "url_para_imagem_2.jpg"
    },
    // Adicione mais artigos conforme necessário
  ];
  

const ArtigosFiltro = () => {
    
  const [filtros, setFiltros] = useState({
    midia: "",
    assunto: "",
    fonte: "",
    periodo: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const artigosFiltrados = artigos.filter(artigo => {
    return (
      (filtros.midia ? artigo.midia === filtros.midia : true) &&
      (filtros.assunto ? artigo.assunto === filtros.assunto : true) &&
      (filtros.fonte ? artigo.fonte === filtros.fonte : true) &&
      (filtros.periodo ? artigo.periodo === filtros.periodo : true)
    );
  });

  return (
    <VStack spacing={4}>
      <Input
        placeholder="Mídia"
        name="midia"
        value={filtros.midia}
        onChange={handleChange}
      />
      <Input
        placeholder="Assunto"
        name="assunto"
        value={filtros.assunto}
        onChange={handleChange}
      />
      <Input
        placeholder="Fonte"
        name="fonte"
        value={filtros.fonte}
        onChange={handleChange}
      />
      <Input
        placeholder="Período (AAAA-MM-DD)"
        name="periodo"
        value={filtros.periodo}
        onChange={handleChange}
      />
      <Box bg='#7D9270' height='500px' border="1px solid white" overflow="auto">
        {artigosFiltrados.map(artigo => (
          <Image key={artigo.id} src={artigo.imagem} alt={artigo.titulo} />
        ))}
      </Box>
    </VStack>
  );
};

export default ArtigosFiltro;
