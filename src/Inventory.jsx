import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import "./App.css";

function Inventory(props) {
  const spirits = props.spirits

  const price = spirits.map((spirit) => (spirit.fields.price))
  const amountFull = spirits.map((spirit) => spirit.fields.amountFull)
  const totalInventory = (price, amountFull) => {
    let total = 0;
    for (let i = 0; i < props.spirits.length; i++) {
      total += price[i] * amountFull[i]
    }
    return total
  }

  const columnStyles = {
    fontFamily: "avenir",
    width: "90vw",
    borderCollapse: 'collapse',
    marginLeft: "20px"

  }

  const titleStyles = {
    fontWeight: "bold",
    borderBotton: "1px solid black",
    paddingRight: "10px"
  }

  return (
    <div>
      <Route path="/Inventory">
        <h1>Inventory</h1>
        <h2>Total inventory: ${totalInventory(price, amountFull)}</h2>
        <div>
          <table style={columnStyles}>
            <tr style={titleStyles}>
              <td >Spirit</td>
              <td>Category</td>
              <td>Price</td>
              <td>Amount</td>
            </tr>
            {!spirits ? <h4>loading...</h4> : spirits.map((spirit) => (
              <tr >
                <td>
                  {spirit.fields.bottle}
                </td>
                <td>
                  {spirit.fields.category}
                </td>
                <td>
                  {spirit.fields.price}
                </td>
                <td>
                  {(spirit.fields.amountFull) * 100}%
                  </td>
              </tr>
            ))}
          </table>
        </div>
      </Route>
    </div>
  )

}

export default Inventory; 