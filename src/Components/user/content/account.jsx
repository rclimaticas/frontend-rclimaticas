import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'

function AccountSettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="name">
        <FormLabel>Nome</FormLabel>
        <Input focusBorderColor="brand.blue" type="description" placeholder="João Vítor" />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input focusBorderColor="brand.blue" type="email" placeholder="jvittor.contatos@gmail.com" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Whatsapp</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="(75) 98233-7055"
        />
      </FormControl>
      <FormControl id="sexo">
        <FormLabel>Sexo</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Selecione um sexo">
          <option value="california">Masculino</option>
          <option value="washington">Feminino</option>
          <option value="toronto">Prefiro não dizer</option>
          <option value="newyork" selected>
            Outro
          </option>
        </Select>
      </FormControl>
      <FormControl id="city">
        <FormLabel>Cidade</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Selecione uma cidade">
          <option value="california">test</option>
          <option value="washington">test</option>
          <option value="toronto">test</option>
          <option value="newyork" selected>
            test
          </option>
        </Select>
      </FormControl>
      <FormControl id="country">
        <FormLabel>Estado</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Selecione um estado">
          <option value="america" selected>
            test
          </option>
          <option value="england">test</option>
          <option value="poland">test</option>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default AccountSettings