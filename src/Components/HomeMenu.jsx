import React from 'react'
import AboutPage from './AboutPage'
import AddLink from './AddLink'
import GrabLink from './GrabLink'
import InvLink from './InvLink'




function HomeMenu() {



  const menuComponents = [<AboutPage />, <AddLink />, <GrabLink />, <InvLink />,]

  return (
    <div >
      <h1 className="title-tag">
        <div
          className="big-pops">Pop's </div>
        <br></br>Liquor Cabinet</h1>
      <h1>menu.</h1>
      <div className="scroll">
        {menuComponents.map(item => <div>{item}</div>)}
      </div>
    </div>
  )

}

export default HomeMenu