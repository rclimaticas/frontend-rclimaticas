// authcontext.jsx

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const savedAuth = localStorage.getItem('auth');
    const [auth, setAuth] = useState(savedAuth ? JSON.parse(savedAuth) : false);

    const login = () => {
        setAuth(true);
    };

    const logout = () => {
        setAuth(false);
    };

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
