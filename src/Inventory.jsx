import React from 'react';
import { Route } from 'react-router-dom';
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
    marginLeft: "20px",

  }

  const titleStyles = {
    fontWeight: "bold",
    borderBotton: "1px solid black",
    paddingRight: "10px"
  }

  const sortBottle = () => {
    spirits.sort(function (a, b) {
      let textA = a.fields.bottle.toUpperCase();
      let textB = b.fields.bottle.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })

  }



  return (
    <div>
      <Route path="/Inventory">
        <h1>Inventory</h1>
        <h2>Total inventory: ${Math.round(totalInventory(price, amountFull))}</h2>
        <div className="inventory-table">

          <table style={columnStyles}>
            <tbody style={columnStyles}>
              <tr style={titleStyles}>
                <td onClick={sortBottle}>Spirit</td>
                <td>Category</td>
                <td>Price</td>
                <td>Amt.</td>
              </tr>
              {!spirits ? <h4>loading...</h4> : spirits.map((spirit) => (
                <tr >
                  <td key={spirit.fields.bottle}>
                    {spirit.fields.bottle}
                  </td>
                  <td key={spirit.fields.category}>
                    {spirit.fields.category}
                  </td>
                  <td key={spirit.fields.price}>
                    ${spirit.fields.price}
                  </td>
                  <td key={spirit.fields.amountFull}>
                    {Math.round((spirit.fields.amountFull) * 100)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Route>
    </div>
  )

}

export default Inventory; 