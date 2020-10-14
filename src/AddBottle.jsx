import React, { useState } from 'react';
import axios from 'axios';


function AddBottle(props) {
  const [bottle, setBottle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState();
  const [bottleSizes, setBottleSizes] = useState();
  const [amountFull, setAmountFull] = useState(1);
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAmountFull(parseInt(1))
    const fields = {
      bottle,
      category,
      price,
      bottleSizes,
      amountFull,
      notes,
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
    setNotes('');
  };

  const categoryOptions = ['agave - mezcal', 'agave - tequila', 'agave-other', 'brandy - apple', 'brandy - cognac', 'brandy - eau de vie',
    'brandy - other', 'fortified wine', 'gin - botanical', 'gin - dry', 'gin - old tom', 'rhum - agricole', 'rum - jamaican', 'rum - spanish',
    'rum - other', 'liqueur - amaro', 'liqueur - aperitif', 'liqueur - cordial', 'sherry', 'vermouth', 'vodka', 'whiskey - american', 'whisky - japanese',
    'whisky - scotch', 'whiskey - other']

  return (
    <div >
      <h1 className="title-tag">
        <div
          className="big-pops">Pop's </div>
        <br></br>Liquor Cabinet</h1>
      <h1>add a bottle.</h1>
      <h2>Fill out the form below</h2>
      <form className="add-bottle" onSubmit={handleSubmit}>
        <label htmlFor="bottle">spirit </label>
        <br></br>
        <input
          className="textBar"
          type="text"
          placeholder="ex: Nikka Coffee Grain"
          value={bottle}
          onChange={(e) => setBottle(e.target.value)}
        />
        <br></br>
        <label htmlFor="category">category </label>
        <select className="textBar"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginLeft: "0" }}
        >
          <option ></option>
          {categoryOptions.map((option) =>
            <option key={option}>{option}</option>
          )}
        </select>
        <br></br>
        <label htmlFor="price">cost</label>
        <br></br>
        <input
          className="textBar"
          type="text"
          placeholder="ex: 51"
          value={price}
          onChange={(price % 1 < 1) ? (e) => setPrice(parseInt(e.target.value)) : setPrice('')}
        />
        <br></br>
        <label htmlFor="bottleSizes">bottle size (mL) </label>
        <br></br>
        <input
          className="textBar"
          type="text"
          placeholder="ex: 750"
          value={bottleSizes}
          onChange={(bottleSizes % 1 < 1) ? (e) => setBottleSizes(parseInt(e.target.value)) : setBottleSizes('')}
        />
        <br></br>
        <label htmlFor="amountFull">Amount (1 for full bottle) </label>
        <br></br>
        <label htmlFor="status">notes </label>
        <br></br>
        <textarea
          style={{ height: "80px" }}
          placeholder="ex: single grain coffee still"
          className="textBar"
          id="notes"
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <br></br>
        <button type="submit" className="submit">Submit</button>
      </form>

    </div>
  )
}

export default AddBottle;
