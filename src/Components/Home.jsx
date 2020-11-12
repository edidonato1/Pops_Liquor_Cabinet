import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';




function Home() {

  return (

    <div className="main-component-div">
      <Header title="welcome home" />
      <div className="link-box">
        <Link style={{ textDecoration: "none" }} to="/HomeMenu"><h3 className="menu-link" >start here</h3></Link>
      </div>
    </div >

  )

}

export default Home