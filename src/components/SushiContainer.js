import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({ API, setBudget, budget, plates, setPlates }) {
  const [sushis, setSushis] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`${API}?_page=${page}&_limit=4`)
    .then(resp => resp.json())
    .then(sushisArr => {
      sushisArr.length > 0 ? setSushis(sushisArr) : setPage(1)
    })
  }, [page, API])
  
  const sushiComponents = sushis.map(s => {
    return (
      <Sushi
        key={s.id}
        image={s.img_url}
        name={s.name}
        price={s.price}
        budget={budget}
        setBudget={setBudget}
        plates={plates}
        setPlates={setPlates}
      />
    )
  })

  function handleMoreSushiClick() {
    setPage(page => page + 1)
  }

  
  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton handleMoreSushiClick={handleMoreSushiClick}/>
    </div>
  );
}

export default SushiContainer;
