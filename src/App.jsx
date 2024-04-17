import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import OndeFoi from "./Components/ondefoi/ondefoi";
import DataRC from "./Components/datarc/datarc";
import Login from "./Components/form/login";
import Register from "./Components/form/register";
import { AuthProvider } from './Components/hooks/authcontext'; // Importe o AuthProvider aqui
import { UserProvider } from './Components/hooks/userContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
const App = () => {
  return (
    <ChakraProvider>
      <UserProvider>
        <AuthProvider>
          <GoogleOAuthProvider clientId="121933231345-24jcpdkc5ck4og584uou6fd9mcnbtgpe.apps.googleusercontent.com">
            <BrowserRouter>
              <Routes>
                {/* Alterar caminho da página de login */}
                <Route path="/" element={<Home />} />
                <Route path="/ondefoi" element={<OndeFoi />} />
                <Route path="/datarc" element={<DataRC />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </BrowserRouter>
          </GoogleOAuthProvider>
        </AuthProvider>
      </UserProvider>
    </ChakraProvider>
  );
};
export default App;
