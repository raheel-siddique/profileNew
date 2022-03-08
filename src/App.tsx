import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Home />
       <About />
    </div>
  );
}

export default App;
