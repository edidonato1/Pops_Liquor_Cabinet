import React from 'react';
import Bottle from '../assets/whiskey-bottle.svg';


export default function Header(props) {

  return (
    <div className="title-tag">
      <img id="bottle-logo" src={Bottle} alt="bottle logo" />
      <div id="pops-container">
        <h1 id="big-pops"> Pop's </h1>
        <h1 id="secondary-title">Liquor Cabinet</h1>
      </div>
      <h2 className="page-title">{props.title}</h2>
    </div>
  );
};