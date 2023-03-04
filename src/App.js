/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Navbaar from './components/navbaar'; 
import Home from './components/home.jsx';
import Alluser from './components/Alluser.jsx';
import Register from './components/register.jsx';
import Edit from './components/edituser.jsx';
import Detail from './components/details.jsx';
import ContextProvider from './context/ContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
 } from "react-router-dom";
 

function App() {
  return (
    <ContextProvider>
    <Router>
    <Navbaar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Alluser/>}/>
      <Route path='/Add' element={<Register/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/view/:id' element={<Detail/>}/>
      </Routes>
    </Router>
    </ContextProvider>
  );
}

export default App;
