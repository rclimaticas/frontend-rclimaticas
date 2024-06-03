import {
    FormControl,
    FormLabel,
    Grid,
    Input,
    InputGroup,
    InputLeftAddon,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
  } from '@chakra-ui/react'
  import { useAccountSettingsContext } from '../../context/AccountSettingsContext';
  
  function CompanySettings() {
    const { userData, handleChange } = useAccountSettingsContext();
    return (
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <FormControl id="facebook">
          <FormLabel>Facebook</FormLabel>
          <InputGroup>
            <InputLeftAddon color="gray.500">
              <svg width="1em" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clipRule="evenodd"
                />
              </svg>
            </InputLeftAddon>
            <Input
              focusBorderColor="brand.blue"
              type="text"
              value={userData.facebook || ''}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl id="instagram">
          <FormLabel>Instagram</FormLabel>
          <InputGroup>
            <InputLeftAddon color="gray.500">
              <svg width="1em" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clipRule="evenodd"
                />
              </svg>
            </InputLeftAddon>
            <Input
              focusBorderColor="brand.blue"
              type="text"
              value={userData.instagram || ''}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl id="linkedin">
          <FormLabel>Linkedin</FormLabel>
          <InputGroup>
            <InputLeftAddon color="gray.500">
              <svg width="1em" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clipRule="evenodd"
                />
              </svg>
            </InputLeftAddon>
            <Input
              focusBorderColor="brand.blue"
              type="text"
              value={userData.linkedin || ''}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl id="companyId">
          <FormLabel>Twitter</FormLabel>
          <InputGroup>
            <InputLeftAddon color="gray.500">
              <svg width="1em" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clipRule="evenodd"
                />
              </svg>
            </InputLeftAddon>
            <Input
              focusBorderColor="brand.blue"
              type="text"
              value={userData.twitter || ''}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
      </Grid>
    )
  }
  
  export default CompanySettings