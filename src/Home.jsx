import React from 'react'
import HomeMenu from './HomeMenu'




function Home() {



  const stuff = [<HomeMenu />, <HomeMenu />, <HomeMenu />, <HomeMenu />, <HomeMenu />, <HomeMenu />, <HomeMenu />, <HomeMenu />, <HomeMenu />,]

  return (
    <div >
      <h1 className="title-tag">
        <div
          className="big-pops">Pop's </div>
        <br></br>Liquor Cabinet</h1>
      <h1>welcome home.</h1>

      <div className="scroll">
        {stuff.map(thingy => <div>{thingy}</div>)}
      </div>

    </div>
  )

}

export default Home