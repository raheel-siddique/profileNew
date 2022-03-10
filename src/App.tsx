import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

import {
  Routes,

  Route,
  Link
} from "react-router-dom";
import Router from './Router';


function App() {
  return (
    <div className="App">
         <Routes>
         <Route path="/" element={<Router />} />
       


          
        </Routes>
      
    </div>
  );
}

export default App;
