import React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfile from '../Components/user/userProfile.jsx';
import DataRC from "../Components/datarc/datarc.jsx";
import Login from "../Components/form/Login.jsx";
import Register from "../Components/form/Register.jsx";
import Home from "../Components/home/home.jsx";
import LigaColaborativa from "../Components/ligacolaborativa/lc.jsx";
import theme from "../Components/styles/theme.ts";
import { GoogleAuthProvider } from "../Components/context/GoogleAuthContext.jsx"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AccountSettingsProvider } from '../Components/context/AccountSettingsContext.jsx';
import OndeFoi from '../Components/ondefoi/index.jsx';

const PrivateRoutes = () => {
    return (
        <ChakraProvider theme={theme}>
            <AccountSettingsProvider>
                <GoogleOAuthProvider clientId="121933231345-24jcpdkc5ck4og584uou6fd9mcnbtgpe.apps.googleusercontent.com">
                    <GoogleAuthProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/datarc" element={<DataRC />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/ligacolaborativa" element={<LigaColaborativa />} />
                                <Route path="/user" element={<UserProfile />} />
                                <Route path="/ondefoi" element={<OndeFoi />} />
                            </Routes>
                        </BrowserRouter>
                    </GoogleAuthProvider>
                </GoogleOAuthProvider>
            </AccountSettingsProvider>
        </ChakraProvider>
    );
};
export default PrivateRoutes;