import React, { useState, useEffect } from 'react';
import axios from 'axios'


function Inventory(props) {
  const [spirits, setSpirits] = useState([])
  const [changeSort, setChangeSort] = useState(false)
  const [featureSpirits, setFeatureSpirits] = useState({})
  const [featureCategory, setFeatureCategory] = useState({})
  const [featurePrice, setFeaturePrice] = useState({})
  const [featureAmount, setFeatureAmount] = useState({})

  useEffect(() => {

    const getInventory = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setSpirits(response.data.records);
    };
    getInventory();
  }, [props.inventoryRefresh]);

  let price = spirits.map((spirit) => (spirit.fields.price));
  let amountFull = spirits.map((spirit) => spirit.fields.amountFull);
  let totalInventory = (price, amountFull) => {
    let total = 0;
    for (let i = 0; i < spirits.length; i++) {
      total += price[i] * amountFull[i]
    }
    return total
  };

  const sortBottle = () => {
    spirits.sort((a, b) => {
      let textA = a.fields.bottle.toUpperCase();
      let textB = b.fields.bottle.toUpperCase();
      return ((textA < textB) ? -1 : (textA > textB) ? 1 : 0);
    })
    setChangeSort(!changeSort);
    setFeatureSpirits({ background: "rgba(255, 255, 255, 0.3)" });
    setFeatureCategory({});
    setFeaturePrice({});
    setFeatureAmount({});
  };

  const sortCategory = () => {
    spirits.sort((a, b) => {
      let textA = a.fields.category.toUpperCase();
      let textB = b.fields.category.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    setChangeSort(!changeSort)
    setFeatureCategory({ background: "rgba(255, 255, 255, 0.3)" });
    setFeatureSpirits({});
    setFeaturePrice({});
    setFeatureAmount({});
  };

  const sortAmount = () => {
    spirits.sort((a, b) => {
      let targetA = a.fields.amountFull;
      let targetB = b.fields.amountFull;
      return targetA - targetB;
    });
    setChangeSort(!changeSort);
    setFeatureAmount({ background: "rgba(255, 255, 255, 0.3)" });
    setFeatureCategory({});
    setFeaturePrice({});
    setFeatureSpirits({});
  }

  const sortPrice = () => {
    spirits.sort((a, b) => {
      let targetA = a.fields.price;
      let targetB = b.fields.price;
      return targetA - targetB;
    });
    setChangeSort(!changeSort);
    setFeaturePrice({ background: "rgba(255, 255, 255, 0.3)" });
    setFeatureCategory({});
    setFeatureSpirits({});
    setFeatureAmount({});
  }

  const resetStyles = () => {
    setFeatureSpirits({});
    setFeatureCategory({});
    setFeaturePrice({});
    setFeatureAmount({});
  }

  return (

    <div >
      <h1 className="title-tag">
        <div className="big-pops" >Pop's </div>
        <br></br>Liquor Cabinet</h1>
      <h1 >inventory.</h1>
      <h2>Total inventory: <span onClick={resetStyles} id="total-inventory">${Math.round(totalInventory(price, amountFull))}</span></h2>
      <div className="inventory-table">
        <table className="inventory-columns">
          <tbody >
            <tr className="inventory-titles">
              <td key={"bottle"} style={featureSpirits} className="title-cell" onClick={sortBottle}>Spirit</td>
              <td key={"category"} style={featureCategory} className="title-cell" onClick={sortCategory}>Category</td>
              <td key={"price"} style={featurePrice} className="title-cell" onClick={sortPrice}>Price</td>
              <td key={"amount"} style={featureAmount} className="title-cell" onClick={sortAmount}>Amt.</td>
            </tr>
            {!spirits ? <h4>loading...</h4> : spirits.map((spirit, index) => (
              <tr key={index}>
                <td style={featureSpirits} className="content-cell" key={spirit.id}>
                  {spirit.fields.bottle}
                </td>
                <td style={featureCategory} className="content-cell" key={spirit.fields.category}>
                  {spirit.fields.category}
                </td>
                <td style={featurePrice} className="content-cell" key={spirit.fields.price}>
                  ${spirit.fields.price}
                </td>
                <td style={featureAmount} className="content-cell" key={spirit.fields.amountFull}>
                  {Math.round((spirit.fields.amountFull) * 100)}%
                    </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Inventory; 