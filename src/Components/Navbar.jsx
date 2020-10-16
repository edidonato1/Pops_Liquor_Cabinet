import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  const linkStyles = {
    textDecoration: "none",
    color: "white",
  };

  return (

    <div>
      <div className="nav-bar">
        <NavLink style={linkStyles} className="NavLink" to="/">home</NavLink>
        <NavLink style={linkStyles} className="NavLink" to="/Inventory">inv.</NavLink>
        <NavLink style={linkStyles} className="NavLink" to="/GrabBottle">grab</NavLink>
        <NavLink style={linkStyles} className="NavLink" to="/AddBottle">add</NavLink>
      </div>
    </div>

  )
}

export default Navbar;