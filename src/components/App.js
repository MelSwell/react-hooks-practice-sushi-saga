import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import AddFundsForm from './AddFundsForm'

const API = "http://localhost:3001/sushis";

function App() {
  const [budget, setBudget] = useState(150)
  const [plates, setPlates] = useState([])
  
  return (
    <div className="app">
      <AddFundsForm budget={budget} setBudget={setBudget} />
      <SushiContainer 
        API={API} 
        setBudget={setBudget} 
        budget={budget} 
        plates={plates} 
        setPlates={setPlates}
      />
      <Table budget={budget} plates={plates}/>
    </div>
  );
}

export default App;
