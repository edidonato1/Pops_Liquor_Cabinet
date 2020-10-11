import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="nav-bar">
        <Link className="home" to="/">  Home  </Link>
        <Link to="/Inventory">  Inv.  </Link>
        <Link to="/GrabBottle">Grab</Link>
        <Link to="/AddBottle">Add</Link>
      </div>

    </div>
  )
}

export default Navbar;