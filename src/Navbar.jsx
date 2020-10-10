import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <span>
        <Link className="home" to="/">  Home  </Link>
        <Link to="/Inventory">  Inv.  </Link>
        <Link to="/GrabBottle">Grab</Link>
        <Link to="/AddBottle">Add</Link>
      </span>

    </div>
  )
}

export default Navbar;