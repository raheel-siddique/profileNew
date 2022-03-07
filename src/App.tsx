import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar />
    </div>
  );
}

export default App;
