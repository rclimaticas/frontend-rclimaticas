import React, { createContext, useState, useEffect } from 'react';

export const GoogleAuthContext = createContext();

export const GoogleAuthProvider = ({ children }) => {
    const [googleAuth, setGoogleAuth] = useState({
        isAuthenticated: false,
        token: null,
        user: null
    });

    useEffect(() => {
        // Carregar informações de autenticação do armazenamento local ao montar
        const token = localStorage.getItem('googleToken');
        const user = JSON.parse(localStorage.getItem('googleUser'));

        if (token && user) {
            setGoogleAuth({
                isAuthenticated: true,
                token,
                user
            });
        }
    }, []);

    const googleLogin = (token, user) => {
        setGoogleAuth({
            isAuthenticated: true,
            token,
            user
        });
        localStorage.setItem('googleToken', token);
        localStorage.setItem('googleUser', JSON.stringify(user));
    };

    const googleLogout = () => {
        setGoogleAuth({
            isAuthenticated: false,
            token: null,
            user: null
        });
        localStorage.removeItem('googleToken');
        localStorage.removeItem('googleUser');
    };

    return (
        <GoogleAuthContext.Provider value={{ googleAuth, setGoogleAuth, googleLogin, googleLogout }}>
            {children}
        </GoogleAuthContext.Provider>
    );
};

export default GoogleAuthContext;
