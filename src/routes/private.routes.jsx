import React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfile from '../Components/user/userProfile.jsx';
import OndeFoi from "../Components/ondefoi/ondefoi.jsx";
import DataRC from "../Components/datarc/datarc.jsx";
import Login from "../Components/form/Login.jsx";
import Register from "../Components/form/Register.jsx";
import Home from "../Components/home/home.jsx";
import LigaColaborativa from "../Components/ligacolaborativa/lc.jsx";
import theme from "../Components/styles/theme.ts";
import { GoogleOAuthProvider } from '@react-oauth/google';

const PrivateRoutes = () => {
    return (
        <ChakraProvider theme={theme}>
            <GoogleOAuthProvider clientId="121933231345-24jcpdkc5ck4og584uou6fd9mcnbtgpe.apps.googleusercontent.com">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ondefoi" element={<OndeFoi />} />
                        <Route path="/datarc" element={<DataRC />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/ligacolaborativa" element={<LigaColaborativa />} />
                        <Route path="/user" element={<UserProfile />} />
                    </Routes>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </ChakraProvider>
    );
};
export default PrivateRoutes;