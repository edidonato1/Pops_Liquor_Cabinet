import React, { useState, useEffect } from 'react';
import axios from 'axios'

function UpdateBottle(props) {

  // console.log(props.searchHistory)
  const [amountFull, setAmountFull] = useState(props.bottleData && props.bottleData.amountFull)

  useEffect(() => {
    const handleClick = async () => {

      const id = props.id;
      const fields = {
        amountFull,
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
    handleClick();
    if (props.searchHistory) {
      if (props.searchHistory[0] !== props.searchHistory[1]) {
        setAmountFull(props.bottleData && props.bottleData.amountFull)
      } else setAmountFull(amountFull)
    }

  }, [amountFull, props.id])

  const increment = (e) => {
    e.preventDefault()
    setAmountFull(amountFull + .1)
    console.log(props.searchHistory)

  }
  const decrement = (e) => {
    e.preventDefault()
    setAmountFull(amountFull - .1)
    console.log(props.searchHistory)
  }



  return (
    <div>
      {props.bottleData ?
        <div>
          <h2>{props.bottleData && props.bottleData.bottle}</h2>
          <h3> Category: {props.bottleData && props.bottleData.category}</h3>
          <h3>{(props.bottleData && props.bottleData.amountFull) * 100}% full </h3>
        </div>
        : null}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}


export default UpdateBottle