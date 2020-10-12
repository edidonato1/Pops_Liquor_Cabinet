import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios'

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return state + .05;
//     case "decrement":
//       return state - .05;
//     default:
//       return state;
//   }
// }



function UpdateBottle(props) {
  // const [amountFull, dispatch] = useReducer(reducer, props.bottleData && props.bottleData.amountFull)
  // console.log(props.searchHistory)
  const [amountFull, setAmountFull] = useState(props.bottleData && props.bottleData.amountFull)
  const [updateHistory, setUpdateHistory] = useState([])


  useEffect(() => {
    const handleClick = async () => {
      const fields = {
        amountFull,
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
    }
    handleClick();
    // if (props.searchHistory) {
    //   if (props.searchHistory[0] !== props.searchHistory[1] && updateHistory[0] !== updateHistory[1]) {
    //     setAmountFull(props.bottleData && props.bottleData.amountFull)
    //   } else if (props.searchHistory[0] !== props.searchHistory[1] && updateHistory[0] === updateHistory[1]) {
    //     setAmountFull(props.bottleData && props.bottleData.amountFull)
    //   }
    // } else if (!props.searchHistory) {
    //   setAmountFull(props.bottleData && props.bottleData.amountFull)
    // }
    // setAmountFull(props.bottleData.amountFull)

  }, [amountFull, props.id])

  const increment = (e) => {
    e.preventDefault()
    setAmountFull(amountFull + .1)
    setUpdateHistory([props.searchHistory[0], ...updateHistory])
    console.log("searchHistory", props.searchHistory)
    console.log("updateHistory", updateHistory)
    console.log("+", amountFull)
  }
  const decrement = (e) => {
    e.preventDefault()
    setAmountFull(amountFull - .1)
    setUpdateHistory([props.searchHistory[0], ...updateHistory])
    console.log("searchHistory", props.searchHistory)
    console.log("updateHistory", updateHistory)
    console.log("-", amountFull)
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


      {/* buttons for useReducer function  */}

      {/* <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
       */}
    </div>
  )
}


export default UpdateBottle