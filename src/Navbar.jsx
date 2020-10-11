import React from 'react';
import { Link } from 'react-router-dom';
// import homeIcon from './homeIcon.png'

function Navbar() {
  return (
    <div>
      <div className="nav-bar">
        <Link className="home" to="/">home</Link>
        <Link to="/Inventory">  inv.  </Link>
        <Link to="/GrabBottle">grab</Link>
        <Link to="/AddBottle">add</Link>
      </div>

    </div>
  )
}

export default Navbar;