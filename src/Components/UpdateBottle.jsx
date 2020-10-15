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
    if (props.bottleData && props.bottleData.amountFull < 1) {
      handleClick(props.bottleData.amountFull + .1)
      props.setInventoryRefresh(!props.inventoryRefresh)
    }
  }
  const decrement = () => {
    handleClick(props.bottleData.amountFull - .1)
    props.setInventoryRefresh(!props.inventoryRefresh)
    props.bottleData.amountFull <= .2 ?
      setTimeout(function () {
        window.confirm('Remove empty bottle from inventory?') ?
          handleDelete() :
          alert("OK, we'll keep it in there for you");
      }, 800) :
      props.setInventoryRefresh(!props.inventoryRefresh)

  }

  const handleDelete = async () => {
    // setDeleted(true)
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits/${props.id}`;
    await axios.delete(
      airtableURL,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      })
    props.setUpdatedBottle(!props.updatedBottle)
  }

  return (
    <div>
      {props.bottleData ?
        <div className="update-bottle">
          <h3 className="grab-bottle-spirit">{props.bottleData && props.bottleData.bottle}</h3>
          <h3>{props.bottleData && props.bottleData.notes}</h3>
          <h3>{props.bottleData && props.bottleData.category}</h3>
          <h3>{props.bottleData && props.bottleData.bottleSizes} mL</h3>
          <span className="counter-container">
            <div className="button-box">
              <button className="plus-minus" onClick={increment}>+</button><br></br>
              <button className="plus-minus" onClick={decrement}>-</button>
            </div>
            <div className="percentage">{Math.round((props.bottleData && props.bottleData.amountFull) * 100)}</div><h3 style={{ marginLeft: "15px" }}> % full </h3>
          </span>
        </div>
        : null}
    </div>
  )
}


export default UpdateBottle