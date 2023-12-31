import React, { useContext } from "react";
import Login from './components/Login'
import Register from "./components/Register";
import  Home from './components/Home'
import ReactDOM from "react-dom/client";
import { Authcontext } from "./context/Authcontext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  const {currentuser} = useContext(Authcontext)
  const ProtectedRoute = ({children}) =>{
    if(!currentuser){
      return <Navigate to="/login"/>
    }
 
    return children
  }
  return (    
    <BrowserRouter>
      <Routes>
      <Route index element={<ProtectedRoute>
        <Home />
        </ProtectedRoute>} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      </Routes>
      </BrowserRouter>
 
    
  );
}

export default App;
