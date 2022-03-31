import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import App from "./App";
import NavBar from "./components/Navbar";

function Routers() {
  return (
    <>
      <App>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </App>
    </>
  );
}

export default Routers;
