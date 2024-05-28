import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const savedAuth = localStorage.getItem('auth');
    const [auth, setAuth] = useState(savedAuth ? JSON.parse(savedAuth) : false);

    const savedToken = localStorage.getItem('token');
    const [token, setToken] = useState(savedToken);

    const savedId = localStorage.getItem('id'); // Ler o ID do localStorage
    const [id, setId] = useState(savedId);

    const login = (newToken, userId) => {
        setAuth(true);
        setToken(newToken);
        setId(userId);
    };

    const logout = () => {
        setAuth(false);
        setToken(null);
        setId(null);
    };

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
        localStorage.setItem('token', token);
        localStorage.setItem('id', id); // Salvar o ID no localStorage
    }, [auth, token, id]);

    return (
        <AuthContext.Provider value={{ auth, token, id, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
