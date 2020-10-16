import React from 'react';
import { Link } from 'react-router-dom';

function InvLink() {

  const LinkStyles = {
    textDecoration: "none",
    color: "white",
  };

  return (

    <div className="scroll-menu">
      <h5 className="scroll-title"><Link style={LinkStyles} to="/Inventory">inventory</Link></h5>
      <p>Peek into the liquor cabinet without a flashlight. </p>
      <p>And know what needs replacing before it's too late.</p>
      <p>Track it <Link to="/Inventory">here.</Link></p>
    </div>

  )
}

export default InvLink;