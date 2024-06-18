import React, { useContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import 'simplebar-react/dist/simplebar.min.css';
import PublicRoutes from "./routes/public.routes.jsx";
import PrivateRoutes from "./routes/private.routes.jsx";
import { AuthContext } from "./Components/context/authcontext.jsx";
import { AccountSettingsProvider } from './Components/context/AccountSettingsContext.jsx';
import { GoogleAuthContext } from './Components/context/GoogleAuthContext.jsx';
import theme from "./Components/styles/theme.ts";
import './App.css';

const App = () => {
  const { auth } = useContext(AuthContext);
  const { googleAuth } = useContext(GoogleAuthContext);
  console.log(auth);

  // Condição para acesso do usuário nas rotas
  return (
    <ChakraProvider theme={theme}>
        <AccountSettingsProvider>
          {auth || googleAuth.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
        </AccountSettingsProvider>
    </ChakraProvider>
  );
};

export default App;
