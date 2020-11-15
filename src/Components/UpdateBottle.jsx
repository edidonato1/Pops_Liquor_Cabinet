import React, { useState, useEffect } from 'react';
import axios from 'axios'

function UpdateBottle(props) {
  const [data, setData] = useState({})
  const [showNotes, setShowNotes] = useState(false)
  const [editNotes, setEditNotes] = useState(false)

  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/spirits/${props.id}`;

  useEffect(() => {
    const getBottleData = async () => {
      const response = await axios.get(
        airtableURL,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          }
        }
      )
      setData(response.data.fields)
    }
    getBottleData()
  }, [props.bottleData, airtableURL])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const handleAddNote = async (e) => {
    e.preventDefault();
    const fields = {
      notes: data.notes
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

  const handleClick = async (newAmount) => {
    const fields = {
      amountFull: newAmount,
    }
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
    if (data.amountFull < 1) {
      handleClick((data.amountFull + .1));
      props.setInventoryRefresh(!props.inventoryRefresh);
    }
  }

  const decrement = () => {
    handleClick((data.amountFull - .1));
    props.setInventoryRefresh(!props.inventoryRefresh);
    data.amountFull <= .2 ?
      setTimeout(function () {
        window.confirm('Remove empty bottle from inventory?') ?
          handleDelete() :
          alert("OK, we'll keep it in there for you");
      }, 500) :
      props.setInventoryRefresh(!props.inventoryRefresh);
  }

  const editStyle = {
    border: ".5px solid gray",
    borderRadius: "5px",
    background: "rgba(231, 228, 228, 0.5)"
  }

  return (
    <div className="update-parent-container">
      {props.bottleData ?
        <div className="update-bottle">
          <h4 className="grab-bottle-spirit">{data.bottle}</h4>
          <h4 className="update-bottle-info">{data.category}</h4>
          <h4 className="update-bottle-info">{data.bottleSizes} mL</h4>
          <button className="add-replace" onClick={(() => setShowNotes(!showNotes))}>{showNotes === false ? "show tasting notes" : "hide tasting notes"}</button>
          <div className="counter-container">
            <div className="button-box">
              <button className="plus-minus" onClick={increment}>+</button><br></br>
              <button className="plus-minus" onClick={decrement}>-</button>
            </div>
            <div className="percentage">{Math.round((props.bottleData && props.bottleData.amountFull) * 100)}</div><p style={{ marginLeft: "15px" }}> % </p>
          </div>
        </div> 
        : 
        <></>
      }

      {showNotes  ?
        <div className="tasting-notes">
          <p id="hide" onClick={() => { setShowNotes(false); setEditNotes(false) }}>hide</p>
          <h4 className="tasting-header">notes:</h4>
          <form className="update-tasting-notes" onSubmit={handleAddNote}>
            <label htmlFor="notes"></label>
            <textarea
              className="add-note"
              style={editNotes ? editStyle : null}
              name="notes"
              value={data.notes}
              onChange={editNotes ? handleChange : () => console.log('select "edit" to make changes')} /><br></br>
            {editNotes ?
              <button className="add-replace" id="edit-save" type="submit" onClick={() => setEditNotes(!editNotes)} >save</button>
              :
              <button className="add-replace" id="edit-save" onClick={() => setEditNotes(!editNotes)}>edit</button>
            }
          </form>
        </div>
        : <></>
      }
    </div>
  )
}


export default UpdateBottle