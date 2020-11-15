import React from 'react';
import { Link } from 'react-router-dom';

function GrabLink() {

  const LinkStyles = {
    textDecoration: "none",
    color: "white",
  };

  return (

    <div className="scroll-menu">
      <h5 className="scroll-title"><Link style={LinkStyles} to="/GrabBottle">grab a bottle</Link></h5>
      <p>The digital experience of pouring yourself a dram.</p>
      <p>Have a drink? Mark it down.</p>
      <p>No judgment <Link className="scroll-link" to="/GrabBottle">here</Link>.</p>
    </div>

  )
}

export default GrabLink;