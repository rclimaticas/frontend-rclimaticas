import React, { useContext } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import OndeFoi from "./Components/ondefoi/ondefoi.jsx";
import DataRC from "./Components/datarc/datarc.jsx";
import Login from "./Components/form/Login.jsx";
import Register from "./Components/form/Register.jsx";
import Home from "./Components/home/home.jsx";
import LigaColaborativa from "./Components/ligacolaborativa/lc.jsx";
import UserProfile from './Components/user/userProfile.jsx';
import PublicRoutes from "./routes/public.routes.jsx";
import PrivateRoutes from "./routes/private.routes.jsx";
import { AuthContext } from "./Components/context/authcontext.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import theme from "./Components/styles/theme.ts";

const App = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);

  // Condição para acesso do usuário nas rotas
  return (
    <ChakraProvider theme={theme}>
      <GoogleOAuthProvider clientId="121933231345-24jcpdkc5ck4og584uou6fd9mcnbtgpe.apps.googleusercontent.com">
        {auth ? <PrivateRoutes /> : <PublicRoutes />}
      </GoogleOAuthProvider>
    </ChakraProvider>
  );
};

export default App;
