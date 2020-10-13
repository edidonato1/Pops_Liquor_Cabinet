
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import GrabBottle from './GrabBottle';
import Inventory from './Inventory';
import AddBottle from './AddBottle';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  const [inventoryRefresh, setInventoryRefresh] = useState(false)

  return (

    <div className="App" className="main-div">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Inventory">
        <Inventory
          inventoryRefresh={inventoryRefresh}
          setInventoryRefresh={setInventoryRefresh}
        />
      </Route>
      <Route path="/GrabBottle">
        <GrabBottle
          inventoryRefresh={inventoryRefresh}
          setInventoryRefresh={setInventoryRefresh}
        />
      </Route>
      <Route path="/AddBottle">
        <AddBottle />
      </Route>
    </div>
  );
}

export default App;
