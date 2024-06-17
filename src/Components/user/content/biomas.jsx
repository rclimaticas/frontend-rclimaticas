import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Text,
  Input,
  FormHelperText,
} from '@chakra-ui/react';

const FloatingLabelSelect = ({ label, options }) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FormControl
      position="relative"
      mt={4}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(value !== '')}
    >
      <FormLabel
        position="absolute"
        top={isFocused || value ? '-10px' : '10px'}
        left="12px"
        fontSize={isFocused || value ? 'sm' : 'md'}
        bg="white"
        px="2"
        transition="all 0.2s"
        pointerEvents="none"
      >
        {label}
      </FormLabel>
      <Select
        placeholder="Selecione uma opção"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        height="40px"
        pt={isFocused || value ? '18px' : '0'}
        pb={isFocused || value ? '8px' : '0'}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default FloatingLabelSelect;

