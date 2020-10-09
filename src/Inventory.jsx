import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import "./App.css";

function Inventory(props) {
  const [spirits, setSpirits] = useState([])
  // const [price, setPrice] = useState([])

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

  const price = spirits.map((spirit) => (spirit.fields.price))
  const amountFull = spirits.map((spirit) => spirit.fields.amountFull)
  const totalInventory = (price, amountFull) => {
    let total = 0;
    for (let i = 0; i < spirits.length; i++) {
      total += price[i] * amountFull[i]
    }
    return total
  }

  return (
    <div>
      <Route path="/Inventory">
        <h1>Inventory</h1>
        <h2>
          Total inventory: ${totalInventory(price, amountFull)}
        </h2>
        <div className="spreadsheet">
          <div className="spirits-column">
            <h3>Spirit</h3>
            {spirits.map((spirit) => (
              <p key={spirit.id}>{spirit.fields.bottle}</p>
            ))}
          </div>
          <div className="category-column">
            <h3>Category</h3>
            {spirits.map((spirit) => (
              <p key={spirit.id}>{spirit.fields.category}</p>
            ))}
          </div>
          <div className="price-column">
            <h3>Price</h3>
            {spirits.map((spirit) => (
              <p key={spirit.id}>${spirit.fields.price}</p>
            ))}
          </div>
          {/* <div className="size-column">
          <h3>Bottle Size (mL)</h3>
          {spirits.map((spirit) => (
            <p key={spirit.id}>{spirit.fields.bottleSizes}</p>
          ))}
        </div> */}
          <div className="amount-full-column">
            <h3>Amount</h3>
            {spirits.map((spirit) => (
              <p key={spirit.id}>{(spirit.fields.amountFull) * 100}%</p>
            ))}
          </div>
        </div>
      </Route>
    </div>
  )

}

export default Inventory; 