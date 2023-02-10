import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Cakes from '../pages/Cakes';
import Home from '../pages/Home';
import Footer from '../components/Footer/Footer';

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/cakes" element={<Cakes />} />
      <Route path="/contact-us" element={<Footer />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default Routers;