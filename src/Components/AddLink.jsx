import React from 'react';
import { Link } from 'react-router-dom';

function AddLink() {

  const LinkStyles = {
    textDecoration: "none",
    color: "white",
  }

  return (
    <div className="scroll-menu">
      <h5 className="scroll-title"><Link style={LinkStyles} to="/AddBottle">add a bottle</Link></h5>
      <p>The first step to a healthy home bar is knowing your products</p>
      <p>Before it hits the shelf, log it into inventory.</p>
      <p>Get started <Link to="/AddBottle">here.</Link></p>
    </div>

  )
}

export default AddLink;