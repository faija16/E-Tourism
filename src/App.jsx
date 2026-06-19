import React from 'react';
import Data from './Data/Data';
import Navbar from './Components/Navbar';
import { AuthProvider } from './Context/Authcontext';

import {  Routes, Route } from "react-router-dom";
import Login from './Database/Login';
import Placedetails from './Data/Placedetails';
import Signup from './Database/Signup';

export default function App() {
  return (
    <AuthProvider>
    

        <Navbar />

        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Data />} />
          <Route path="/place/:id" element={<Placedetails/>} />
        </Routes>

        <h1>E-Tourism</h1>

      
    </AuthProvider>
  );
}