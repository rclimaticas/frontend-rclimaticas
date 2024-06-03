import React, { useContext } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import 'simplebar-react/dist/simplebar.min.css';
import PublicRoutes from "./routes/public.routes.jsx";
import PrivateRoutes from "./routes/private.routes.jsx";
import { AuthContext } from "./Components/context/authcontext.jsx";
import { AccountSettingsProvider } from './Components/context/AccountSettingsContext.jsx';
import theme from "./Components/styles/theme.ts";

const App = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);

  // Condição para acesso do usuário nas rotas
  return (
    <ChakraProvider theme={theme}>
      <AccountSettingsProvider>
        {auth ? <PrivateRoutes /> : <PublicRoutes />}
      </AccountSettingsProvider>
    </ChakraProvider>
  );
};

export default App;
