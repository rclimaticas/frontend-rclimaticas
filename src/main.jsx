import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./Components/context/authcontext.jsx";
import { GoogleAuthProvider } from './Components/context/GoogleAuthContext.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
    <GoogleAuthProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </GoogleAuthProvider>
);
