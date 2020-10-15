import React from 'react'
import AboutPage from './AboutPage'
import AddLink from './AddLink'
import GrabLink from './GrabLink'
import InvLink from './InvLink'




function HomeMenu() {





  return (
    <div >
      <h1 className="title-tag">
        <div
          className="big-pops">Pop's </div>
        <br></br>Liquor Cabinet</h1>
      <h1>menu.</h1>
      <div className="scroll">
        <div key="about"><AboutPage /></div>
        <div key="add"><AddLink /></div>
        <div key="grab"><GrabLink /></div>
        <div key="inv"><InvLink /></div>
      </div>
    </div>
  )

}

export default HomeMenu