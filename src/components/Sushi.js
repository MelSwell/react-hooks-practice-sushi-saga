import React, { useState } from "react";

function Sushi({ price, image, name, budget, setBudget, plates, setPlates }) {
  const [isEaten, setIsEaten] = useState(false)

  function handleSushiClick() {
    if (budget - price >= 0){
      setIsEaten(true)
      setBudget(prevBudget => prevBudget - price)
      setPlates([...plates, 1])
    }  
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={isEaten ? null : handleSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
