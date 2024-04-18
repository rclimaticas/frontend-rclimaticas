import { createContext, useContext, useState } from 'react';

const AuthTokenContext = createContext();

export const AuthTokenProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const setToken = (token) => {
    setAuthToken(token);
  };

  return (
    <AuthTokenContext.Provider value={{ authToken, setToken }}>
      {children}
    </AuthTokenContext.Provider>
  );
};

export const useAuthToken = () => useContext(AuthTokenContext);