import React from "react";
import ViewCard from "./ViewCard";

function MealCard({ meal }) {
    // console.log(meal)
    if (!meal) {
        return null;
    }
    
    function handleCardDisplay () {
      <ViewCard meal={meal}/>
    }
    return (
      <div className="recipe-card">
        <button onClick={handleCardDisplay}>Try this Out?</button>
        <h2>{meal.title}</h2>
        <img src={meal.image} alt={meal.title} />
      </div>
    )
}
export default MealCard