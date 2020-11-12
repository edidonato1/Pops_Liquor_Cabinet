import React from 'react';
import Navbar from './Navbar';

export default function Header(props) {

  return (
    <div className="title-tag">
      <div id="pops-container">
        <h1 id="big-pops"> Pop's </h1>
        <h1 id="secondary-title">Liquor Cabinet</h1>
      </div>
      <h2 className="page-title">{props.title}</h2>
    </div>
  )
}