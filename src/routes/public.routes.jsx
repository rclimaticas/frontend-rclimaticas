import React, { useContext, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import theme from "../Components/styles/theme.ts";
import { AccountSettingsProvider } from '../Components/context/AccountSettingsContext.jsx';
import { GoogleAuthProvider } from '../Components/context/GoogleAuthContext.jsx';
import Home from "../Components/home/home.jsx";
import Login from "../Components/form/Login.jsx";
import Register from "../Components/form/Register.jsx";
import NotFound from "../Components/404page/NotFound.jsx";
import { AccountSettingsContext } from "../Components/context/AccountSettingsContext.jsx";
import LoginValidators from '../Components/form/loginValidators.jsx'
import '../App.css';

const PublicRoutes = () => {
  const auth = useContext(AccountSettingsContext)


  useEffect(() => {
    if (!auth && !["/", "/login", "/register"].includes(location.pathname)) {
      document.title = "Acesso Negado :(";
    }
  }, [auth, location.pathname]);
  return (
    <ChakraProvider theme={theme}>
      <GoogleAuthProvider>
        <AccountSettingsProvider>

          <GoogleOAuthProvider clientId="121933231345-24jcpdkc5ck4og584uou6fd9mcnbtgpe.apps.googleusercontent.com">

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/validators" element={< LoginValidators/>} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </GoogleOAuthProvider>

        </AccountSettingsProvider>
      </GoogleAuthProvider>
    </ChakraProvider>
  );
};

export default PublicRoutes;
