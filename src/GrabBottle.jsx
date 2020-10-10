import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import UpdateBottle from './UpdateBottle'

function GrabBottle(props) {
  const [data, setData] = useState([])
  const [selection, setSelection] = useState('')


  useEffect(() => {

    const getInventory = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setData(response.data.records)

    };
    getInventory();

  }, [])

  useEffect(() => {

    const getInventory = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setData(response.data.records)

    };
    getInventory();

  }, [selection, data])

  const handleChange = (e) => {
    e.preventDefault();
    setSelection(e.target.value)
  }

  let bottleData = (data[selection] && data[selection].fields)
  let id = (data[selection] && data[selection].id)

  // alphabetical sorting function from StackOverflow.com
  data.sort(function (a, b) {
    let textA = a.fields.bottle.toUpperCase();
    let textB = b.fields.bottle.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })

  return (
    <div>
      <Route path="/GrabBottle">
        <h1>Grab a Bottle</h1>
        <select onChange={handleChange}>
          <option>select a bottle</option>{
            data.map((item, idx) =>
              <option key={item.id} value={idx}>{item.fields.bottle}</option>
            )}
        </select>
        {selection ?
          <UpdateBottle id={id} bottleData={bottleData} />
          :
          null}
      </Route>
    </div>
  )
}

export default GrabBottle;



