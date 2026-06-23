import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/Landing-page";
import Dashboard from "./components/dashboard"; 

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;