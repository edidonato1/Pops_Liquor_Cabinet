import React from 'react'
import { Link } from 'react-router-dom';




function Home() {


  return (
    <div >
      <h1 className="title-tag">
        <div
          className="big-pops">Pop's </div>
        <br></br>Liquor Cabinet</h1>
      <h1>welcome home.</h1>
      <div >
        <Link style={{ textDecoration: "none" }} to="/HomeMenu"><h3 className="menu-link" >start here</h3></Link>
      </div>
    </div >
  )

}

export default Home