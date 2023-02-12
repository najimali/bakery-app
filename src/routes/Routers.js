import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import Cakes from '../pages/Cakes';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const Routers = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Navigate to = { <Home />} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cakes" element={<Cakes />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default Routers;