import React, { createContext, useState } from 'react';
import * as jwt_decode from 'jwt-decode';

export const GoogleAuthContext = createContext();

export const GoogleAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleGoogleLoginSuccess = (response) => {
        const decodedToken = jwt_decode(response.credential);
        const userInfo = {
            email: decodedToken.email,
            name: decodedToken.name,
            picture: decodedToken.picture,
        };
        setUser(userInfo);  // store the user information
        localStorage.setItem('googleUser', JSON.stringify(userInfo));
    };

    const handleGoogleLogout = () => {
        setUser(null);
        localStorage.removeItem('googleUser');
    };

    return (
        <GoogleAuthContext.Provider value={{ user, handleGoogleLoginSuccess, handleGoogleLogout }}>
            {children}
        </GoogleAuthContext.Provider>
    );
};
