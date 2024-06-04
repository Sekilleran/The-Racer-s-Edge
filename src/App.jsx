import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import Sport from './pages/Sport/Sport';
import Racing from './pages/Racing/Racing';
import Street from './pages/Street/Street';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/street" element={<Street/>}/>
            <Route path="/racing" element={<Racing/>}/>
            <Route path="/sport" element={<Sport/>}/>
      </Routes>
    </>
  );
}

export default App
