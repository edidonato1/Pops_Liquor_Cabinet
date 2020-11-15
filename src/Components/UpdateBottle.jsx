import React, { useState } from 'react';
import axios from 'axios'

function UpdateBottle(props) {
  const [showNotes, setShowNotes] = useState(false)
  const [addNote, setAddNote] = useState(props.bottleData && props.bottleData.notes)
  let prevNotes = props.bottleData && props.bottleData.notes

  // Update percentage count
  const handleClick = async (newAmount) => {

    const fields = {
      amountFull: newAmount,
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

  // Add additional note to previous notes
  const handleAddNote = async (e) => {
    e.preventDefault();
    const fields = {
      notes: props.bottleData && props.bottleData.notes ? prevNotes + ', ' + addNote : addNote
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
    setAddNote('')
    props.setUpdatedBottle(!props.updatedBottle)
  }

  // Replace all existing notes with new content
  const handleReplaceNotes = async (e) => {
    e.preventDefault();
    const fields = {
      notes: addNote,
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
    setAddNote('')
    props.setUpdatedBottle(!props.updatedBottle)
  }

  // Remove bottle from inventory
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

  const increment = () => {
    if (props.bottleData.amountFull < 1) {
      handleClick((props.bottleData.amountFull + .1), addNote);
      props.setInventoryRefresh(!props.inventoryRefresh);
    }
  }

  const decrement = () => {
    handleClick((props.bottleData.amountFull - .1), addNote);
    props.setInventoryRefresh(!props.inventoryRefresh);
    props.bottleData.amountFull <= .2 ?
      setTimeout(function () {
        window.confirm('Remove empty bottle from inventory?') ?
          handleDelete() :
          alert("OK, we'll keep it in there for you");
      }, 800) :
      props.setInventoryRefresh(!props.inventoryRefresh);
  }


  return (

    <div className="update-parent-container">

      {props.bottleData ?
        <div className="update-bottle">
          <h4 className="grab-bottle-spirit">{props.bottleData && props.bottleData.bottle}</h4>
          <h4 className="update-bottle-info">{props.bottleData && props.bottleData.category}</h4>
          <h4 className="update-bottle-info">{props.bottleData && props.bottleData.bottleSizes} mL</h4>
          <button className="add-replace" onClick={(() => setShowNotes(!showNotes))}>{showNotes === false ? "show tasting notes" : "hide tasting notes"}</button>
          <div className="counter-container">
            <div className="button-box">
              <button className="plus-minus" onClick={increment}>+</button><br></br>
              <button className="plus-minus" onClick={decrement}>-</button>
            </div>
            <div className="percentage">{Math.round((props.bottleData && props.bottleData.amountFull) * 100)}</div><p style={{ marginLeft: "15px" }}> % </p>
          </div>
        </div>
        : null
      }

      {showNotes === true ?
        <div className="tasting-notes">
          <p id="hide" onClick={() => setShowNotes(false)}>hide</p>
          <h4 className="tasting-header">notes:</h4>
          <p className="prev-notes">{prevNotes}</p>
          <form className="update-tasting-notes" onSubmit={handleAddNote}>
            <label htmlFor="notes"></label>
            <input className="add-note" type="text" value={addNote} onChange={((e) => setAddNote((e.target.value).toLowerCase()))} />
            <button className="add-replace" type="submit">add</button>
            <button className="add-replace" onClick={handleReplaceNotes} >replace</button>
          </form>
        </div>
        : null
      }

    </div>
  )
}


export default UpdateBottle