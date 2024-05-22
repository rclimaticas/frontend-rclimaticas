import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./Components/context/authcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <App />
    </AuthProvider>
);
