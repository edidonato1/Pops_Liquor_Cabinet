import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';


function AddBottle(props) {
  const [bottle, setBottle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState();
  const [bottleSizes, setBottleSizes] = useState();
  const [amountFull, setAmountFull] = useState();
  // const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      bottle,
      category,
      price,
      bottleSizes,
      amountFull,
    }

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    setBottle('');
    setCategory('');
    setPrice('');
    setBottleSizes('');
    setAmountFull('');
  };

  return (
    <div>
      <Route path="/AddBottle">
        <h1>Add a Bottle</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="bottle">spirit </label>
          <br></br>
          <input
            className="textBar"
            type="text"
            value={bottle}
            onChange={(e) => setBottle(e.target.value)}
          />
          <br></br>
          <label htmlFor="category">category </label>
          <br></br>
          <input
            className="textBar"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br></br>
          <label htmlFor="price">cost</label>
          <br></br>
          <input
            className="textBar"
            type="text"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
          <br></br>
          <label htmlFor="bottleSizes">bottle size (mL) </label>
          <br></br>
          <input
            className="textBar"
            type="text"
            value={bottleSizes}
            onChange={(e) => setBottleSizes(parseInt(e.target.value))}
          />
          <br></br>
          <label htmlFor="amountFull">Amount (1 for full bottle) </label>
          <br></br>
          <input
            className="textBar"
            type="text"
            value={amountFull}
            onChange={(e) => setAmountFull(parseInt(e.target.value))}
          />
          <br></br>
          {/* <label htmlFor="status">notes </label>
          <br></br>
          <textarea
            className="textBar"
            id="notes"
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <br></br> */}
          <button type="submit">Submit</button>
        </form>
      </Route>
    </div>
  )
}

export default AddBottle;



