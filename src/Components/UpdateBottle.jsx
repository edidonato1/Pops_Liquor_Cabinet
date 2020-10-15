import React, { useState } from 'react';
import axios from 'axios'

function UpdateBottle(props) {
  const [showNotes, setShowNotes] = useState(false)
  const [addNote, setAddNote] = useState()


  // Toggle showNotes, setShowNotes 
  // If showNotes = true, display the form, if false, hide the form
  // Piggyback notes into handleClick function
  // Pass notes as an argument, and trigger the function with a submit button 
  // in the form. Form has a "back" button that toggles setShowNotes to false 
  // and hides the form.
  // In larger media queries, notes will display beside the bottle info/ increment buttons
  //  - Display: none for mobile.


  const handleClick = async (newAmount, newNote) => {

    const fields = {
      amountFull: newAmount,
      notes: newNote
    }
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits/${props.id}`;
    await axios.patch(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      })
    props.setUpdatedBottle(!props.updatedBottle)
  }



  const increment = () => {
    if (props.bottleData.amountFull < 1) {
      handleClick((props.bottleData.amountFull + .1), addNote)
      props.setInventoryRefresh(!props.inventoryRefresh)
    }
  }

  const decrement = () => {
    handleClick((props.bottleData.amountFull - .1), addNote)
    props.setInventoryRefresh(!props.inventoryRefresh)
    props.bottleData.amountFull <= .2 ?
      setTimeout(function () {
        window.confirm('Remove empty bottle from inventory?') ?
          handleDelete() :
          alert("OK, we'll keep it in there for you");
      }, 800) :
      props.setInventoryRefresh(!props.inventoryRefresh)

  }

  const handleDelete = async () => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits/${props.id}`;
    await axios.delete(
      airtableURL,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      })
    props.setUpdatedBottle(!props.updatedBottle)
  }

  return (
    <div>
      {props.bottleData ?
        <div className="update-bottle">
          <h3 className="grab-bottle-spirit">{props.bottleData && props.bottleData.bottle}</h3>
          {/* <h3>{props.bottleData && props.bottleData.notes}</h3> */}
          <h3>{props.bottleData && props.bottleData.category}</h3>
          <h3>{props.bottleData && props.bottleData.bottleSizes} mL</h3>
          <button onClick={(() => setShowNotes(true))}>add tasting notes</button>
          <span className="counter-container">
            <div className="button-box">
              <button className="plus-minus" onClick={increment}>+</button><br></br>
              <button className="plus-minus" onClick={decrement}>-</button>
            </div>
            <div className="percentage">{Math.round((props.bottleData && props.bottleData.amountFull) * 100)}</div><h3 style={{ marginLeft: "15px" }}> % full </h3>
          </span>
          {showNotes === true ?
            <div className="tasting-notes">
              <button onClick={(() => setShowNotes(false))}>hide</button>
              <form className="update-tasting-notes" onSubmit={handleClick(props.bottleData && props.bottleData.amountFull, addNote)}>
                <label htmlFor="notes"></label>
                <input type="text-area" value={addNote} onChange={((e) => setAddNote((e.target.value)))} />
                <button type="submit">add note</button>
              </form>
            </div>
            : null
          }
        </div>

        : null}
    </div>
  )
}


export default UpdateBottle