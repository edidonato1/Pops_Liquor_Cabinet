import React from 'react';
import { Link } from 'react-router-dom';

function InvLink() {

  return (

    <div className="scroll-menu">
      <h5 className="scroll-title"><Link className="scroll-title-link" to="/Inventory">inventory</Link></h5>
      <p>Peek into the liquor cabinet without a flashlight. </p>
      <p>And know which bottles need replacing before it's too late.</p>
      <p>Track it <Link className="scroll-link" to="/Inventory">here</Link>.</p>
    </div>

  )
}

export default InvLink;