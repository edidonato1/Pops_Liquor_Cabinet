import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';


function AddBottle(props) {
  const [bottle, setBottle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState();
  const [bottleSizes, setBottleSizes] = useState();
  const [amountFull, setAmountFull] = useState(1);
  const [notes, setNotes] = useState('');
  const [removeMargin, setRemoveMargin] = useState(false)
  const [heading, setHeading] = useState()

  const handler = () => {
    if (window.innerWidth <= 500) {
      setHeading(<h2 className="page-title-mobile">add a bottle.</h2>);
      setRemoveMargin(true);
    } else {      
      setHeading(<Header title="add a bottle." />);
      setRemoveMargin(false);
     }
  }

  useEffect(() => {
    handler("grab a bottle");
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAmountFull(parseInt(1));
    const fields = {
      bottle,
      category,
      price,
      bottleSizes,
      amountFull,
      notes,
    };

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

  const categoryOptions = ['agave - mezcal', 'agave - tequila', 'agave - other', 'brandy - apple', 'brandy - cognac', 'brandy - eau de vie',
    'brandy - other', 'fortified wine', 'gin - botanical', 'gin - dry', 'gin - old tom', 'rhum - agricole', 'rum - jamaican', 'rum - spanish',
    'rum - other', 'liqueur - amaro', 'liqueur - aperitif', 'liqueur - cordial', 'sherry', 'vermouth', 'vodka', 'whiskey - american', 'whisky - japanese',
    'whisky - scotch', 'whiskey - other'];

  return (
    <div className="main-component-div" >
      {heading}
      <h3 style={removeMargin ? {marginTop: "100px"}  : {marginTop: "180px"}}>Fill out the form below</h3>
      <form className="add-bottle" onSubmit={handleSubmit}>
        <div className="form-block-top-container">
          <div className="form-block">
            <div>
              <label htmlFor="bottle">spirit </label>
              <br></br>
              <input
                className="text-bar"
                type="text"
                placeholder='ex: "Nikka Coffey Grain"'
                value={bottle}
                onChange={(e) => setBottle(e.target.value)}
                required
              />
            </div>
            <br></br>
            <div>
              <label htmlFor="category">category </label><br></br>
              <select className="text-bar"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ marginLeft: "0" }}
              >
                <option ></option>
                {categoryOptions.map((option) =>
                  <option key={option}>{option}</option>
                )}
              </select>
            </div>
          </div>
          <br></br>
          <div className="form-block" >
            <div>
              <label htmlFor="price">cost</label>
              <br></br>
              <input
                className="text-bar"
                type="text"
                value={price}
                onChange={(price % 1 < 1) ? (e) => setPrice(parseInt(e.target.value)) : setPrice('')}
                required
              />
            </div>
            <br></br>
            <div>

              <label htmlFor="bottleSizes">bottle size (mL) </label>
              <br></br>
              <select
                className="text-bar"
                type="text"
                placeholder='ex: "750"'
                value={bottleSizes}
                onChange={(e) => setBottleSizes(parseInt(e.target.value))}
                required
              >
                <option></option>
                <option value="1750">1.75L</option>
                <option value="1000">1L</option>
                <option value="750">750mL</option>
                <option value="500">500mL</option>
                <option value="375">375mL</option>
                <option value="187">187mL</option>
              </select>
              <br></br>
            </div>
          </div>
        </div>
        <br></br>
        <div className="form-block-bottom">
          <div id="notes-form">
            <label htmlFor="notes">notes </label>
            <br></br>
            <input
              style={{ height: "80px" }}
              placeholder='ex: "single grain coffey still"'
              className="text-bar"
              id="notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <br></br>
          <button type="submit" className="submit">Submit</button>
        </div>
      </form>

    </div>
  )
}

export default AddBottle;
