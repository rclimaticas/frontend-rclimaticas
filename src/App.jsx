import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {/* Alterar caminho da página de login */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
export default App;
