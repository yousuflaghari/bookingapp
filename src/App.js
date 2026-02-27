import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { theme } from "./theme";

import Home from "./pages/home/Page";
import About from "./pages/about/Page";
import Hotels from "./pages/hotels/Page";
import Restaurants from "./pages/restaurants/Page";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/restaurants" element={<Restaurants />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;