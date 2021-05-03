import React, { useState } from 'react'

function AddFundsForm({ setBudget }) {
  const [showForm, setShowForm] = useState(false)
  const [newFunds, setNewFunds] = useState(0)

  function handleButtonClick() {
    setShowForm(showForm => !showForm)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    setBudget(prevBudget => prevBudget + newFunds)
    setNewFunds(0)
  }

  const form = (
    <form onSubmit={handleFormSubmit}>
      <h1>How much would you like to add?</h1>
      <label htmlFor="funds">Funds:</label>
      <input 
        type="number" 
        id="funds"
        value={newFunds}  
        onChange={(e) => setNewFunds(parseInt(e.target.value))}
      />
      <input type="submit" value="Add those funds!" />
    </form>
  )

  return (
    <div className="form">
      {showForm && form}
      <br />
      <button onClick={handleButtonClick}>{showForm ? "Hide Form" : "Add Funds"}</button>
    </div>
  )
}

export default AddFundsForm
