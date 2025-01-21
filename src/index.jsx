import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Correct import for React Router v7
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './page/Home';
import Pokemon from './components/Pokemon';
import Dashboard from './layout/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Define Dashboard as the layout */}
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />   {/* Home Page */}
        <Route path=":pokemon" element={<Pokemon />} />  {/* Pokemon Page */}
      </Route>
    </Routes>
  </BrowserRouter>
);

// For performance measurement
reportWebVitals();