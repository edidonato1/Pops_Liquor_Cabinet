import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
import "./App.css";


function Inventory(props) {
  const [spirits, setSpirits] = useState([])

  useEffect(() => {

    const getInventory = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setSpirits(response.data.records)
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
      setSpirits(response.data.records)
    };
    getInventory();
  }, [spirits])

  let price = spirits.map((spirit) => (spirit.fields.price))
  let amountFull = spirits.map((spirit) => spirit.fields.amountFull)
  let totalInventory = (price, amountFull) => {
    let total = 0;
    for (let i = 0; i < spirits.length; i++) {
      total += price[i] * amountFull[i]
    }
    return total
  }

  const sortBottle = () => {

    spirits.sort(function (a, b) {
      let textA = a.fields.bottle.toUpperCase();
      let textB = b.fields.bottle.toUpperCase();
      return ((textA < textB) ? -1 : (textA > textB) ? 1 : 0);
    })
    console.log(spirits)
  }
  const sortCategory = () => {
    console.log(spirits)

    spirits.sort(function (a, b) {
      let textA = a.fields.category.toUpperCase();
      let textB = b.fields.category.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    console.log(spirits)
    // setSpirits(spirits)

  }
  const sortAmount = () => {
    console.log(spirits)
    spirits.sort((a, b) => {
      let targetA = a.fields.amountFull;
      let targetB = b.fields.amountFull;
      return targetA - targetB
    })
    console.log(spirits)
  }
  const sortPrice = () => {
    spirits.sort((a, b) => {
      let targetA = a.fields.price;
      let targetB = b.fields.price;
      return targetA - targetB

    })
    console.log(spirits)

  }


  // sort((a, b) => a - b)



  const columnStyles = {
    fontFamily: "avenir",
    width: "90vw",
    borderCollapse: 'collapse',
    background: "rgba(211, 211, 211, 0.5)",
    marginLeft: "20px",
    fontSize: "14px",

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
        <h2>Total inventory: <span id="total-inventory">${Math.round(totalInventory(price, amountFull))}</span></h2>
        <div className="inventory-table">

          <table style={columnStyles}>
            <tbody style={columnStyles}>
              <tr style={titleStyles}>
                <td onClick={sortBottle}>Spirit</td>
                <td onClick={sortCategory}>Category</td>
                <td onClick={sortPrice}>Price</td>
                <td onClick={sortAmount}>Amt.</td>
              </tr>

              {!spirits ? <h4>loading...</h4> : spirits.map((spirit) => (

                <tr>
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