import React from 'react';
import axios from 'axios'

function UpdateBottle(props) {

  const handleClick = async (newAmount) => {
    const fields = {
      amountFull: newAmount
    }
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits/${props.id}`;
    await axios.patch(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      })
    props.setUpdatedBottle(!props.updatedBottle)
  }
  const increment = () => {
    handleClick(props.bottleData.amountFull + .1)
  }
  const decrement = () => {
    handleClick(props.bottleData.amountFull - .1)
  }
  return (
    <div>
      {props.bottleData ?
        <div className="update-bottle">
          <h3>{props.bottleData && props.bottleData.bottle}</h3>
          <h3> Category: {props.bottleData && props.bottleData.category}</h3>
          <h3>{props.bottleData && props.bottleData.bottleSizes} mL</h3>
          <span className="counter-container">
            <div className="button-box">
              <button className="plus-minus" onClick={increment}>+</button><br></br>
              <button className="plus-minus" onClick={decrement}>-</button>
            </div>
            <h3><span className="percentage">{Math.round((props.bottleData && props.bottleData.amountFull) * 100)}</span> % full </h3>
          </span>
        </div>
        : null}
    </div>
  )
}


export default UpdateBottle