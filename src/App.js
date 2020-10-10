import React from 'react';
import Inventory from './Inventory';
import Navbar from './Navbar';
import GrabBottle from './GrabBottle';
import AddBottle from './AddBottle';


import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Pop's Liquor Cabinet</h1>
      <Navbar />
      <Inventory />
      <GrabBottle />
      <AddBottle />
    </div>
  );
}

export default App;
