import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios'

function UpdateBottle(props) {

  // let bottle = props.selection.find()

  return (
    <div>
      <h2>{props.bottleData && props.bottleData.bottle}</h2>
      <h3> Category: {props.bottleData && props.bottleData.category}</h3>
    </div>
  )
}


export default UpdateBottle