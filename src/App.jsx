import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import OndeFoi from "./Components/ondefoi/ondefoi";
import DataRC from "./Components/datarc/datarc";
import Login from "./Components/Form/login";
import Register from "./Components/Form/register";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* Alterar caminho da página de login */}
          <Route path="/" element={<Home />} />
          <Route path="/ondefoi" element={<OndeFoi />} />
          <Route path="/datarc" element={<DataRC />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
export default App;
