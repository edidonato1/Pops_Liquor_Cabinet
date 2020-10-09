import React from 'react';
import { Link, Route } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1> navigate me baby</h1>
      <Link to="/Inventory">Inv.</Link>
    </div>
  )
}

export default Navbar;