import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import Logout from "./pages/Logout";

const App = () => {
  return <div>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/main' element={
        <UserProtectedWrapper>
        <Main/>
        </UserProtectedWrapper>
        } />
      <Route path='/user/logout' element={<Logout />} />
      
    </Routes>
    </div>;
};

export default App;