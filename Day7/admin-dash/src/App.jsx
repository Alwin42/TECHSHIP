import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AppRoutes from './Approute'; 
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/theme';

function App() {
  return (
   
    <ThemeProvider>
      <Navbar />
      <div className="main-content">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;