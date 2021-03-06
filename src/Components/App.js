
import React, { useState } from 'react';
import Navbar from './Navbar';
import HomeMenu from './HomeMenu';
import Home from './Home'
import GrabBottle from './GrabBottle';
import Inventory from './Inventory';
import AddBottle from './AddBottle';
import { Route } from 'react-router-dom';
import './css/App.css';
import './css/Tablet.css';
import './css/Web.css';

function App() {
  const [inventoryRefresh, setInventoryRefresh] = useState(false);

  return (

    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/HomeMenu">
        <HomeMenu />
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
};

export default App;
