import React from 'react';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PriceCalculatorPage from './PriceCalculatorPage';

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/price-calculator" element={<PriceCalculatorPage/>}>
        </Route>
      </Routes>
  );
}

export default App;
