import React from 'react';

import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';



import {
  Routes,

  Route,
 
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
