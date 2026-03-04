import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { theme } from "./theme";
import Register from "./pages/register/Page"
import Login from "./pages/login/Page"
import Home from "./pages/home/Page";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;