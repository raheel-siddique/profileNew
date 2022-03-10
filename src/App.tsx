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
import AboutMy from './components/pages/AboutMy';
import SkillsMy from './components/pages/SkillsMy';
import ContactMy from './components/pages/ContactMy';
import HomeMy from './components/pages/HomeMy';


function App() {
  return (
    <div className="App">
         <Routes>
         <Route path="/" element={<Router />} />
         <Route path="/about" element={<AboutMy />} />
         <Route path='/services' element={<SkillsMy />} />
         <Route path='/contact' element={<ContactMy />} />
         <Route path='/home' element={< HomeMy/>} />



         


          
        </Routes>
      
    </div>
  );
}

export default App;
