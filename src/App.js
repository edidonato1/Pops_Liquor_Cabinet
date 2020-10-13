import React, { useState } from 'react';
import Inventory from './Inventory';
import Navbar from './Navbar';
import GrabBottle from './GrabBottle';
import AddBottle from './AddBottle';
import './App.css';
import { Route } from 'react-router-dom';


function App() {
  const [inventoryRefresh, setInventoryRefresh] = useState(false)

  return (
    <div className="App">
      <h1 className="title-tag">Pop's Liquor Cabinet</h1>
      <h1>fhdjkaslfd</h1>
      <Navbar />

      <Inventory
        inventoryRefresh={inventoryRefresh}
        setInventoryRefresh={setInventoryRefresh} />

      <GrabBottle
        inventoryRefresh={inventoryRefresh}
        setInventoryRefresh={setInventoryRefresh}
      />
      <AddBottle />
    </div>
  );
}

export default App;
