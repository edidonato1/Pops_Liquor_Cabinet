import React, { useState } from 'react';
import axios from 'axios'

function UpdateBottle(props) {
  const [amountFull, setAmountFull] = useState(props.bottleData && props.bottleData.amountFull)

  const handleClick = async () => {
    const id = props.id;
    const fields = {
      amountFull: parseInt(amountFull)
    }

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits/${id}`;
    await axios.patch(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      })
  }

  const increment = (e) => {
    e.preventDefault();
    setAmountFull(amountFull + .01)
    handleClick();
  }
  const decrement = (e) => {
    e.preventDefault();
    setAmountFull(amountFull - .01)
    handleClick();
  }

  return (
    <div>
      {props.bottleData ? <h2>{props.bottleData && props.bottleData.bottle}</h2> : null}
      {props.bottleData ? <h3> Category: {props.bottleData && props.bottleData.category}</h3> : null}
      {props.bottleData ? <h3>{(props.bottleData && props.bottleData.amountFull) * 100}% full </h3> : null}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}


export default UpdateBottle