import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
    message:
      "A senha precisa ter pelo menos 1 caractere maiúsculo e 1 dígito com no mínimo 6 caracteres.",
  },
};

const useCustomForm = (type) => {
  const [value, setValue] = React.useState("");
  const [validation, setValidation] = React.useState({
    error: null,
    isValid: false,
  });

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setValidation({ error: "Informe corretamente o campo", isValid: false });
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setValidation({ error: types[type].message, isValid: false });
      return false;
    } else {
      setValidation({ error: null, isValid: true });
      return true;
    }
  }

  function onChange({ target }) {
    if (validation.error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error: validation.error,
    isInvalid: !validation.isValid,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useCustomForm;