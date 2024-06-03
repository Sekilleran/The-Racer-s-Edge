import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
            <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App
