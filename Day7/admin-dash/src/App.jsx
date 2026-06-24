import { useState } from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
