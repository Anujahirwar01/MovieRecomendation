import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";

const App = () => {
  return <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/main' element={<Main/>} />
      
    </Routes>
    </div>;
};

export default App;