import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateBottle from './UpdateBottle'

function GrabBottle(props) {
  const [data, setData] = useState([])
  const [selection, setSelection] = useState('')
  const [updatedBottle, setUpdatedBottle] = useState(false)

  // useEffect(() => {
  //   const getInventory = async () => {
  //     const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits`;
  //     const response = await axios.get(airtableURL, {
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //       },
  //     });
  //     setData(response.data.records)
  //   };
  //   getInventory();
  // }, [])

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
  }, [selection, updatedBottle, data])

  const handleChange = (e) => {
    e.preventDefault();
    setSelection(e.target.value)
  }

  let bottleData = (data[selection] && data[selection].fields)
  let id = (data[selection] && data[selection].id)

  // alphabetical sorting function from StackOverflow.com
  data.sort((a, b) => {
    let textA = a.fields.bottle.toUpperCase();
    let textB = b.fields.bottle.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })

  return (
    <div >
      <h1 className="title-tag">
        <div
          className="big-pops"
          style={{ fontSize: "50px" }}>Pop's </div>
        <br></br>Liquor Cabinet</h1>
      <h1>Grab a Bottle</h1>
      <select className="grab-bottle" onChange={handleChange}>
        <option>select a bottle</option>{
          data.map((item, idx) =>
            <option key={item.id} value={idx}>{item.fields.bottle}</option>
          )}
      </select>
      <UpdateBottle id={id}
        bottleData={bottleData}
        updatedBottle={updatedBottle}
        setUpdatedBottle={setUpdatedBottle}
        inventoryRefresh={props.inventoryRefresh}
        setInventoryRefresh={props.setInventoryRefresh} />


    </div>
  )
}

export default GrabBottle;



// inventory -- getter