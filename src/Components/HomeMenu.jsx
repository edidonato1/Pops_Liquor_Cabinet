import React from 'react';
import Header from './Header';
import AboutPage from './AboutPage';
import AddLink from './AddLink';
import GrabLink from './GrabLink';
import InvLink from './InvLink';



function HomeMenu() {

  return (

    // horizontal scroll home menu

    <div >
      <Header title="menu." />
      <div className="scroll">
        <div key="about"><AboutPage /></div>
        <div key="add"><AddLink /></div>
        <div key="grab"><GrabLink /></div>
        <div key="inv"><InvLink /></div>
      </div>
    </div>

  );

};

export default HomeMenu;