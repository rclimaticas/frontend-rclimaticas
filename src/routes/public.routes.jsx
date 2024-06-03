import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataRC from "../Components/datarc/datarc.jsx";
import Login from "../Components/form/Login.jsx";
import Register from "../Components/form/Register.jsx";
import Home from "../Components/home/home.jsx";
import LigaColaborativa from "../Components/ligacolaborativa/lc.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import theme from "../Components/styles/theme.ts";
import { AccountSettingsProvider } from '../Components/context/AccountSettingsContext.jsx';
import OndeFoi from '../Components/ondefoi/index.jsx';

const PublicRoutes = () => {

  return (
    <ChakraProvider theme={theme}>
      <AccountSettingsProvider>
        <GoogleOAuthProvider clientId="121933231345-24jcpdkc5ck4og584uou6fd9mcnbtgpe.apps.googleusercontent.com">
          <BrowserRouter>
            <Routes>
              {/* Alterar caminho da página de login */}
              <Route path="/" element={<Home />} />
              <Route path="/datarc" element={<DataRC />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/ligacolaborativa" element={<LigaColaborativa />} />
              <Route path="/ondefoi" element={<OndeFoi />} />
            </Routes>
          </BrowserRouter>
        </GoogleOAuthProvider>
      </AccountSettingsProvider>
    </ChakraProvider>
  );
};
export default PublicRoutes;
