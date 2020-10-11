import React, { useState, useEffect } from 'react';
import Inventory from './Inventory';
import Navbar from './Navbar';
import GrabBottle from './GrabBottle';
import AddBottle from './AddBottle';
import axios from 'axios'


import './App.css';

function App() {

  const [spirits, setSpirits] = useState([])

  useEffect(() => {

    const getInventory = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setSpirits(response.data.records)
    };
    getInventory();
  }, [])


  return (
    <div className="App">
      <h1>Pop's Liquor Cabinet</h1>
      <Navbar />
      <Inventory spirits={spirits} />
      <GrabBottle />
      <AddBottle />
    </div>
  );
}

export default App;
