import React from 'react';
import { Link } from 'react-router-dom';

function GrabLink() {

  return (

    <div className="scroll-menu">
      <h5 className="scroll-title"><Link className="scroll-title-link" to="/GrabBottle">grab a bottle</Link></h5>
      <p>The digital experience of pouring yourself a dram.</p>
      <p>Have a drink? Mark it down.</p>
      <p>No judgment <Link className="scroll-link" to="/GrabBottle">here</Link>.</p>
    </div>

  );
};

export default GrabLink;