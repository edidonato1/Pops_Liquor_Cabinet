import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios'

function UpdateBottle(props) {
  // const [amountFull, updateAmountFull] = useState()
  // const amountFull = props.bottleData && props.bottleData.amountFull
  // console.log(amountFull)

  // let bottle = props.selection.find()
  // const handleChange = async (e) => {
  //   e.preventDefault();
  //   let id = props.id;
  //   if (id) {

  //   }
  //   const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits`;
  //   await axios.patch(airtableURL,
  //     {},
  //     {
  //     headers: {
  //       Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //     },
  //   })
  // }


  return (
    <div>
      {props.bottleData ? <h2>{props.bottleData && props.bottleData.bottle}</h2> : null}
      {props.bottleData ? <h3> Category: {props.bottleData && props.bottleData.category}</h3> : null}
      {props.bottleData ? <h3>{(props.bottleData && props.bottleData.amountFull) * 100}% full </h3> : null}
    </div>
  )
}


export default UpdateBottle