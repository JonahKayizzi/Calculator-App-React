import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './pages/Navbar';
import Welcome from './pages/Welcome';
import Quote from './pages/Quote';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/calculator" element={<Calculator />} />
      <Route exact path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
