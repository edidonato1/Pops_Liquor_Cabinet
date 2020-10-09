import React from 'react';
import { Link, Route } from 'react-router-dom';
import Inventory from './Inventory';
import Navbar from './Navbar';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inventory />
    </div>
  );
}

export default App;
