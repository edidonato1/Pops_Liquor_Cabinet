import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios'

function UpdateBottle(props) {


  return (
    <div>
      <h3> {props.bottle}</h3>
    </div>
  )
}