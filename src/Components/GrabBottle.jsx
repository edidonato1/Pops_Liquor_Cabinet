import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import UpdateBottle from './UpdateBottle'

function GrabBottle(props) {
  const [data, setData] = useState([]);
  const [selection, setSelection] = useState('');
  const [updatedBottle, setUpdatedBottle] = useState(false);
  const [removeMargin, setRemoveMargin] = useState(false)
  const [heading, setHeading] = useState()

  const handler = () => {
    if (window.innerWidth <= 500) {
      setHeading(<h2 className="page-title-mobile">grab a bottle.</h2>);
      setRemoveMargin(true);
    } else {      
      setHeading(<Header title="grab a bottle." />)
      setRemoveMargin(false);
     }
  }

  useEffect(() => {
    handler("grab a bottle");
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler)
  }, [])

  useEffect(() => {
    const getInventory = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setData(response.data.records.sort((a, b) => {
        let textA = a.fields.bottle.toUpperCase();
        let textB = b.fields.bottle.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }));
    };
    getInventory();
  }, [selection, updatedBottle]);

  const handleChange = (e) => {
    e.preventDefault();
    setSelection(e.target.value);
  };

  let bottleData = (data[selection] && data[selection].fields);
  let id = (data[selection] && data[selection].id);

  return (

    <div className="main-component-div" >
      {heading}
      <div style={removeMargin ? {} : { marginTop: "210px" }} className="select-bottle">
        <select className="text-bar" id="select" onChange={handleChange}>
          <option>select a bottle</option>{
            data.map((item, idx) =>
              <option key={item.id} value={idx}>{item.fields.bottle}</option>
            )}
        </select>
      </div>
      <UpdateBottle id={id}
        bottleData={bottleData}
        updatedBottle={updatedBottle}
        setUpdatedBottle={setUpdatedBottle}
        inventoryRefresh={props.inventoryRefresh}
        setInventoryRefresh={props.setInventoryRefresh}
      />

    </div>
  )
}

export default GrabBottle;



// inventory -- getter