import React from "react";
import Login from './components/Login'
import Register from "./components/Register";
import  Home from './components/Home'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (    
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      </Routes>
      </BrowserRouter>
 
    
  );
}

export default App;
